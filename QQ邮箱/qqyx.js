var window = global;
var getsign;
document = {
    cookie: '__aegis_uid=d446099586871625-150fb470e9e1b73e-2438; confirmuin=0; ptui_loginuin=12333333; ETK=rp2DjWW*xYfdBQWQMI4Hl5LLq5zgXSRhkbDdiLP9lAOGXjxhie4jeMiBeevTC1Qg6QSmRSKrjbk9CfsKeMdNqQ__; ptdrvs=8b61ua4w6BGL*3FezSooE4RGtvj1CBlL2BPm0WrMA7lJiIe2B*PFySg*SePxft4u2xyhj5donkk_; qrsig=83323bf6ab39ed02c5b8107c15d154c5b923be4410f0ae870dc7575a5a344eefcc2e2a02a7040abce36e6948b793981f532b8a5f4eb9493b; pt_login_sig=q3J-u3kWvRLovsMs0O1oArAVrNp8tQBmGCE0Wup15PPx3nqruu9MO2r0BD9kKpjk; pt_clientip=670cb470e9e1395a; pt_serverip=e24409958274f96c; pt_local_token=-785177977; uikey=fac3c34a392d5bb03fb9b1843ed5ba863aef26e3d8f6f34ce0535b1071196ec0; pt_guid_sig=81755f29311b2d82f8a3fb996950ebeff9c7b03f9e84ed43e6e11ff86d69e605'
    , getElementById: function () {
    }
}


navigator = {
    appName: 'Netscape'
}
!function (n) {
    var o = {};

    function i(t) {
        if (o[t])
            return o[t].exports;
        var e = o[t] = {
            "i": t,
            "l": !1,
            "exports": {}
        };
        return n[t].call(e.exports, e, e.exports, i),
            e.l = !0,
            e.exports
    }

    i.m = n,
        i.c = o,
        i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                "enumerable": !0,
                "get": n
            })
        }
        ,
        i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                "value": "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    "value": !0
                })
        }
        ,
        i.t = function (e, t) {
            if (1 & t && (e = i(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (i.r(n),
                Object.defineProperty(n, "default", {
                    "enumerable": !0,
                    "value": e
                }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    i.d(n, o, function (t) {
                        return e[t]
                    }
                        .bind(null, o));
            return n
        }
        ,
        i.n = function (t) {
            var e = t && t.__esModule ? function () {
                    return t["default"]
                }
                : function () {
                    return t
                }
            ;
            return i.d(e, "a", e),
                e
        }
        ,
        i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        i.p = "",

        getsign = i
}([function (t, e) {
    var n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (o) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
    , function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            "value": !0
        }),
            exports["default"] = void 0,
        window.console || (window.console = {
            "log": function () {
            },
            "warn": function () {
            },
            "error": function () {
            }
        });
        var $ = function $(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        }, Jb, Hb, Ib, Ec;

        function Lb() {
            if (void 0 === Jb)
                if (window.localStorage)
                    Jb = localStorage;
                else
                    try {
                        (t = document.createElement("link")).style.display = "none",
                            t.id = Hb,
                            document.getElementsByTagName("head")[0].appendChild(t),
                            t.addBehavior("#default#userdata"),
                            (Jb = t).load(Hb)
                    } catch (e) {
                        return void (Jb = !1)
                    }
            var t;
            return 1
        }

        function Mb(t) {
            return "string" == typeof t && Ib.test(t)
        }

        function pluginBegin() {
            if (!$.sso_loadComplete)
                try {
                    $.checkNPPlugin()
                } catch (t) {
                }
            $.sso_loadComplete = !0,
                $.report.setSpeedPoint($.plugin_isd_flag, 1, (new Date).getTime()),
                window.setTimeout(function (t) {
                    $.report.isdSpeed($.plugin_isd_flag, .05)
                }, 2e3)
        }

        $.cookie = {
            "get": function (t) {
                var i = function i(t) {
                    if (!t)
                        return t;
                    for (; t != unescape(t);)
                        t = unescape(t);
                    for (var e = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], n = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], o = 0; o < e.length; o++)
                        t = t.replace(new RegExp(e[o], "gi"), n[o]);
                    return t
                };
                return i((t = document.cookie.match(RegExp("(^|;\\s*)" + t + "=([^;]*)(;|$)"))) ? unescape(t[2]) : "")
            },
            "set": function (t, e, n, o, i) {
                var r = new Date;
                i ? (r.setTime(r.getTime() + 36e5 * i),
                    document.cookie = t + "=" + e + "; expires=" + r.toGMTString() + "; path=" + (o || "/") + "; " + (n ? "domain=" + n + ";" : "")) : document.cookie = t + "=" + e + "; path=" + (o || "/") + "; " + (n ? "domain=" + n + ";" : "")
            },
            "del": function (t, e, n) {
                document.cookie = t + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (n || "/") + "; " + (e ? "domain=" + e + ";" : "")
            },
            "uin": function () {
                var t = $.cookie.get("uin");
                return t ? parseInt(t.substring(1, t.length), 10) : null
            }
        },
            $.iframe = function () {
                return new function () {
                    this.id = "",
                        this.parent = null,
                        this.parentID = "",
                        this.init = function (t) {
                            var e, n, o, t = t || {};
                            (this.opt = t).initTime = +new Date,
                                t.heartBeatTime = t.heartBeatTime || 1e4,
                                t.heartBeat = t.heartBeat || "heartBeat",
                            this.__hasinit || (this.__hasinit = !0,
                                e = document.createElement("iframe"),
                                console.log("createElement iFrame opt:", t),
                                console.trace(),
                                e.name = t.name || "iframe",
                                this.id = e.id = t.id || "iframeid",
                                this.parentID = t.parentID,
                                e.style.cssText = t.iframeStyle || "z-index:999;height:100%;width:100%;position:fixed;left:0;top:0;right:0;bottom:0",
                                e.src = t.url,
                                e.scrolling = "no",
                                o = null,
                                this.parentID ? (o = document.createElement("div"),
                                t.parentStyle && o.setAttribute("style", t.parentStyle),
                                    o.setAttribute("id", t.parentID),
                                t.bgFilter && ((n = document.createElement("div")).setAttribute("style", "width:100%;height:100%;position: absolute;left:0;top:0;background: inherit;filter: blur(15px);"),
                                    o.appendChild(n)),
                                    o.appendChild(e),
                                    document.body.appendChild(o)) : document.body.appendChild(e),
                                this.receiveMessageFromIframePage = function (t) {
                                    switch (console.log("receiveMessageFromIframePage", t),
                                    t && t.data && t.data.msg || "") {
                                        case "exit":
                                            this.opt.onClose && this.opt.onClose(t),
                                                this.reset(t);
                                            break;
                                        case "success":
                                            this.opt.success && this.opt.success(t);
                                            break;
                                        case this.opt.heartBeat:
                                            this.opt.onload && this.opt.onload(t),
                                                this._hasHeartBeat = !0;
                                            break;
                                        case "pt_smsSubmit":
                                            this.opt.smsSubmitEvent && this.opt.smsSubmitEvent();
                                            break;
                                        case "close_sms":
                                            this.opt.closeSms && this.opt.closeSms()
                                    }
                                }
                                    .bind(this),
                                this.heartBeat(t),
                                this.addListener(t))
                        }
                        ,
                        this.__hasinit = !1,
                        this._hasHeartBeat = !1,
                        this.addListener = function (t) {
                            window.addEventListener("message", this.receiveMessageFromIframePage, !1)
                        }
                        ,
                        this.postMessage = function (t) {
                            document.getElementById(this.id).contentWindow.postMessage(t, "https://ui.ptlogin2.qq.com")
                        }
                        ,
                        this.heartBeat = function (t) {
                            var e = this
                                , n = t.heartBeatTime || 1e4;
                            setTimeout(function () {
                                e._hasHeartBeat ? console.log("子页面调起成功") : (console.log("子页面调起失败"),
                                t.fail && t.fail({
                                    "msg": "子页面调起失败,timeout"
                                }))
                            }, n)
                        }
                        ,
                        this.reset = function () {
                            this.__hasinit = !1;
                            var t = document.getElementById(this.id)
                                , e = document.getElementById(this.parentID);
                            e ? document.body.removeChild(e) : t && document.body.removeChild(t),
                                window.removeEventListener("message", this.receiveMessageFromIframePage, !1)
                        }
                }
            }
            ,
            $.url = {
                "getParam": function (t, e) {
                    e = e || window.location.href;
                    t = new RegExp("(\\?|#|&)" + t + "=(.*?)(&|#|$)"),
                        t = e.match(t);
                    return t ? decodeURIComponent(t[2]) : ""
                }
            },
            $.http = {
                "getXHR": function () {
                    return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
                },
                "ajax": function ajax(url, para, cb, method, type) {
                    var xhr = $.http.getXHR();
                    return xhr.open(method, url),
                        xhr.onreadystatechange = function () {
                            4 == xhr.readyState && (200 <= xhr.status && xhr.status < 300 || 304 === xhr.status || 1223 === xhr.status || 0 === xhr.status ? void 0 === type && xhr.responseText ? cb(eval("(" + xhr.responseText + ")")) : (cb(xhr.responseText),
                            !xhr.responseText && $.badjs._smid && $.badjs("HTTP Empty[xhr.status]:" + xhr.status, url, 0, $.badjs._smid)) : $.badjs._smid && $.badjs("HTTP Error[xhr.status]:" + xhr.status, url, 0, $.badjs._smid),
                                xhr = null)
                        }
                        ,
                        xhr.send(para),
                        xhr
                },
                "post": function (t, e, n, o) {
                    var i, r = "";
                    for (i in e)
                        r += "&" + i + "=" + e[i];
                    return $.http.ajax(t, r, n, "POST", o)
                },
                "get": function (t, e, n, o) {
                    var i, r = [];
                    for (i in e)
                        r.push(i + "=" + e[i]);
                    return -1 == t.indexOf("?") && (t += "?"),
                        t += r.join("&"),
                        $.http.ajax(t, null, n, "GET", o)
                },
                "jsonp": function (t) {
                    var e = document.createElement("script");
                    e.src = t,
                        document.getElementsByTagName("head")[0].appendChild(e)
                },
                "loadScript": function (t, e, n) {
                    var o = document.createElement("script");
                    o.onload = o.onreadystatechange = function () {
                        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || ("function" == typeof e && e(),
                            o.onload = o.onreadystatechange = null,
                        o.parentNode && o.parentNode.removeChild(o))
                    }
                        ,
                        o.src = t,
                        document.getElementsByTagName("head")[0].appendChild(o)
                },
                "preload": function (t) {
                    document.createElement("img").src = t
                }
            },
            $.get = $.http.get,
            $.post = $.http.post,
            $.jsonp = $.http.jsonp,
            $.browser = function (t) {
                var e, n;
                return "undefined" == typeof $.browser.info && (e = {
                    "type": ""
                },
                    n = navigator.userAgent.toLowerCase(),
                    /webkit/.test(n) ? e = {
                        "type": "webkit",
                        "version": /webkit[\/ ]([\w.]+)/
                    } : /opera/.test(n) ? e = {
                        "type": "opera",
                        "version": /version/.test(n) ? /version[\/ ]([\w.]+)/ : /opera[\/ ]([\w.]+)/
                    } : /msie/.test(n) ? e = {
                        "type": "msie",
                        "version": /msie ([\w.]+)/
                    } : /mozilla/.test(n) && !/compatible/.test(n) && (e = {
                        "type": "ff",
                        "version": /rv:([\w.]+)/
                    }),
                    e.version = (e.version && e.version.exec(n) || [0, "0"])[1],
                    $.browser.info = e),
                    $.browser.info[t]
            }
            ,
            $.e = {
                "_counter": 0,
                "_uid": function () {
                    return "h" + $.e._counter++
                },
                "add": function (e, t, n) {
                    var o, i, r;
                    "object" != typeof e && (e = $(e)),
                        document.addEventListener ? e.addEventListener(t, n, !1) : document.attachEvent && -1 == $.e._find(e, t, n) && (o = function o(t) {
                            t = {
                                "_event": t = t || window.event,
                                "type": t.type,
                                "target": t.srcElement,
                                "currentTarget": e,
                                "relatedTarget": t.fromElement || t.toElement,
                                "eventPhase": t.srcElement == e ? 2 : 3,
                                "clientX": t.clientX,
                                "clientY": t.clientY,
                                "screenX": t.screenX,
                                "screenY": t.screenY,
                                "altKey": t.altKey,
                                "ctrlKey": t.ctrlKey,
                                "shiftKey": t.shiftKey,
                                "keyCode": t.keyCode,
                                "data": t.data,
                                "origin": t.origin,
                                "stopPropagation": function () {
                                    this._event.cancelBubble = !0
                                },
                                "preventDefault": function () {
                                    this._event.returnValue = !1
                                }
                            };
                            Function.prototype.call ? n.call(e, t) : (e._currentHandler = n,
                                e._currentHandler(t),
                                e._currentHandler = null)
                        }
                            ,
                            e.attachEvent("on" + t, o),
                            i = {
                                "element": e,
                                "eventType": t,
                                "handler": n,
                                "wrappedHandler": o
                            },
                            r = (e.document || e).parentWindow,
                            t = $.e._uid(),
                        r._allHandlers || (r._allHandlers = {}),
                            r._allHandlers[t] = i,
                        e._handlers || (e._handlers = []),
                            e._handlers.push(t),
                        r._onunloadHandlerRegistered || (r._onunloadHandlerRegistered = !0,
                            r.attachEvent("onunload", $.e._removeAllHandlers)))
                },
                "remove": function (t, e, n) {
                    var o, i, r;
                    document.addEventListener ? t.removeEventListener(e, n, !1) : !document.attachEvent || -1 != (o = $.e._find(t, e, n)) && (i = (t.document || t).parentWindow,
                        r = t._handlers[o],
                        n = i._allHandlers[r],
                        t.detachEvent("on" + e, n.wrappedHandler),
                        t._handlers.splice(o, 1),
                        delete i._allHandlers[r])
                },
                "_find": function (t, e, n) {
                    var o = t._handlers;
                    if (!o)
                        return -1;
                    for (var i = (t.document || t).parentWindow, r = o.length - 1; 0 <= r; r--) {
                        var a = o[r]
                            , a = i._allHandlers[a];
                        if (a.eventType == e && a.handler == n)
                            return r
                    }
                    return -1
                },
                "_removeAllHandlers": function () {
                    for (id in this._allHandlers) {
                        var t = this._allHandlers[id];
                        t.element.detachEvent("on" + t.eventType, t.wrappedHandler),
                            delete this._allHandlers[id]
                    }
                },
                "src": function (t) {
                    return t ? t.target : event.srcElement
                },
                "stopPropagation": function (t) {
                    t ? t.stopPropagation() : event.cancelBubble = !0
                },
                "trigger": function (t, e) {
                    var n = {
                        "HTMLEvents": "abort,blur,change,error,focus,load,reset,resize,scroll,select,submit,unload",
                        "UIEevents": "keydown,keypress,keyup",
                        "MouseEvents": "click,mousedown,mousemove,mouseout,mouseover,mouseup"
                    };
                    if (document.createEvent) {
                        var o, i = "";
                        for (o in "mouseleave" == e && (e = "mouseout"),
                        "mouseenter" == e && (e = "mouseover"),
                            n)
                            if (n[o].indexOf(e)) {
                                i = o;
                                break
                            }
                        var r = document.createEvent(i);
                        r.initEvent(e, !0, !1),
                            t.dispatchEvent(r)
                    } else
                        document.createEventObject && t.fireEvent("on" + e)
                }
            },
            $.bom = {
                "query": function (t) {
                    t = window.location.search.match(new RegExp("(\\?|&)" + t + "=([^&]*)(&|$)"));
                    return t ? decodeURIComponent(t[2]) : ""
                },
                "getHash": function (t) {
                    t = window.location.hash.match(new RegExp("(#|&)" + t + "=([^&]*)(&|$)"));
                    return t ? decodeURIComponent(t[2]) : ""
                }
            },
            $.winName = {
                "set": function (t, e) {
                    var n = window.name || "";
                    n.match(new RegExp(";" + t + "=([^;]*)(;|$)")) ? window.name = n.replace(new RegExp(";" + t + "=([^;]*)"), ";" + t + "=" + e) : window.name = n + ";" + t + "=" + e
                },
                "get": function (t) {
                    t = (window.name || "").match(new RegExp(";" + t + "=([^;]*)(;|$)"));
                    return t ? t[1] : ""
                },
                "clear": function (t) {
                    var e = window.name || "";
                    window.name = e.replace(new RegExp(";" + t + "=([^;]*)"), "")
                }
            },
            $.localData = (Hb = "ptlogin2.qq.com",
                Ib = /^[0-9A-Za-z_-]*$/,
                {
                    "set": function (t, e) {
                        var n = !1;
                        if (Mb(t) && Lb())
                            try {
                                e += "",
                                    n = window.localStorage ? (Jb.setItem(t, e),
                                        !0) : (Jb.setAttribute(t, e),
                                        Jb.save(Hb),
                                    Jb.getAttribute(t) === e)
                            } catch (o) {
                            }
                        return n
                    },
                    "get": function (t) {
                        if (Mb(t) && Lb())
                            try {
                                return window.localStorage ? Jb.getItem(t) : Jb.getAttribute(t)
                            } catch (e) {
                            }
                        return null
                    },
                    "remove": function (t) {
                        if (Mb(t) && Lb())
                            try {
                                return window.localStorage ? Jb.removeItem(t) : Jb.removeAttribute(t),
                                    !0
                            } catch (e) {
                            }
                        return !1
                    }
                }),
            $.str = function () {
                var htmlDecodeDict = {
                    "quot": '"',
                    "lt": "<",
                    "gt": ">",
                    "amp": "&",
                    "nbsp": " ",
                    "#34": '"',
                    "#60": "<",
                    "#62": ">",
                    "#38": "&",
                    "#160": " "
                }
                    , htmlEncodeDict = {
                    '"': "#34",
                    "<": "#60",
                    ">": "#62",
                    "&": "#38",
                    " ": "#160"
                };
                return {
                    "decodeHtml": function (t) {
                        return (t += "").replace(/&(quot|lt|gt|amp|nbsp);/gi, function (t, e) {
                            return htmlDecodeDict[e]
                        }).replace(/&#u([a-f\d]{4});/gi, function (t, e) {
                            return String.fromCharCode(parseInt("0x" + e))
                        }).replace(/&#(\d+);/gi, function (t, e) {
                            return String.fromCharCode(+e)
                        })
                    },
                    "encodeHtml": function (t) {
                        return (t += "").replace(/["<>& ]/g, function (t) {
                            return "&" + htmlEncodeDict[t] + ";"
                        })
                    },
                    "trim": function (t) {
                        for (var e = /\s/, n = (t = (t += "").replace(/^\s+/, "")).length; e.test(t.charAt(--n));)
                            ;
                        return t.slice(0, n + 1)
                    },
                    "uin2hex": function uin2hex(str) {
                        var maxLength = 16;
                        str = parseInt(str);
                        for (var hex = str.toString(16), len = hex.length, i = len; i < maxLength; i++)
                            hex = "0" + hex;
                        for (var arr = [], j = 0; j < maxLength; j += 2)
                            arr.push("\\x" + hex.substr(j, 2));
                        var result = arr.join("");
                        return eval('result="' + result + '"'),
                            result
                    },
                    "bin2String": function (t) {
                        for (var e = [], n = 0, o = t.length; n < o; n++) {
                            var i = t.charCodeAt(n).toString(16);
                            1 == i.length && (i = "0" + i),
                                e.push(i)
                        }
                        return e = "0x" + e.join(""),
                            e = parseInt(e, 16)
                    },
                    "str2bin": function str2bin(str) {
                        for (var arr = [], i = 0; i < str.length; i += 2)
                            arr.push(eval("'\\x" + str.charAt(i) + str.charAt(i + 1) + "'"));
                        return arr.join("")
                    },
                    "utf8ToUincode": function (t) {
                        var e = "";
                        try {
                            var n = t.length
                                , o = [];
                            for (i = 0; i < n; i += 2)
                                o.push("%" + t.substr(i, 2));
                            e = decodeURIComponent(o.join("")),
                                e = $.str.decodeHtml(e)
                        } catch (r) {
                            e = ""
                        }
                        return e
                    },
                    "json2str": function (t) {
                        var e = "";
                        if ("undefined" != typeof JSON)
                            e = JSON.stringify(t);
                        else {
                            var n, o = [];
                            for (n in t)
                                o.push('"' + n + '":"' + t[n] + '"');
                            e = "{" + o.join(",") + "}"
                        }
                        return e
                    },
                    "time33": function (t) {
                        for (var e = 0, n = 0, o = t.length; n < o; n++)
                            e = (33 * e + t.charCodeAt(n)) % 4294967296;
                        return e
                    },
                    "hash33": function (t) {
                        for (var e = 0, n = 0, o = t.length; n < o; ++n)
                            e += (e << 5) + t.charCodeAt(n);
                        return 2147483647 & e
                    }
                }
            }(),
            $.css = (Ec = document.documentElement,
                {
                    "getComputedStyle": function (t) {
                        return window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
                    },
                    "getCurrentPixelStyle": function (t, e) {
                        if (window.getComputedStyle)
                            var n = parseInt(window.getComputedStyle(t)[e]);
                        else {
                            if ("auto" === (n = t.currentStyle[e] || 0))
                                switch (e || "") {
                                    case "width":
                                    case "height":
                                        return t.offsetHeight
                                }
                            var o = t.style.left
                                , i = t.runtimeStyle.left;
                            t.runtimeStyle.left = t.currentStyle.left,
                                t.style.left = "fontSize" === e ? "1em" : n,
                                n = t.style.pixelLeft + "px",
                                t.style.left = o,
                                t.runtimeStyle.left = i
                        }
                        return parseInt(n)
                    },
                    "getPageScrollTop": function () {
                        return window.pageYOffset || Ec.scrollTop || document.body.scrollTop || 0
                    },
                    "getPageScrollLeft": function () {
                        return window.pageXOffset || Ec.scrollLeft || document.body.scrollLeft || 0
                    },
                    "getOffsetPosition": function (t) {
                        t = $(t);
                        var e = 0
                            , n = 0;
                        if (Ec.getBoundingClientRect && t.getBoundingClientRect)
                            var o = t.getBoundingClientRect()
                                , i = Ec.clientTop || document.body.clientTop || 0
                                , r = Ec.clientLeft || document.body.clientLeft || 0
                                , e = o.top + this.getPageScrollTop() - i
                                , n = o.left + this.getPageScrollLeft() - r;
                        else
                            for (; e += t.offsetTop || 0,
                                       n += t.offsetLeft || 0,
                                       t = t.offsetParent,
                                       t;)
                                ;
                        return {
                            "left": n,
                            "top": e
                        }
                    },
                    "getWidth": function (t) {
                        return $(t).offsetWidth
                    },
                    "getHeight": function (t) {
                        return $(t).offsetHeight
                    },
                    "show": function (t) {
                        t.style.display = "block"
                    },
                    "hide": function (t) {
                        t.style.display = "none"
                    },
                    "hasClass": function (t, e) {
                        if (!t.className)
                            return !1;
                        for (var n = t.className.split(" "), o = 0, i = n.length; o < i; o++)
                            if (e == n[o])
                                return !0;
                        return !1
                    },
                    "addClass": function (t, e) {
                        $.css.updateClass(t, e, !1)
                    },
                    "removeClass": function (t, e) {
                        $.css.updateClass(t, !1, e)
                    },
                    "updateClass": function (t, e, n) {
                        for (var o = t.className.split(" "), i = {}, r = 0, a = o.length; r < a; r++)
                            o[r] && (i[o[r]] = !0);
                        if (e)
                            for (var u = e.split(" "), r = 0, a = u.length; r < a; r++)
                                u[r] && (i[u[r]] = !0);
                        if (n) {
                            var s = n.split(" ");
                            for (r = 0,
                                     a = s.length; r < a; r++)
                                s[r] && delete i[s[r]]
                        }
                        var l, c = [];
                        for (l in i)
                            c.push(l);
                        t.className = c.join(" ")
                    },
                    "setClass": function (t, e) {
                        t.className = e
                    }
                }),
            $.animate = {
                "fade": function (t, e, n, o, i) {
                    var r, a, u, s, l, c, f;
                    (t = $(t)) && (t.effect || (t.effect = {}),
                        r = Object.prototype.toString.call(e),
                        a = 100,
                        isNaN(e) ? "[object Object]" == r && e && e.to && (isNaN(e.to) || (a = e.to),
                        isNaN(e.from) || (t.style.opacity = e.from / 100,
                            t.style.filter = "alpha(opacity=" + e.from + ")")) : a = e,
                    "undefined" == typeof t.effect.fade && (t.effect.fade = 0),
                        window.clearInterval(t.effect.fade),
                        n = n || 1,
                        o = o || 20,
                        u = window.navigator.userAgent.toLowerCase(),
                        s = function s(t) {
                            var e;
                            return t = -1 != u.indexOf("msie") ? 0 <= (e = (t.currentStyle || {}).filter || "").indexOf("opacity") ? parseFloat(e.match(/opacity=([^)]*)/)[1]) + "" : "100" : 100 * ((e = (e = t.ownerDocument.defaultView) && e.getComputedStyle) && e(t, null)["opacity"] || 1),
                                parseFloat(t)
                        }
                        ,
                        l = s(t),
                        c = l < a ? 1 : -1,
                    -1 != u.indexOf("msie") && o < 15 && (n = Math.floor(15 * n / o),
                        o = 15),
                        f = function f() {
                            l += n * c,
                                0 <= (Math.round(l) - a) * c ? (t.style.opacity = a / 100,
                                    t.style.filter = "alpha(opacity=" + a + ")",
                                    window.clearInterval(t.effect.fade),
                                "function" == typeof i && i(t)) : (t.style.opacity = l / 100,
                                    t.style.filter = "alpha(opacity=" + l + ")")
                        }
                        ,
                        t.effect.fade = window.setInterval(f, o))
                },
                "animate": function (n, o, i, t, r) {
                    if (n = $(n)) {
                        for (var e in n.effect || (n.effect = {}),
                        "undefined" == typeof n.effect.animate && (n.effect.animate = 0),
                            o)
                            o[e] = parseInt(o[e]) || 0;
                        window.clearInterval(n.effect.animate);
                        var i = i || 10
                            , t = t || 20
                            , a = function a(t) {
                            return {
                                "left": t.offsetLeft,
                                "top": t.offsetTop
                            }
                        }
                            , u = a(n)
                            , s = {
                            "width": n.clientWidth,
                            "height": n.clientHeight,
                            "left": u.left,
                            "top": u.top
                        }
                            , l = [];
                        -1 != window.navigator.userAgent.toLowerCase().indexOf("msie") && "BackCompat" == document.compatMode || (f = document.defaultView ? document.defaultView.getComputedStyle(n, null) : n.currentStyle,
                            u = o.width || 0 == o.width ? parseInt(o.width) : null,
                            c = o.height || 0 == o.height ? parseInt(o.height) : null,
                        "number" == typeof u && (l.push("width"),
                            o.width = u - f.paddingLeft.replace(/\D/g, "") - f.paddingRight.replace(/\D/g, "")),
                        "number" == typeof c && (l.push("height"),
                            o.height = c - f.paddingTop.replace(/\D/g, "") - f.paddingBottom.replace(/\D/g, "")),
                        t < 15 && (i = Math.floor(15 * i / t),
                            t = 15));
                        var c = o.left || 0 == o.left ? parseInt(o.left) : null
                            , f = o.top || 0 == o.top ? parseInt(o.top) : null;
                        "number" == typeof c && (l.push("left"),
                            n.style.position = "absolute"),
                        "number" == typeof f && (l.push("top"),
                            n.style.position = "absolute");
                        for (var d = [], p = l.length, e = 0; e < p; e++)
                            d[l[e]] = s[l[e]] < o[l[e]] ? 1 : -1;
                        var h = n.style
                            , g = function g() {
                            for (var t = !0, e = 0; e < p; e++)
                                s[l[e]] = s[l[e]] + d[l[e]] * Math.abs(o[l[e]] - s[l[e]]) * i / 100,
                                    0 <= (Math.round(s[l[e]]) - o[l[e]]) * d[l[e]] ? (t = t && !0,
                                        h[l[e]] = o[l[e]] + "px") : (t = t && !1,
                                        h[l[e]] = s[l[e]] + "px");
                            t && (window.clearInterval(n.effect.animate),
                            "function" == typeof r && r(n))
                        };
                        n.effect.animate = window.setInterval(g, t)
                    }
                },
                "animate2": function (t, e, n, o, i) {
                    var r, n = n || 1, o = o || 20, a = $(t), u = $.css.getComputedStyle(a), s = {}, l = {};
                    for (r in e)
                        s[r] = u[r].replace(/[-\d\s]/g, "") || e[r].replace(/[-\d\s]/g, "") || "",
                            e[r] = parseFloat(e[r]),
                            l[r] = parseFloat(u[r]);
                    var c = 100 / n
                        , f = 0
                        , d = setInterval(function () {
                        if (f++ >= c)
                            clearInterval(d);
                        else
                            for (var t in e)
                                a.style[t] = (e[t] - l[t]) * f / c + l[t] + s[t]
                    }, o)
                }
            },
            $.check = {
                "isHttps": function () {
                    return "https:" == document.location.protocol
                },
                "isSsl": function () {
                    var t = document.location.host;
                    return /^ssl./i.test(t)
                },
                "isIpad": function () {
                    var t = navigator.userAgent.toLowerCase();
                    return /ipad/i.test(t)
                },
                "isQQ": function (t) {
                    return /^[1-9]{1}\d{4,9}$/.test(t)
                },
                "isQQMail": function (t) {
                    return /^[1-9]{1}\d{4,9}@qq\.com$/.test(t)
                },
                "isNullQQ": function (t) {
                    return /^\d{1,4}$/.test(t)
                },
                "isNick": function (t) {
                    return /^[a-zA-Z]{1}([a-zA-Z0-9]|[-_]){0,19}$/.test(t)
                },
                "isName": function (t) {
                    return "<请输入帐号>" != t && /[\u4E00-\u9FA5]{1,8}/.test(t)
                },
                "isPhone": function (t) {
                    return /^(?:86|886|)1\d{10}\s*$/.test(t)
                },
                "isSeaPhone": function (t) {
                    return /^(00)?(?:852|853|886(0)?\d{1})\d{8}$/.test(t)
                },
                "isMail": function (t) {
                    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)
                },
                "isQiyeQQ800": function (t) {
                    return /^(800)\d{7}$/.test(t)
                },
                "isPassword": function (t) {
                    return t && 16 <= t.length
                },
                "isForeignPhone": function (t) {
                    return /^00\d{7,}/.test(t)
                },
                "needVip": function (t) {
                    for (var e = ["21001601", "21000110", "21000121", "46000101", "716027609", "716027610", "549000912", "637009801"], n = !0, o = 0, i = e.length; o < i; o++)
                        if (e[o] == t) {
                            n = !1;
                            break
                        }
                    return n
                },
                "isPaipai": function () {
                    return /paipai.com$/.test(window.location.hostname)
                },
                "is_weibo_appid": function (t) {
                    return 46000101 == t || 607000101 == t || 558032501 == t || 682023901 == t
                }
            },
            $.report = {
                "monitor": function (t, e) {
                    if (!(Math.random() > (e || 1)))
                        try {
                            var n = location.protocol + "//ui.ptlogin2.qq.com/cgi-bin/report?id=" + t;
                            $.http.preload(n)
                        } catch (o) {
                        }
                },
                "nlog": function (t, e, n, o) {
                    if (!(Math.random() >= (n || 1)))
                        try {
                            var i = "//ui.ptlogin2.qq.com/cgi-bin/report?"
                                ,
                                r = encodeURIComponent(t + "|_|" + location.href + "|_|" + window.navigator.userAgent);
                            o && (i += "u=" + o + "&"),
                                i += "id=" + (e = e || 0) + "&msg=" + r + "&v=" + Math.random(),
                                $.http.preload(i)
                        } catch (a) {
                        }
                },
                "simpleIsdSpeed": function (t, e) {
                    Math.random() < (e || 1) && (e = "http://isdspeed.qq.com/cgi-bin/r.cgi?",
                    $.check.isHttps() && (e = "https://huatuospeed.weiyun.com/cgi-bin/r.cgi?"),
                        e += t,
                        $.http.preload(e))
                },
                "isdSpeed": function (t, e) {
                    var n = !1
                        , o = "http://isdspeed.qq.com/cgi-bin/r.cgi?";
                    if ($.check.isHttps() && (o = "https://huatuospeed.weiyun.com/cgi-bin/r.cgi?"),
                        o += t,
                    Math.random() < (e || 1)) {
                        var i, r = $.report.getSpeedPoints(t);
                        for (i in r)
                            r[i] && r[i] < 3e4 && (o += "&" + i + "=" + r[i],
                                n = !0);
                        o += "&v=" + Math.random(),
                        n && $.http.preload(o)
                    }
                    $.report.setSpeedPoint(t)
                },
                "speedPoints": {},
                "basePoint": {},
                "setBasePoint": function (t, e) {
                    $.report.basePoint[t] = e
                },
                "setSpeedPoint": function (t, e, n) {
                    e ? ($.report.speedPoints[t] || ($.report.speedPoints[t] = {}),
                        $.report.speedPoints[t][e] = n - $.report.basePoint[t]) : $.report.speedPoints[t] = {}
                },
                "setSpeedPoints": function (t, e) {
                    $.report.speedPoints[t] = e
                },
                "getSpeedPoints": function (t) {
                    return $.report.speedPoints[t]
                }
            },
            $.sso_ver = 0,
            $.sso_state = 0,
            $.plugin_isd_flag = "",
            $.nptxsso = null,
            $.activetxsso = null,
            $.sso_loadComplete = !0,
            $.np_clock = 0,
            $.loginQQnum = 0,
            $.suportActive = function () {
                var t = !0;
                try {
                    window.ActiveXObject || window.ActiveXObject.prototype ? (t = !0,
                    window.ActiveXObject.prototype && !window.ActiveXObject && $.report.nlog("activeobject 判断有问题")) : t = !1
                } catch (e) {
                    t = !1
                }
                return t
            }
            ,
            $.getLoginQQNum = function () {
                try {
                    var t = 0;
                    if ($.suportActive()) {
                        $.plugin_isd_flag = "flag1=7808&flag2=1&flag3=20",
                            $.report.setBasePoint($.plugin_isd_flag, new Date);
                        var e = new ActiveXObject("SSOAxCtrlForPTLogin.SSOForPTLogin2")
                            , n = ($.activetxsso = e).CreateTXSSOData();
                        e.InitSSOFPTCtrl(0, n);
                        t = e.DoOperation(2, n).GetArray("PTALIST").GetSize();
                        try {
                            var o = e.QuerySSOInfo(1);
                            $.sso_ver = o.GetInt("nSSOVersion")
                        } catch (a) {
                            $.sso_ver = 0
                        }
                    } else if (navigator.mimeTypes["application/nptxsso"])
                        if ($.plugin_isd_flag = "flag1=7808&flag2=1&flag3=21",
                            $.report.setBasePoint($.plugin_isd_flag, (new Date).getTime()),
                        $.nptxsso || ($.nptxsso = document.createElement("embed"),
                            $.nptxsso.type = "application/nptxsso",
                            $.nptxsso.style.width = "0px",
                            $.nptxsso.style.height = "0px",
                            document.body.appendChild($.nptxsso)),
                        "function" != typeof $.nptxsso.InitPVANoST)
                            $.sso_loadComplete = !1,
                                $.report.nlog("没有找到插件的InitPVANoST方法", 269929);
                        else {
                            $.nptxsso.InitPVANoST() && (t = $.nptxsso.GetPVACount(),
                                $.sso_loadComplete = !0);
                            try {
                                $.sso_ver = $.nptxsso.GetSSOVersion()
                            } catch (a) {
                                $.sso_ver = 0
                            }
                        }
                    else
                        $.report.nlog("插件没有注册成功", 263744),
                            $.sso_state = 2
                } catch (a) {
                    var i = null;
                    try {
                        i = $.http.getXHR()
                    } catch (a) {
                        return 0
                    }
                    var r = a.message || a;
                    return /^pt_windows_sso/.test(r) ? (/^pt_windows_sso_\d+_3/.test(r) ? $.report.nlog("QQ插件不支持该url" + a.message, 326044) : $.report.nlog("QQ插件抛出内部错误" + a.message, 325361),
                        $.sso_state = 1) : i && "msie" == $.browser("type") ? "Win64" != window.navigator.platform ? ($.report.nlog("可能没有安装QQ" + a.message, 322340),
                        $.sso_state = 2) : $.report.nlog("使用64位IE" + a.message, 343958) : ($.report.nlog("获取登录QQ号码出错" + a.message, 263745),
                    window.ActiveXObject && "Win32" == window.navigator.platform && ($.sso_state = 1)),
                        0
                }
                return $.loginQQnum = t
            }
            ,
            $.checkNPPlugin = function () {
                var t = 10;
                window.clearInterval($.np_clock),
                    $.np_clock = window.setInterval(function () {
                        "function" == typeof $.nptxsso.InitPVANoST || 0 == t ? (window.clearInterval($.np_clock),
                        "function" == typeof $.nptxsso.InitPVANoST && pt.plogin.auth()) : t--
                    }, 200)
            }
            ,
            $.guanjiaPlugin = null,
            $.initGuanjiaPlugin = function () {
                try {
                    window.ActiveXObject ? $.guanjiaPlugin = new ActiveXObject("npQMExtensionsIE.Basic") : navigator.mimeTypes["application/qqpcmgr-extensions-mozilla"] && ($.guanjiaPlugin = document.createElement("embed"),
                        $.guanjiaPlugin.type = "application/qqpcmgr-extensions-mozilla",
                        $.guanjiaPlugin.style.width = "0px",
                        $.guanjiaPlugin.style.height = "0px",
                        document.body.appendChild($.guanjiaPlugin));
                    var t = $.guanjiaPlugin.QMGetVersion().split(".");
                    4 == t.length && 9319 <= t[2] || ($.guanjiaPlugin = null)
                } catch (e) {
                    $.guanjiaPlugin = null
                }
            }
            ,
        "" != $.cookie.get("nohost_guid") && $.http.loadScript("/nohost_htdocs/js/SwitchHost.js", function () {
            var t = window["SwitchHost"] && window["SwitchHost"].init;
            t && t()
        }),
        document.getElementsByClassName || (document.getElementsByClassName = function (t) {
                for (var e = [], n = new RegExp("(^| )" + t + "( |$)"), o = document.getElementsByTagName("*"), i = 0, r = o.length; i < r; i++)
                    n.test(o[i].className) && e.push(o[i]);
                return e
            }
        );
        var _default = $;
        exports["default"] = _default
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.getCallerName = e.logger = void 0;
        var u = (new Date).getTime()
            , s = function s(t, e, n) {
            return String.prototype.padStart ? String.prototype.padStart.call(t, e, n) : t
        }
            , o = 1
            , i = 10
            , r = 100
            , a = i
            , l = function l(t) {
            return ""
        };
        e.getCallerName = l;
        var c = function c() {
            var t = new Date
                , e = s(String(t.getMonth() + 1), 2, "0")
                , n = s(String(t.getDate()), 2, "0")
                , o = s(String(t.getHours()), 2, "0")
                , i = s(String(t.getMinutes()), 2, "0")
                , r = s(String(t.getSeconds()), 2, "0")
                , a = s(String(t.getUTCMilliseconds()), 3, "0");
            return "".concat(t.getFullYear(), "-").concat(e, "-").concat(n, " ").concat(o, ":").concat(i, ":").concat(r, " ").concat(a)
        }
            , f = function f(t, e) {
            for (var n, o = arguments.length, i = new Array(2 < o ? o - 2 : 0), r = 2; r < o; r++)
                i[r - 2] = arguments[r];
            try {
                if (!window.console || !window.console.log || "function" != typeof window.console.log)
                    return;
                if ((n = console).log.apply(n, ["".concat(c(), " [").concat(u, "][").concat(t.toUpperCase(), "]").concat(e ? "[".concat(e, "]") : "")].concat(i)),
                !window.g_aegis || !window.g_aegis.info)
                    return void console.log("aegis instance is null, do not report");
                if (!i || !i.join)
                    return void console.log("illegal args:", i);
                (n = window.g_aegis).info.apply(n, ["".concat(c(), " [").concat(t.toUpperCase(), "][").concat(u, "]").concat(e ? "[".concat(e, "]") : "")].concat(i))
            } catch (a) {
                console.log("[ERROR] error occured when print log", a)
            }
        }
            , d = {
            "log": function () {
                if (!(o < a)) {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    f.apply(void 0, [" log  ", "".concat(l(3))].concat(e))
                }
            },
            "info": function () {
                if (!(i < a)) {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    f.apply(void 0, [" info ", "".concat(l(3))].concat(e))
                }
            },
            "warn": function () {
                if (!(r < a)) {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    f.apply(void 0, [" warn ", "".concat(l(3))].concat(e))
                }
            },
            "error": function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                f.apply(void 0, [" error", "".concat(l(3))].concat(e))
            }
        };
        e.logger = d
    }
    , function (t, e, n) {
        "use strict";
        e["a"] = function (e) {
            var n = this.constructor;
            return this.then(function (t) {
                return n.resolve(e()).then(function () {
                    return t
                })
            }, function (t) {
                return n.resolve(e()).then(function () {
                    return n.reject(t)
                })
            })
        }
    }
    , function (t, e, n) {
        "use strict";
        e["a"] = function (n) {
            return new this(function (o, t) {
                    if (!n || "undefined" == typeof n.length)
                        return t(new TypeError(typeof n + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                    var i = Array.prototype.slice.call(n);
                    if (0 === i.length)
                        return o([]);
                    var r = i.length;
                    for (var e = 0; e < i.length; e++)
                        !function a(e, t) {
                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                var n = t.then;
                                if ("function" == typeof n)
                                    return void n.call(t, function (t) {
                                        a(e, t)
                                    }, function (t) {
                                        i[e] = {
                                            "status": "rejected",
                                            "reason": t
                                        },
                                        0 == --r && o(i)
                                    })
                            }
                            i[e] = {
                                "status": "fulfilled",
                                "value": t
                            },
                            0 == --r && o(i)
                        }(e, i[e])
                }
            )
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var s = {
            "PADCHAR": "=",
            "ALPHA": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            "getbyte": function (t, e) {
                e = t.charCodeAt(e);
                if (255 < e)
                    throw "INVALID_CHARACTER_ERR: DOM Exception 5";
                return e
            },
            "encode": function (t) {
                if (1 != arguments.length)
                    throw "SyntaxError: Not enough arguments";
                var e, n, o = s.PADCHAR, i = s.ALPHA, r = s.getbyte, a = [], u = (t = "" + t).length - t.length % 3;
                if (0 == t.length)
                    return t;
                for (e = 0; e < u; e += 3)
                    n = r(t, e) << 16 | r(t, e + 1) << 8 | r(t, e + 2),
                        a.push(i.charAt(n >> 18)),
                        a.push(i.charAt(n >> 12 & 63)),
                        a.push(i.charAt(n >> 6 & 63)),
                        a.push(i.charAt(63 & n));
                switch (t.length - u) {
                    case 1:
                        n = r(t, e) << 16,
                            a.push(i.charAt(n >> 18) + i.charAt(n >> 12 & 63) + o + o);
                        break;
                    case 2:
                        n = r(t, e) << 16 | r(t, e + 1) << 8,
                            a.push(i.charAt(n >> 18) + i.charAt(n >> 12 & 63) + i.charAt(n >> 6 & 63) + o)
                }
                return a.join("")
            }
        };
        e["default"] = s
    }
    , function (t, e) {
        var o = Object.defineProperty;
        o && function () {
            var t = {};
            try {
                for (var e in o(t, "x", {
                    "enumerable": !1,
                    "value": t
                }),
                    t)
                    return !1;
                return t.x === t
            } catch (n) {
                return !1
            }
        }() || (Object.defineProperty = function (t, e, n) {
                if (o && 1 == t.nodeType)
                    return o(t, e, n);
                t[e] = n.value || n.get && n.get()
            }
        )
    }
    , function (t, e, n) {
        "use strict";
        Function.prototype.bind || (Function.prototype.bind = function (t) {
                if ("function" != typeof this)
                    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var e = Array.prototype.slice.call(arguments, 1)
                    , n = this
                    , o = function o() {
                }
                    , i = function i() {
                    return n.apply(this instanceof o && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                };
                return o.prototype = this.prototype,
                    i.prototype = new o,
                    i
            }
        )
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.HTTP_CODE = e.RET_CODE = e.TYPE = e.report007 = void 0;
        var o = function () {
            return (o = Object.assign || function (t) {
                    for (var e, n = 1, o = arguments.length; n < o; n++)
                        for (var i in e = arguments[n])
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }
            ).apply(this, arguments)
        }
            , i = {
            "SUCCESS": 0,
            "FAILED": 1
        };
        e.TYPE = i;
        var r = {
            "OK": 200,
            "SERVER_INTERNAL_ERROR": 500,
            "TIMEOUT": 504
        };
        e.HTTP_CODE = r;
        var a = {
            "OK": 0,
            "UNKNOW": 9998,
            "MEANINGLESS": 9999,
            "JSON_PARSE_ERROR": 9997,
            "EMPTY_RESPONSE_BODY": 9996
        };
        e.RET_CODE = a;
        var u = function u(t) {
            var e;
            t.cgi ? (e = o({
                "app": "ptlogin",
                "type": i.FAILED,
                "retcode": a.UNKNOW,
                "cost": 10086
            }, t),
            t.httpcode !== r.OK && (e.retcode = a.MEANINGLESS),
                e = "https://report.qqweb.qq.com/report/007?app=" + encodeURIComponent(e.app) + "&url=" + encodeURIComponent(e.cgi) + "&type=" + e.type + "&httpcode=" + e.httpcode + "&retcode=" + e.retcode + "&cost=" + e.cost,
                (new Image).src = e) : console.log("cgi 为空，忽略上报")
        };
        e.report007 = u
    }
    , , function (t, e, n) {
        "use strict";
        (function (i) {
                var d = n(24)
                    , p = n(25)
                    , e = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
                    , h = /[\n\r\t]/g
                    , r = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
                    , u = /:\d+$/
                    , s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
                    , g = /^[a-zA-Z]:/;

                function m(t) {
                    return (t || "").toString().replace(e, "")
                }

                var _ = [["#", "hash"], ["?", "query"], function (t, e) {
                    return v(e.protocol) ? t.replace(/\\/g, "/") : t
                }
                    , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", undefined, 1, 1], [/:(\d*)$/, "port", undefined, 1], [NaN, "hostname", undefined, 1, 1]]
                    , a = {
                    "hash": 1,
                    "query": 1
                };

                function y(t) {
                    var e,
                        n = "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : {},
                        n = n.location || {}, o = {}, n = typeof (t = t || n);
                    if ("blob:" === t.protocol)
                        o = new b(unescape(t.pathname), {});
                    else if ("string" == n)
                        for (e in o = new b(t, {}),
                            a)
                            delete o[e];
                    else if ("object" == n) {
                        for (e in t)
                            e in a || (o[e] = t[e]);
                        o.slashes === undefined && (o.slashes = r.test(t.href))
                    }
                    return o
                }

                function v(t) {
                    return "file:" === t || "ftp:" === t || "http:" === t || "https:" === t || "ws:" === t || "wss:" === t
                }

                function w(t, e) {
                    t = (t = m(t)).replace(h, ""),
                        e = e || {};
                    var n, o = s.exec(t), i = o[1] ? o[1].toLowerCase() : "", r = !!o[2], a = !!o[3], t = 0;
                    return r ? t = a ? (n = o[2] + o[3] + o[4],
                    o[2].length + o[3].length) : (n = o[2] + o[4],
                        o[2].length) : a ? (n = o[3] + o[4],
                        t = o[3].length) : n = o[4],
                        "file:" === i ? 2 <= t && (n = n.slice(2)) : v(i) ? n = o[4] : i ? r && (n = n.slice(2)) : 2 <= t && v(e.protocol) && (n = o[4]),
                        {
                            "protocol": i,
                            "slashes": r || v(i),
                            "slashesCount": t,
                            "rest": n
                        }
                }

                function b(t, e, n) {
                    if (t = (t = m(t)).replace(h, ""),
                        !(this instanceof b))
                        return new b(t, e, n);
                    var o, i, r, a, u, s = _.slice(), l = typeof e, c = this, f = 0;
                    for ("object" != l && "string" != l && (n = e,
                        e = null),
                         n && "function" != typeof n && (n = p.parse),
                             o = !(l = w(t || "", e = y(e))).protocol && !l.slashes,
                             c.slashes = l.slashes || o && e.slashes,
                             c.protocol = l.protocol || e.protocol || "",
                             t = l.rest,
                         ("file:" === l.protocol && (2 !== l.slashesCount || g.test(t)) || !l.slashes && (l.protocol || l.slashesCount < 2 || !v(c.protocol))) && (s[3] = [/(.*)/, "pathname"]); f < s.length; f++)
                        "function" != typeof (r = s[f]) ? (i = r[0],
                            u = r[1],
                            i != i ? c[u] = t : "string" == typeof i ? ~(a = "@" === i ? t.lastIndexOf(i) : t.indexOf(i)) && (t = "number" == typeof r[2] ? (c[u] = t.slice(0, a),
                                t.slice(a + r[2])) : (c[u] = t.slice(a),
                                t.slice(0, a))) : (a = i.exec(t)) && (c[u] = a[1],
                                t = t.slice(0, a.index)),
                            c[u] = c[u] || o && r[3] && e[u] || "",
                        r[4] && (c[u] = c[u].toLowerCase())) : t = r(t, c);
                    n && (c.query = n(c.query)),
                    o && e.slashes && "/" !== c.pathname.charAt(0) && ("" !== c.pathname || "" !== e.pathname) && (c.pathname = function (t, e) {
                        if ("" === t)
                            return e;
                        for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), o = n.length, t = n[o - 1], i = !1, r = 0; o--;)
                            "." === n[o] ? n.splice(o, 1) : ".." === n[o] ? (n.splice(o, 1),
                                r++) : r && (0 === o && (i = !0),
                                n.splice(o, 1),
                                r--);
                        return i && n.unshift(""),
                        "." !== t && ".." !== t || n.push(""),
                            n.join("/")
                    }(c.pathname, e.pathname)),
                    "/" !== c.pathname.charAt(0) && v(c.protocol) && (c.pathname = "/" + c.pathname),
                    d(c.port, c.protocol) || (c.host = c.hostname,
                        c.port = ""),
                        c.username = c.password = "",
                    c.auth && (~(a = c.auth.indexOf(":")) ? (c.username = c.auth.slice(0, a),
                        c.username = encodeURIComponent(decodeURIComponent(c.username)),
                        c.password = c.auth.slice(a + 1),
                        c.password = encodeURIComponent(decodeURIComponent(c.password))) : c.username = encodeURIComponent(decodeURIComponent(c.auth)),
                        c.auth = c.password ? c.username + ":" + c.password : c.username),
                        c.origin = "file:" !== c.protocol && v(c.protocol) && c.host ? c.protocol + "//" + c.host : "null",
                        c.href = c.toString()
                }

                b.prototype = {
                    "set": function (t, e, n) {
                        var o = this;
                        switch (t) {
                            case "query":
                                "string" == typeof e && e.length && (e = (n || p.parse)(e)),
                                    o[t] = e;
                                break;
                            case "port":
                                o[t] = e,
                                    d(e, o.protocol) ? e && (o.host = o.hostname + ":" + e) : (o.host = o.hostname,
                                        o[t] = "");
                                break;
                            case "hostname":
                                o[t] = e,
                                o.port && (e += ":" + o.port),
                                    o.host = e;
                                break;
                            case "host":
                                o[t] = e,
                                    u.test(e) ? (e = e.split(":"),
                                        o.port = e.pop(),
                                        o.hostname = e.join(":")) : (o.hostname = e,
                                        o.port = "");
                                break;
                            case "protocol":
                                o.protocol = e.toLowerCase(),
                                    o.slashes = !n;
                                break;
                            case "pathname":
                            case "hash":
                                e ? (i = "pathname" === t ? "/" : "#",
                                    o[t] = e.charAt(0) !== i ? i + e : e) : o[t] = e;
                                break;
                            case "username":
                            case "password":
                                o[t] = encodeURIComponent(e);
                                break;
                            case "auth":
                                var i = e.indexOf(":");
                                ~i ? (o.username = e.slice(0, i),
                                    o.username = encodeURIComponent(decodeURIComponent(o.username)),
                                    o.password = e.slice(i + 1),
                                    o.password = encodeURIComponent(decodeURIComponent(o.password))) : o.username = encodeURIComponent(decodeURIComponent(e))
                        }
                        for (var r = 0; r < _.length; r++) {
                            var a = _[r];
                            a[4] && (o[a[1]] = o[a[1]].toLowerCase())
                        }
                        return o.auth = o.password ? o.username + ":" + o.password : o.username,
                            o.origin = "file:" !== o.protocol && v(o.protocol) && o.host ? o.protocol + "//" + o.host : "null",
                            o.href = o.toString(),
                            o
                    },
                    "toString": function (t) {
                        t && "function" == typeof t || (t = p.stringify);
                        var e = this
                            , n = e.host
                            , o = e.protocol;
                        return o && ":" !== o.charAt(o.length - 1) && (o += ":"),
                            o += e.protocol && e.slashes || v(e.protocol) ? "//" : "",
                            e.username ? (o += e.username,
                            e.password && (o += ":" + e.password),
                                o += "@") : e.password ? (o += ":" + e.password,
                                o += "@") : "file:" !== e.protocol && v(e.protocol) && !n && "/" !== e.pathname && (o += "@"),
                        (":" === n[n.length - 1] || u.test(e.hostname) && !e.port) && (n += ":"),
                            o += n + e.pathname,
                        (t = "object" == typeof e.query ? t(e.query) : e.query) && (o += "?" !== t.charAt(0) ? "?" + t : t),
                        e.hash && (o += e.hash),
                            o
                    }
                },
                    b.extractProtocol = w,
                    b.location = y,
                    b.trimLeft = m,
                    b.qs = p,
                    t.exports = b
            }
        ).call(this, n(0))
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var a = o(n(12))
            , u = o(n(13))
            , s = o(n(5));

        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        var i, r, f, n = (i = 1,
            r = 8,
            f = 32,
            {
                "getEncryption": function (t, e, n, o) {
                    n = n || "",
                        t = t || "";
                    for (var o = o ? t : l(t), t = l(w(o) + e), n = u["default"].strToBytes(n.toUpperCase(), !0), i = Number(n.length / 2).toString(16); i.length < 4;)
                        i = "0" + i;
                    u["default"].initkey(t),
                        n = u["default"].encrypt(o + u["default"].strToBytes(e) + i + n),
                        u["default"].initkey("");
                    for (var r = Number(n.length / 2).toString(16); r.length < 4;)
                        r = "0" + r;
                    return n = a["default"].rsa_encrypt(w(r + n)),
                        setTimeout(function () {
                            !function (t, e) {
                                if (!(Math.random() > (e || 1)))
                                    try {
                                        var n = location.protocol + "//ui.ptlogin2.qq.com/cgi-bin/report?id=" + t;
                                        document.createElement("img").src = n
                                    } catch (o) {
                                    }
                            }(488358, 1)
                        }, 0),
                        s["default"].encode(w(n)).replace(/[\/\+=]/g, function (t) {
                            return {
                                "/": "-",
                                "+": "*",
                                "=": "_"
                            }[t]
                        })
                },
                "getRSAEncryption": function (t, e, n) {
                    return e = (n ? t : l(t)) + e.toUpperCase(),
                        a["default"].rsa_encrypt(e)
                },
                "md5": l
            });

        function l(t) {
            return v(c(y(t = t), t.length * r))
        }

        function c(t, e) {
            t[e >> 5] |= 128 << e % 32,
                t[14 + (e + 64 >>> 9 << 4)] = e;
            for (var n = 1732584193, o = -271733879, i = -1732584194, r = 271733878, a = 0; a < t.length; a += 16) {
                var u = n
                    , s = o
                    , l = i
                    , c = r
                    , n = p(n, o, i, r, t[a + 0], 7, -680876936)
                    , r = p(r, n, o, i, t[a + 1], 12, -389564586)
                    , i = p(i, r, n, o, t[a + 2], 17, 606105819)
                    , o = p(o, i, r, n, t[a + 3], 22, -1044525330);
                n = p(n, o, i, r, t[a + 4], 7, -176418897),
                    r = p(r, n, o, i, t[a + 5], 12, 1200080426),
                    i = p(i, r, n, o, t[a + 6], 17, -1473231341),
                    o = p(o, i, r, n, t[a + 7], 22, -45705983),
                    n = p(n, o, i, r, t[a + 8], 7, 1770035416),
                    r = p(r, n, o, i, t[a + 9], 12, -1958414417),
                    i = p(i, r, n, o, t[a + 10], 17, -42063),
                    o = p(o, i, r, n, t[a + 11], 22, -1990404162),
                    n = p(n, o, i, r, t[a + 12], 7, 1804603682),
                    r = p(r, n, o, i, t[a + 13], 12, -40341101),
                    i = p(i, r, n, o, t[a + 14], 17, -1502002290),
                    n = h(n, o = p(o, i, r, n, t[a + 15], 22, 1236535329), i, r, t[a + 1], 5, -165796510),
                    r = h(r, n, o, i, t[a + 6], 9, -1069501632),
                    i = h(i, r, n, o, t[a + 11], 14, 643717713),
                    o = h(o, i, r, n, t[a + 0], 20, -373897302),
                    n = h(n, o, i, r, t[a + 5], 5, -701558691),
                    r = h(r, n, o, i, t[a + 10], 9, 38016083),
                    i = h(i, r, n, o, t[a + 15], 14, -660478335),
                    o = h(o, i, r, n, t[a + 4], 20, -405537848),
                    n = h(n, o, i, r, t[a + 9], 5, 568446438),
                    r = h(r, n, o, i, t[a + 14], 9, -1019803690),
                    i = h(i, r, n, o, t[a + 3], 14, -187363961),
                    o = h(o, i, r, n, t[a + 8], 20, 1163531501),
                    n = h(n, o, i, r, t[a + 13], 5, -1444681467),
                    r = h(r, n, o, i, t[a + 2], 9, -51403784),
                    i = h(i, r, n, o, t[a + 7], 14, 1735328473),
                    n = g(n, o = h(o, i, r, n, t[a + 12], 20, -1926607734), i, r, t[a + 5], 4, -378558),
                    r = g(r, n, o, i, t[a + 8], 11, -2022574463),
                    i = g(i, r, n, o, t[a + 11], 16, 1839030562),
                    o = g(o, i, r, n, t[a + 14], 23, -35309556),
                    n = g(n, o, i, r, t[a + 1], 4, -1530992060),
                    r = g(r, n, o, i, t[a + 4], 11, 1272893353),
                    i = g(i, r, n, o, t[a + 7], 16, -155497632),
                    o = g(o, i, r, n, t[a + 10], 23, -1094730640),
                    n = g(n, o, i, r, t[a + 13], 4, 681279174),
                    r = g(r, n, o, i, t[a + 0], 11, -358537222),
                    i = g(i, r, n, o, t[a + 3], 16, -722521979),
                    o = g(o, i, r, n, t[a + 6], 23, 76029189),
                    n = g(n, o, i, r, t[a + 9], 4, -640364487),
                    r = g(r, n, o, i, t[a + 12], 11, -421815835),
                    i = g(i, r, n, o, t[a + 15], 16, 530742520),
                    n = m(n, o = g(o, i, r, n, t[a + 2], 23, -995338651), i, r, t[a + 0], 6, -198630844),
                    r = m(r, n, o, i, t[a + 7], 10, 1126891415),
                    i = m(i, r, n, o, t[a + 14], 15, -1416354905),
                    o = m(o, i, r, n, t[a + 5], 21, -57434055),
                    n = m(n, o, i, r, t[a + 12], 6, 1700485571),
                    r = m(r, n, o, i, t[a + 3], 10, -1894986606),
                    i = m(i, r, n, o, t[a + 10], 15, -1051523),
                    o = m(o, i, r, n, t[a + 1], 21, -2054922799),
                    n = m(n, o, i, r, t[a + 8], 6, 1873313359),
                    r = m(r, n, o, i, t[a + 15], 10, -30611744),
                    i = m(i, r, n, o, t[a + 6], 15, -1560198380),
                    o = m(o, i, r, n, t[a + 13], 21, 1309151649),
                    n = m(n, o, i, r, t[a + 4], 6, -145523070),
                    r = m(r, n, o, i, t[a + 11], 10, -1120210379),
                    i = m(i, r, n, o, t[a + 2], 15, 718787259),
                    o = m(o, i, r, n, t[a + 9], 21, -343485551),
                    n = _(n, u),
                    o = _(o, s),
                    i = _(i, l),
                    r = _(r, c)
            }
            return 16 == f ? Array(o, i) : Array(n, o, i, r)
        }

        function d(t, e, n, o, i, r) {
            return _((r = _(_(e, t), _(o, r))) << (i = i) | r >>> 32 - i, n)
        }

        function p(t, e, n, o, i, r, a) {
            return d(e & n | ~e & o, t, e, i, r, a)
        }

        function h(t, e, n, o, i, r, a) {
            return d(e & o | n & ~o, t, e, i, r, a)
        }

        function g(t, e, n, o, i, r, a) {
            return d(e ^ n ^ o, t, e, i, r, a)
        }

        function m(t, e, n, o, i, r, a) {
            return d(n ^ (e | ~o), t, e, i, r, a)
        }

        function _(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function y(t) {
            for (var e = Array(), n = (1 << r) - 1, o = 0; o < t.length * r; o += r)
                e[o >> 5] |= (t.charCodeAt(o / r) & n) << o % 32;
            return e
        }

        function v(t) {
            for (var e = i ? "0123456789ABCDEF" : "0123456789abcdef", n = "", o = 0; o < 4 * t.length; o++)
                n += e.charAt(t[o >> 2] >> o % 4 * 8 + 4 & 15) + e.charAt(t[o >> 2] >> o % 4 * 8 & 15);
            return n
        }

        function w(t) {
            for (var e = [], n = 0; n < t.length; n += 2)
                e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)));
            return e.join("")
        }

        e["default"] = n
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var o = function () {
            function i() {
                this.n = null,
                    this.e = 0,
                    this.d = null,
                    this.p = null,
                    this.q = null,
                    this.dmp1 = null,
                    this.dmq1 = null,
                    this.coeff = null
            }

            var t;
            i.prototype.doPublic = function (t) {
                return t.modPowInt(this.e, this.n)
            }
                ,
                i.prototype.setPublic = function (t, e) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = new _(t, 16),
                        this.e = parseInt(e, 16)) : uv_alert("Invalid RSA public key")
                }
                ,
                i.prototype.encrypt = function (t) {
                    return null == (t = function (t, e) {
                        if (e < t.length + 11)
                            return uv_alert("Message too long for RSA"),
                                null;
                        for (var n = new Array, o = t.length - 1; 0 <= o && 0 < e;) {
                            var i = t.charCodeAt(o--);
                            n[--e] = i
                        }
                        n[--e] = 0;
                        for (var r = new w, a = new Array; 2 < e;) {
                            for (a[0] = 0; 0 == a[0];)
                                r.nextBytes(a);
                            n[--e] = a[0]
                        }
                        return n[--e] = 2,
                            n[--e] = 0,
                            new _(n)
                    }(t, this.n.bitLength() + 7 >> 3)) || null == (t = this.doPublic(t)) ? null : 0 == (1 & (t = t.toString(16)).length) ? t : "0" + t
                }
            ;

            function _(t, e, n) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }

            function y() {
                return new _(null)
            }

            t = "Microsoft Internet Explorer" == navigator.appName ? (_.prototype.am = function (t, e, n, o, i, r) {
                for (var a = 32767 & e, u = e >> 15; 0 <= --r;) {
                    var s = 32767 & this[t]
                        , l = this[t++] >> 15
                        , c = u * s + l * a;
                    i = ((s = a * s + ((32767 & c) << 15) + n[o] + (1073741823 & i)) >>> 30) + (c >>> 15) + u * l + (i >>> 30),
                        n[o++] = 1073741823 & s
                }
                return i
            }
                ,
                30) : "Netscape" != navigator.appName ? (_.prototype.am = function (t, e, n, o, i, r) {
                for (; 0 <= --r;) {
                    var a = e * this[t++] + n[o] + i;
                    i = Math.floor(a / 67108864),
                        n[o++] = 67108863 & a
                }
                return i
            }
                ,
                26) : (_.prototype.am = function (t, e, n, o, i, r) {
                for (var a = 16383 & e, u = e >> 14; 0 <= --r;) {
                    var s = 16383 & this[t]
                        , l = this[t++] >> 14
                        , c = u * s + l * a;
                    i = ((s = a * s + ((16383 & c) << 14) + n[o] + i) >> 28) + (c >> 14) + u * l,
                        n[o++] = 268435455 & s
                }
                return i
            }
                ,
                28),
                _.prototype.DB = t,
                _.prototype.DM = (1 << t) - 1,
                _.prototype.DV = 1 << t;
            _.prototype.FV = Math.pow(2, 52),
                _.prototype.F1 = 52 - t,
                _.prototype.F2 = 2 * t - 52;
            for (var e, n = "0123456789abcdefghijklmnopqrstuvwxyz", u = new Array, o = "0".charCodeAt(0), r = 0; r <= 9; ++r)
                u[o++] = r;
            for (o = "a".charCodeAt(0),
                     r = 10; r < 36; ++r)
                u[o++] = r;
            for (o = "A".charCodeAt(0),
                     r = 10; r < 36; ++r)
                u[o++] = r;

            function s(t) {
                return n.charAt(t)
            }

            function a(t) {
                var e = y();
                return e.fromInt(t),
                    e
            }

            function v(t) {
                var e, n = 1;
                return 0 != (e = t >>> 16) && (t = e,
                    n += 16),
                0 != (e = t >> 8) && (t = e,
                    n += 8),
                0 != (e = t >> 4) && (t = e,
                    n += 4),
                0 != (e = t >> 2) && (t = e,
                    n += 2),
                0 != (e = t >> 1) && (t = e,
                    n += 1),
                    n
            }

            function l(t) {
                this.m = t
            }

            function c(t) {
                this.m = t,
                    this.mp = t.invDigit(),
                    this.mpl = 32767 & this.mp,
                    this.mph = this.mp >> 15,
                    this.um = (1 << t.DB - 15) - 1,
                    this.mt2 = 2 * t.t
            }

            function f() {
                var t;
                t = (new Date).getTime(),
                    d[p++] ^= 255 & t,
                    d[p++] ^= t >> 8 & 255,
                    d[p++] ^= t >> 16 & 255,
                    d[p++] ^= t >> 24 & 255,
                k <= p && (p -= k)
            }

            if (l.prototype.convert = function (t) {
                return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
            }
                ,
                l.prototype.revert = function (t) {
                    return t
                }
                ,
                l.prototype.reduce = function (t) {
                    t.divRemTo(this.m, null, t)
                }
                ,
                l.prototype.mulTo = function (t, e, n) {
                    t.multiplyTo(e, n),
                        this.reduce(n)
                }
                ,
                l.prototype.sqrTo = function (t, e) {
                    t.squareTo(e),
                        this.reduce(e)
                }
                ,
                c.prototype.convert = function (t) {
                    var e = y();
                    return t.abs().dlShiftTo(this.m.t, e),
                        e.divRemTo(this.m, null, e),
                    t.s < 0 && 0 < e.compareTo(_.ZERO) && this.m.subTo(e, e),
                        e
                }
                ,
                c.prototype.revert = function (t) {
                    var e = y();
                    return t.copyTo(e),
                        this.reduce(e),
                        e
                }
                ,
                c.prototype.reduce = function (t) {
                    for (; t.t <= this.mt2;)
                        t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var n = 32767 & t[e]
                            , o = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                        for (t[n = e + this.m.t] += this.m.am(0, o, t, e, 0, this.m.t); t[n] >= t.DV;)
                            t[n] -= t.DV,
                                t[++n]++
                    }
                    t.clamp(),
                        t.drShiftTo(this.m.t, t),
                    0 <= t.compareTo(this.m) && t.subTo(this.m, t)
                }
                ,
                c.prototype.mulTo = function (t, e, n) {
                    t.multiplyTo(e, n),
                        this.reduce(n)
                }
                ,
                c.prototype.sqrTo = function (t, e) {
                    t.squareTo(e),
                        this.reduce(e)
                }
                ,
                _.prototype.copyTo = function (t) {
                    for (var e = this.t - 1; 0 <= e; --e)
                        t[e] = this[e];
                    t.t = this.t,
                        t.s = this.s
                }
                ,
                _.prototype.fromInt = function (t) {
                    this.t = 1,
                        this.s = t < 0 ? -1 : 0,
                        0 < t ? this[0] = t : t < -1 ? this[0] = t + DV : this.t = 0
                }
                ,
                _.prototype.fromString = function (t, e) {
                    var n;
                    if (16 == e)
                        n = 4;
                    else if (8 == e)
                        n = 3;
                    else if (256 == e)
                        n = 8;
                    else if (2 == e)
                        n = 1;
                    else if (32 == e)
                        n = 5;
                    else {
                        if (4 != e)
                            return void this.fromRadix(t, e);
                        n = 2
                    }
                    this.t = 0,
                        this.s = 0;
                    for (var o = t.length, i = !1, r = 0; 0 <= --o;) {
                        var a = 8 == n ? 255 & t[o] : (a = o,
                            null == (a = u[t.charCodeAt(a)]) ? -1 : a);
                        a < 0 ? "-" == t.charAt(o) && (i = !0) : (i = !1,
                            0 == r ? this[this.t++] = a : r + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - r) - 1) << r,
                                this[this.t++] = a >> this.DB - r) : this[this.t - 1] |= a << r,
                        (r += n) >= this.DB && (r -= this.DB))
                    }
                    8 == n && 0 != (128 & t[0]) && (this.s = -1,
                    0 < r && (this[this.t - 1] |= (1 << this.DB - r) - 1 << r)),
                        this.clamp(),
                    i && _.ZERO.subTo(this, this)
                }
                ,
                _.prototype.clamp = function () {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;)
                        --this.t
                }
                ,
                _.prototype.dlShiftTo = function (t, e) {
                    for (var n = this.t - 1; 0 <= n; --n)
                        e[n + t] = this[n];
                    for (n = t - 1; 0 <= n; --n)
                        e[n] = 0;
                    e.t = this.t + t,
                        e.s = this.s
                }
                ,
                _.prototype.drShiftTo = function (t, e) {
                    for (var n = t; n < this.t; ++n)
                        e[n - t] = this[n];
                    e.t = Math.max(this.t - t, 0),
                        e.s = this.s
                }
                ,
                _.prototype.lShiftTo = function (t, e) {
                    for (var n = t % this.DB, o = this.DB - n, i = (1 << o) - 1, r = Math.floor(t / this.DB), a = this.s << n & this.DM, u = this.t - 1; 0 <= u; --u)
                        e[u + r + 1] = this[u] >> o | a,
                            a = (this[u] & i) << n;
                    for (u = r - 1; 0 <= u; --u)
                        e[u] = 0;
                    e[r] = a,
                        e.t = this.t + r + 1,
                        e.s = this.s,
                        e.clamp()
                }
                ,
                _.prototype.rShiftTo = function (t, e) {
                    e.s = this.s;
                    var n = Math.floor(t / this.DB);
                    if (n >= this.t)
                        e.t = 0;
                    else {
                        var o = t % this.DB
                            , i = this.DB - o
                            , r = (1 << o) - 1;
                        e[0] = this[n] >> o;
                        for (var a = n + 1; a < this.t; ++a)
                            e[a - n - 1] |= (this[a] & r) << i,
                                e[a - n] = this[a] >> o;
                        0 < o && (e[this.t - n - 1] |= (this.s & r) << i),
                            e.t = this.t - n,
                            e.clamp()
                    }
                }
                ,
                _.prototype.subTo = function (t, e) {
                    for (var n = 0, o = 0, i = Math.min(t.t, this.t); n < i;)
                        o += this[n] - t[n],
                            e[n++] = o & this.DM,
                            o >>= this.DB;
                    if (t.t < this.t) {
                        for (o -= t.s; n < this.t;)
                            o += this[n],
                                e[n++] = o & this.DM,
                                o >>= this.DB;
                        o += this.s
                    } else {
                        for (o += this.s; n < t.t;)
                            o -= t[n],
                                e[n++] = o & this.DM,
                                o >>= this.DB;
                        o -= t.s
                    }
                    e.s = o < 0 ? -1 : 0,
                        o < -1 ? e[n++] = this.DV + o : 0 < o && (e[n++] = o),
                        e.t = n,
                        e.clamp()
                }
                ,
                _.prototype.multiplyTo = function (t, e) {
                    var n = this.abs()
                        , o = t.abs()
                        , i = n.t;
                    for (e.t = i + o.t; 0 <= --i;)
                        e[i] = 0;
                    for (i = 0; i < o.t; ++i)
                        e[i + n.t] = n.am(0, o[i], e, i, 0, n.t);
                    e.s = 0,
                        e.clamp(),
                    this.s != t.s && _.ZERO.subTo(e, e)
                }
                ,
                _.prototype.squareTo = function (t) {
                    for (var e = this.abs(), n = t.t = 2 * e.t; 0 <= --n;)
                        t[n] = 0;
                    for (n = 0; n < e.t - 1; ++n) {
                        var o = e.am(n, e[n], t, 2 * n, 0, 1);
                        (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, o, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                            t[n + e.t + 1] = 1)
                    }
                    0 < t.t && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                        t.s = 0,
                        t.clamp()
                }
                ,
                _.prototype.divRemTo = function (t, e, n) {
                    var o = t.abs();
                    if (!(o.t <= 0)) {
                        var i = this.abs();
                        if (i.t < o.t)
                            return null != e && e.fromInt(0),
                                void (null != n && this.copyTo(n));
                        null == n && (n = y());
                        var r = y()
                            , a = this.s
                            , u = t.s
                            , t = this.DB - v(o[o.t - 1]);
                        0 < t ? (o.lShiftTo(t, r),
                            i.lShiftTo(t, n)) : (o.copyTo(r),
                            i.copyTo(n));
                        var s = r.t
                            , l = r[s - 1];
                        if (0 != l) {
                            var i = l * (1 << this.F1) + (1 < s ? r[s - 2] >> this.F2 : 0)
                                , c = this.FV / i
                                , f = (1 << this.F1) / i
                                , d = 1 << this.F2
                                , p = n.t
                                , h = p - s
                                , g = null == e ? y() : e;
                            for (r.dlShiftTo(h, g),
                                 0 <= n.compareTo(g) && (n[n.t++] = 1,
                                     n.subTo(g, n)),
                                     _.ONE.dlShiftTo(s, g),
                                     g.subTo(r, r); r.t < s;)
                                r[r.t++] = 0;
                            for (; 0 <= --h;) {
                                var m = n[--p] == l ? this.DM : Math.floor(n[p] * c + (n[p - 1] + d) * f);
                                if ((n[p] += r.am(0, m, n, h, 0, s)) < m)
                                    for (r.dlShiftTo(h, g),
                                             n.subTo(g, n); n[p] < --m;)
                                        n.subTo(g, n)
                            }
                            null != e && (n.drShiftTo(s, e),
                            a != u && _.ZERO.subTo(e, e)),
                                n.t = s,
                                n.clamp(),
                            0 < t && n.rShiftTo(t, n),
                            a < 0 && _.ZERO.subTo(n, n)
                        }
                    }
                }
                ,
                _.prototype.invDigit = function () {
                    if (this.t < 1)
                        return 0;
                    var t = this[0];
                    if (0 == (1 & t))
                        return 0;
                    var e = 3 & t;
                    return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
                }
                ,
                _.prototype.isEven = function () {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s)
                }
                ,
                _.prototype.exp = function (t, e) {
                    if (4294967295 < t || t < 1)
                        return _.ONE;
                    var n, o = y(), i = y(), r = e.convert(this), a = v(t) - 1;
                    for (r.copyTo(o); 0 <= --a;)
                        e.sqrTo(o, i),
                            0 < (t & 1 << a) ? e.mulTo(i, r, o) : (n = o,
                                o = i,
                                i = n);
                    return e.revert(o)
                }
                ,
                _.prototype.toString = function (t) {
                    if (this.s < 0)
                        return "-" + this.negate().toString(t);
                    var e;
                    if (16 == t)
                        e = 4;
                    else if (8 == t)
                        e = 3;
                    else if (2 == t)
                        e = 1;
                    else if (32 == t)
                        e = 5;
                    else {
                        if (4 != t)
                            return this.toRadix(t);
                        e = 2
                    }
                    var n, o = (1 << e) - 1, i = !1, r = "", a = this.t, u = this.DB - a * this.DB % e;
                    if (0 < a--)
                        for (u < this.DB && 0 < (n = this[a] >> u) && (i = !0,
                            r = s(n)); 0 <= a;)
                            u < e ? (n = (this[a] & (1 << u) - 1) << e - u,
                                n |= this[--a] >> (u += this.DB - e)) : (n = this[a] >> (u -= e) & o,
                            u <= 0 && (u += this.DB,
                                --a)),
                            0 < n && (i = !0),
                            i && (r += s(n));
                    return i ? r : "0"
                }
                ,
                _.prototype.negate = function () {
                    var t = y();
                    return _.ZERO.subTo(this, t),
                        t
                }
                ,
                _.prototype.abs = function () {
                    return this.s < 0 ? this.negate() : this
                }
                ,
                _.prototype.compareTo = function (t) {
                    var e = this.s - t.s;
                    if (0 != e)
                        return e;
                    var n = this.t;
                    if (0 != (e = n - t.t))
                        return e;
                    for (; 0 <= --n;)
                        if (0 != (e = this[n] - t[n]))
                            return e;
                    return 0
                }
                ,
                _.prototype.bitLength = function () {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + v(this[this.t - 1] ^ this.s & this.DM)
                }
                ,
                _.prototype.mod = function (t) {
                    var e = y();
                    return this.abs().divRemTo(t, null, e),
                    this.s < 0 && 0 < e.compareTo(_.ZERO) && t.subTo(e, e),
                        e
                }
                ,
                _.prototype.modPowInt = function (t, e) {
                    return e = new (t < 256 || e.isEven() ? l : c)(e),
                        this.exp(t, e)
                }
                ,
                _.ZERO = a(0),
                _.ONE = a(1),
            null == d) {
                var d = new Array
                    , p = 0;
                if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random)
                    for (var h = window.crypto.random(32), g = 0; g < h.length; ++g)
                        d[p++] = 255 & h.charCodeAt(g);
                for (; p < k;)
                    g = Math.floor(65536 * Math.random()),
                        d[p++] = g >>> 8,
                        d[p++] = 255 & g;
                p = 0,
                    f()
            }

            function m() {
                if (null == e) {
                    for (f(),
                             (e = new b).init(d),
                             p = 0; p < d.length; ++p)
                        d[p] = 0;
                    p = 0
                }
                return e.next()
            }

            function w() {
            }

            function b() {
                this.i = 0,
                    this.j = 0,
                    this.S = new Array
            }

            w.prototype.nextBytes = function (t) {
                for (var e = 0; e < t.length; ++e)
                    t[e] = m()
            }
                ,
                b.prototype.init = function (t) {
                    for (var e, n, o = 0; o < 256; ++o)
                        this.S[o] = o;
                    for (o = e = 0; o < 256; ++o)
                        e = e + this.S[o] + t[o % t.length] & 255,
                            n = this.S[o],
                            this.S[o] = this.S[e],
                            this.S[e] = n;
                    this.i = 0,
                        this.j = 0
                }
                ,
                b.prototype.next = function () {
                    var t;
                    return this.i = this.i + 1 & 255,
                        this.j = this.j + this.S[this.i] & 255,
                        t = this.S[this.i],
                        this.S[this.i] = this.S[this.j],
                        this.S[this.j] = t,
                        this.S[t + this.S[this.i] & 255]
                }
            ;
            var k = 256;
            return {
                "rsa_encrypt": function (t, e, n) {
                    var o = new i;
                    return o.setPublic("e9a815ab9d6e86abbf33a4ac64e9196d5be44a09bd0ed6ae052914e1a865ac8331fed863de8ea697e9a7f63329e5e23cda09c72570f46775b7e39ea9670086f847d3c9c51963b131409b1e04265d9747419c635404ca651bbcbc87f99b8008f7f5824653e3658be4ba73e4480156b390bb73bc1f8b33578e7a4e12440e9396f2552c1aff1c92e797ebacdc37c109ab7bce2367a19c56a033ee04534723cc2558cb27368f5b9d32c04d12dbd86bbd68b1d99b7c349a8453ea75d1b2e94491ab30acf6c46a36a75b721b312bedf4e7aad21e54e9bcbcf8144c79b6e3c05eb4a1547750d224c0085d80e6da3907c3d945051c13c7c1dcefd6520ee8379c4f5231ed", "10001"),
                        o.encrypt(t)
                }
            }
        }();
        e["default"] = o
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var o, r = (o = n(5)) && o.__esModule ? o : {
            "default": o
        };
        var l = ""
            , a = 0
            , i = []
            , u = []
            , s = 0
            , c = 0
            , f = []
            , d = []
            , p = !0;

        function h() {
            return Math.round(4294967295 * Math.random())
        }

        function g(t, e, n) {
            (!n || 4 < n) && (n = 4);
            for (var o = 0, i = e; i < e + n; i++)
                o <<= 8,
                    o |= t[i];
            return (4294967295 & o) >>> 0
        }

        function m(t, e, n) {
            t[e + 3] = n >> 0 & 255,
                t[e + 2] = n >> 8 & 255,
                t[e + 1] = n >> 16 & 255,
                t[e + 0] = n >> 24 & 255
        }

        function _(t) {
            if (!t)
                return "";
            for (var e = "", n = 0; n < t.length; n++) {
                var o = Number(t[n]).toString(16);
                1 == o.length && (o = "0" + o),
                    e += o
            }
            return e
        }

        function y(t) {
            i = new Array(8),
                u = new Array(8),
                s = c = 0,
                p = !0,
                a = 0;
            var e = t.length
                , n = 0;
            0 != (a = (e + 10) % 8) && (a = 8 - a),
                f = new Array(e + a + 10),
                i[0] = 255 & (248 & h() | a);
            for (var o = 1; o <= a; o++)
                i[o] = 255 & h();
            a++;
            for (o = 0; o < 8; o++)
                u[o] = 0;
            for (n = 1; n <= 2;)
                a < 8 && (i[a++] = 255 & h(),
                    n++),
                8 == a && v();
            for (o = 0; 0 < e;)
                a < 8 && (i[a++] = t[o++],
                    e--),
                8 == a && v();
            for (n = 1; n <= 7;)
                a < 8 && (i[a++] = 0,
                    n++),
                8 == a && v();
            return f
        }

        function v() {
            for (var t = 0; t < 8; t++)
                i[t] ^= p ? u[t] : f[c + t];
            for (var e = function (t) {
                var e = 16
                    , n = g(t, 0, 4)
                    , o = g(t, 4, 4)
                    , i = g(l, 0, 4)
                    , r = g(l, 4, 4)
                    , a = g(l, 8, 4)
                    , u = g(l, 12, 4)
                    , s = 0;
                for (; 0 < e--;)
                    o = (4294967295 & (o += ((n = (4294967295 & (n += (o << 4) + i ^ o + (s = (4294967295 & (s += 2654435769)) >>> 0) ^ (o >>> 5) + r)) >>> 0) << 4) + a ^ n + s ^ (n >>> 5) + u)) >>> 0;
                t = new Array(8);
                return m(t, 0, n),
                    m(t, 4, o),
                    t
            }(i), t = 0; t < 8; t++)
                f[s + t] = e[t] ^ u[t],
                    u[t] = i[t];
            c = s,
                s += 8,
                a = 0,
                p = !1
        }

        function w(t) {
            for (var e = 16, n = g(t, 0, 4), o = g(t, 4, 4), i = g(l, 0, 4), r = g(l, 4, 4), a = g(l, 8, 4), u = g(l, 12, 4), s = 3816266640; 0 < e--;)
                n = (4294967295 & (n -= ((o = (4294967295 & (o -= (n << 4) + a ^ n + s ^ (n >>> 5) + u)) >>> 0) << 4) + i ^ o + s ^ (o >>> 5) + r)) >>> 0,
                    s = (4294967295 & (s -= 2654435769)) >>> 0;
            t = new Array(8);
            return m(t, 0, n),
                m(t, 4, o),
                t
        }

        function b() {
            d.length;
            for (var t = 0; t < 8; t++)
                u[t] ^= d[s + t];
            return u = w(u),
                s += 8,
                a = 0,
                1
        }

        function k(t, e) {
            var n = [];
            if (e)
                for (var o = 0; o < t.length; o++)
                    n[o] = 255 & t.charCodeAt(o);
            else
                for (var i = 0, o = 0; o < t.length; o += 2)
                    n[i++] = parseInt(t.substr(o, 2), 16);
            return n
        }

        var S = {
            "encrypt": function (t, e) {
                return _(y(k(t, e)))
            },
            "enAsBase64": function (t, e) {
                for (var n = y(k(t, e)), o = "", i = 0; i < n.length; i++)
                    o += String.fromCharCode(n[i]);
                return r["default"].encode(o)
            },
            "decrypt": function (t) {
                return _(function (t) {
                    var e = 0
                        , n = new Array(8)
                        , o = t.length;
                    if (d = t,
                    o % 8 != 0 || o < 16)
                        return null;
                    if (u = w(t),
                    (e = o - (a = 7 & u[0]) - 10) < 0)
                        return null;
                    for (var i = 0; i < n.length; i++)
                        n[i] = 0;
                    f = new Array(e),
                        c = 0,
                        s = 8,
                        a++;
                    for (var r = 1; r <= 2;)
                        if (a < 8 && (a++,
                            r++),
                        8 == a && (n = t,
                            !b()))
                            return null;
                    for (i = 0; 0 != e;)
                        if (a < 8 && (f[i] = 255 & (n[c + a] ^ u[a]),
                            i++,
                            e--,
                            a++),
                        8 == a && (n = t,
                            c = s - 8,
                            !b()))
                            return null;
                    for (r = 1; r < 8; r++) {
                        if (a < 8) {
                            if (0 != (n[c + a] ^ u[a]))
                                return null;
                            a++
                        }
                        if (8 == a && (n = t,
                            c = s,
                            !b()))
                            return null
                    }
                    return f
                }(k(t, !1)))
            },
            "initkey": function (t, e) {
                l = k(t, e)
            },
            "bytesToStr": function (t) {
                for (var e = "", n = 0; n < t.length; n += 2)
                    e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
                return e
            },
            "strToBytes": function (t, e) {
                if (!t)
                    return "";
                e && (t = function (t) {
                    var e, n, o = [], i = t.length;
                    for (e = 0; e < i; e++)
                        0 < (n = t.charCodeAt(e)) && n <= 127 ? o.push(t.charAt(e)) : 128 <= n && n <= 2047 ? o.push(String.fromCharCode(192 | n >> 6 & 31), String.fromCharCode(128 | 63 & n)) : 2048 <= n && n <= 65535 && o.push(String.fromCharCode(224 | n >> 12 & 15), String.fromCharCode(128 | n >> 6 & 63), String.fromCharCode(128 | 63 & n));
                    return o.join("")
                }(t));
                for (var n = [], o = 0; o < t.length; o++)
                    n[o] = t.charCodeAt(o);
                return _(n)
            },
            "bytesInStr": _,
            "dataFromStr": k
        };
        e["default"] = S
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var o = p(n(10))
            , i = p(n(56))
            , k = p(n(1))
            , r = p(n(11))
            , a = n(57)
            , S = n(2)
            , u = function (t) {
            if (t && t.__esModule)
                return t;
            if (null === t || "object" != typeof t && "function" != typeof t)
                return {
                    "default": t
                };
            var e = d();
            if (e && e.has(t))
                return e.get(t);
            var n, o = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (n in t) {
                var r;
                Object.prototype.hasOwnProperty.call(t, n) && ((r = i ? Object.getOwnPropertyDescriptor(t, n) : null) && (r.get || r.set) ? Object.defineProperty(o, n, r) : o[n] = t[n])
            }
            o["default"] = t,
            e && e.set(t, o);
            return o
        }(n(58))
            , s = p(n(17))
            , C = n(18)
            , l = n(16)
            , c = n(34)
            , f = n(63);

        function d() {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap;
            return d = function d() {
                return t
            }
                ,
                t
        }

        function p(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function h(t, e, n, o, i, r, a) {
            try {
                var u = t[r](a)
                    , s = u.value
            } catch (l) {
                return void n(l)
            }
            u.done ? e(s) : Promise.resolve(s).then(o, i)
        }

        function g(u) {
            return function () {
                var t = this
                    , a = arguments;
                return new Promise(function (e, n) {
                        var o = u.apply(t, a);

                        function i(t) {
                            h(o, e, n, i, r, "next", t)
                        }

                        function r(t) {
                            h(o, e, n, i, r, "throw", t)
                        }

                        i(undefined)
                    }
                )
            }
        }

        var m, _ = "newVcodeIframe", y = "newVcodeArea", T = window.pt, q = {
            "toggleManager": null,
            "deviceId": "",
            "smsCheck": "",
            "needSms": !1,
            "hasVCSuccess": !1,
            "account": "",
            "at_account": "",
            "uin": "",
            "salt": "",
            "checkState": !1,
            "lastCheckAccount": "",
            "needVc": !1,
            "vcFlag": !1,
            "ckNum": {},
            "action": [0, 0],
            "passwordErrorNum": 1,
            "isIpad": !1,
            "seller_id": 703010802,
            "checkUrl": "",
            "loginUrl": "",
            "verifycodeUrl": "",
            "huatuosdk": "https://i.gtimg.cn/huatuo/sdk/huatuoping-sdk.min-0.1.js",
            "needShowNewVc": !1,
            "pt_verifysession": "",
            "checkClock": 0,
            "isCheckTimeout": !1,
            "cntCheckTimeout": 0,
            "qrloginGetTime": 0,
            "qrloginRefreshInterval": 2e3,
            "checkTime": 0,
            "submitTime": 0,
            "defaultTimeoutTime": 5e3,
            "errclock": 0,
            "loginClock": 0,
            "login_param": T.ptui.href.substring(T.ptui.href.indexOf("?") + 1),
            "err_m": (0,
                k["default"])("err_m"),
            "low_login_enable": !0,
            "low_login_hour": 720,
            "low_login_isshow": !1,
            "list_index": [-1, 2],
            "keyCode": {
                "UP": 38,
                "DOWN": 40,
                "LEFT": 37,
                "RIGHT": 39,
                "ENTER": 13,
                "TAB": 9,
                "BACK": 8,
                "DEL": 46,
                "F5": 116
            },
            "knownEmail": 25 == T.ptui.style ? ["qq.com", "vip.qq.com", "foxmail.com"] : ["qq.com", "foxmail.com", "gmail.com", "hotmail.com", "yahoo.com", "sina.com", "163.com", "126.com", "vip.qq.com", "vip.sina.com", "sina.cn", "sohu.com", "yahoo.cn", "yahoo.com.cn", "139.com", "wo.com.cn", "189.cn", "live.com", "msn.com", "live.hk", "live.cn", "hotmail.com.cn", "hinet.net", "msa.hinet.net", "cm1.hinet.net", "umail.hinet.net", "xuite.net", "yam.com", "pchome.com.tw", "netvigator.com", "seed.net.tw", "anet.net.tw"],
            "qrlogin_clock": 0,
            "qrlogin_timeout": 0,
            "qrlogin_timeout_time": 6e5,
            "qrlogin_invalid": !1,
            "isQrLogin": !1,
            "qr_uin": "",
            "qr_nick": "",
            "onekey_verify_timeout": 36e5,
            "onekeyVerifyClock": 0,
            "dftImg": "",
            "need_hide_operate_tips": !0,
            "js_type": 1,
            "xuiState": 1,
            "delayTime": 5e3,
            "delayMonitorId": "294059",
            "hasSubmit": !1,
            "isdTime": {},
            "authUin": "",
            "authSubmitUrl": "",
            "loginState": C.LoginState.PLogin,
            "aqScanLink": function () {
                var t;
                switch (T.ptui.lang) {
                    case "2052":
                        t = "立刻扫描";
                        break;
                    case "1028":
                        t = "立即掃描";
                        break;
                    case "1033":
                        t = "Scan now"
                }
                return "<a href='javascript:void(0)'; onclick='pt.plogin.switch_qrlogin()'>".concat(t, "</a>")
            }(),
            "isNewQr": !1,
            "hasNoQlogin": !1,
            "checkRet": -1,
            "cap_cd": 0,
            "authTimes": 0,
            "checkErr": {
                "2052": "网络繁忙，请稍后重试。",
                "1028": "網絡繁忙，請稍後重試。",
                "1033": "The network is busy, please try again later."
            },
            "isTenpay": 34 == T.ptui.style,
            "isMailLogin": 25 == T.ptui.style || 30 == T.ptui.style,
            "captcha": null,
            "isPwdFirst": function () {
                if (T.ptui.lockuin)
                    return !0;
                if ("0" == k["default"].bom.query("pt_pwd"))
                    return !1;
                var t = [/\bqcloud\.com$/, /\bcloud\.tencent\.com$/, /\b110\.qq\.com$/, /\baq\.qq\.com$/, /\breg\.t\.qq\.com$/, /\bb\.qq\.com$/, /\bmail\.qq\.com$/, /\bqmail\.com$/]
                    , e = (0,
                    o["default"])(document.referrer);
                for (n in t)
                    if (t[n] && t[n].test && t[n].test(e.hostname))
                        return !0;
                if ("1" == k["default"].bom.query("pt_pwd"))
                    for (var n in t = [/\bjiazhang.qq.com$/, /\bqidian.qq.com$/])
                        if (t[n] && t[n].test && t[n].test(e.hostname))
                            return !0;
                return !1
            },
            "isQcloud": function () {
                return !!(0,
                    o["default"])(document.referrer).hostname.match(/\b(qcloud\.com|cloud\.tencent\.com)$/)
            },
            "isNewStyle": 40 <= T.ptui.style,
            "isTim": 41 == T.ptui.style,
            "switchpageCount": 0,
            "isUIStyle": T.ptui.fromStyle,
            "domFocus": function (t) {
                try {
                    window.setTimeout(function () {
                        t.focus()
                    }, 0)
                } catch (e) {
                }
            },
            "formFocus": function () {
                var t = document.loginform;
                try {
                    var e = t.u
                        , n = t.p
                        , o = t.verifycode;
                    if ("" == e.value)
                        return void e.focus();
                    if ("" == n.value)
                        return void n.focus();
                    "" == o.value && o.focus()
                } catch (i) {
                }
            },
            "getAuthUrl": function () {
                var t = (T.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + T.ptui.domain + "/pt4_auth?daid=" + T.ptui.daid + "&appid=" + T.ptui.appid + "&auth_token=" + k["default"].str.time33(k["default"].cookie.get("supertoken"))
                    , e = T.ptui.s_url;
                return /^https/.test(e) && (t += "&pt4_shttps=1"),
                "1" == T.ptui.pt_qzone_sig && (t += "&pt_qzone_sig=1"),
                    t
            },
            "auth": function () {
                q.authTimes = q.authTimes + 1,
                    T.ptui.isHttps = k["default"].check.isHttps();
                var t = q.getAuthUrl()
                    , e = k["default"].cookie.get("superuin");
                T.ptui.daid && "1" != T.ptui.noAuth && !q.isTim && "" != e && "" == T.ptui.regmaster && "0" == T.ptui.pt_3rd_aid && k["default"].http.loadScript(t)
            },
            "initAuthInfo": function (t) {
                var e = k["default"].cookie.get("uin").replace(/^o0*/, "")
                    , n = k["default"].str.utf8ToUincode(k["default"].cookie.get("ptnick_" + e)) || e;
                (0,
                    k["default"])("auth_uin").innerHTML = k["default"].str.encodeHtml(e),
                    (0,
                        k["default"])("auth_nick").innerHTML = k["default"].str.encodeHtml(n),
                    (0,
                        k["default"])("auth_area").setAttribute("authUrl", k["default"].str.encodeHtml(t)),
                    k["default"].http.loadScript((T.ptui.isHttps ? "https://ssl.ptlogin2." : "http://ptlogin2.") + T.ptui.domain + "/getface?appid=" + T.ptui.appid + "&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + e + "&r=" + Math.random())
            },
            "showAuth": function (t, e) {
                2 == t && k["default"].css.hide((0,
                    k["default"])("cancleAuthOuter")),
                    q.initAuthInfo(e);
                e = T.ptui.style;
                22 != e && 23 != e || (k["default"].css.hide((0,
                    k["default"])("header")),
                    k["default"].css.hide((0,
                        k["default"])("authHeader"))),
                    (0,
                        k["default"])("authLogin").style.height = (0,
                        k["default"])("login").offsetHeight - (11 == e ? 2 : 4) + "px",
                    k["default"].css.show((0,
                        k["default"])("authLogin")),
                    q.ptui_notifySize("login")
            },
            "cancleAuth": function () {
                var t = T.ptui.style;
                22 != t && 23 != t || (k["default"].css.show((0,
                    k["default"])("header")),
                    k["default"].css.show((0,
                        k["default"])("authHeader"))),
                    k["default"].css.hide((0,
                        k["default"])("authLogin")),
                    q.ptui_notifySize("login")
            },
            "authLogin": function () {
                s["default"].authLoginSubmit()
            },
            "authMouseDowm": function () {
                var t = (0,
                    k["default"])("auth_mengban");
                t && (t.className = "face_mengban")
            },
            "authMouseUp": function () {
                var t = (0,
                    k["default"])("auth_mengban");
                t && (t.className = "")
            },
            "onQloginSwitch": function (t) {
                t.preventDefault(),
                    q.switchpage(C.LoginState.QLogin),
                    k["default"].report.monitor("331284", .05)
            },
            "switchpage": function (t, e) {
                switch (S.logger.info("plogin.switchpage()", "flag=".concat(t, " force=").concat(e)),
                    q.switchpageCount = q.switchpageCount + 1,
                    q.loginState = t,
                e || q.hide_err(),
                    t) {
                    case 1:
                        q.hideQrTips(),
                            k["default"].css.hide((0,
                                k["default"])("bottom_qlogin")),
                            k["default"].css.hide((0,
                                k["default"])("qlogin")),
                            k["default"].css.show((0,
                                k["default"])("web_qr_login")),
                        (0,
                            k["default"])("qrswitch") && k["default"].css.show((0,
                            k["default"])("qrswitch")),
                        q.isNewStyle || ((0,
                            k["default"])("switcher_plogin").className = "switch_btn_focus",
                            (0,
                                k["default"])("switcher_qlogin").className = "switch_btn"),
                        "ff" != k["default"].browser("type") && window.setTimeout(function () {
                            q.formFocus()
                        }, 0),
                        q.isNewQr && q.cancle_qrlogin(),
                        q.armSafeEdit && q.armSafeEdit.everSafe && (q.armSafeEdit.lockToggle(),
                            q.armSafeEdit.everSafe = !1),
                        0 != q.onekeyVerifyClock && q.onekeyVerify("normal"),
                            q.hasCheck(!1);
                        break;
                    case 2:
                        k["default"].css.hide((0,
                            k["default"])("web_qr_login")),
                            k["default"].css.show((0,
                                k["default"])("qlogin")),
                        q.isNewStyle || ((0,
                            k["default"])("switcher_plogin").className = "switch_btn",
                            (0,
                                k["default"])("switcher_qlogin").className = "switch_btn_focus"),
                        (0,
                            k["default"])("qrswitch") && k["default"].css.hide((0,
                            k["default"])("qrswitch")),
                            k["default"].css.show((0,
                                k["default"])("bottom_qlogin")),
                            s["default"].focusHeader(),
                        q.armSafeEdit.isSafe && (q.armSafeEdit.lockToggle(),
                            q.armSafeEdit.everSafe = !0),
                            s["default"].buildQloginDom()
                }
                q.ptui_notifySize("login")
            },
            "detectCapsLock": function (t) {
                var e = t.keyCode || t.which
                    , t = t.shiftKey || 16 == e || !1;
                return !!(65 <= e && e <= 90 && !t || 97 <= e && e <= 122 && t)
            },
            "generateEmailTips": function (t) {
                for (var e = t.indexOf("@"), n = "", n = -1 == e ? t : t.substring(0, e), o = [], i = 0, r = q.knownEmail.length; i < r; i++)
                    o.push(n + "@" + q.knownEmail[i]);
                for (var a = [], u = 0, r = o.length; u < r; u++)
                    -1 < o[u].indexOf(t) && a.push(k["default"].str.encodeHtml(o[u]));
                return 19 == T.ptui.style && (a = []),
                    a
            },
            "createEmailTips": function (t) {
                var e, n = q.generateEmailTips(t), o = n.length, i = [];
                if (0 == (o = Math.min(o, 4)))
                    return q.list_index[0] = -1,
                        void q.hideEmailTips();
                for (var r = 0; r < o; r++) {
                    if (t == n[r])
                        return void q.hideEmailTips();
                    e = "emailTips_" + r,
                        0 == r ? i.push("<li id=" + e + " class='hover' >" + n[r] + "</li>") : i.push("<li id=" + e + ">" + n[r] + "</li>")
                }
                (0,
                    k["default"])("email_list").innerHTML = i.join(" "),
                    q.list_index[0] = 0
            },
            "showEmailTips": function () {
                k["default"].css.show((0,
                    k["default"])("email_list")),
                    q.__isShowEmailTips = !0
            },
            "hideEmailTips": function () {
                k["default"].css.hide((0,
                    k["default"])("email_list")),
                    q.__isShowEmailTips = !1
            },
            "setUrl": function () {
                var t = T.ptui.domain
                    , e = k["default"].check.isHttps() && k["default"].check.isSsl();
                q.checkUrl = (T.ptui.isHttps ? "https://ssl." : "http://check.") + "ptlogin2." + t + "/check",
                    q.loginUrl = (T.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + t + "/",
                    q.verifycodeUrl = (T.ptui.isHttps ? "https://ssl." : "http://") + "captcha." + t + "/getimage",
                e && "qq.com" != t && "tenpay.com" != t && (q.verifycodeUrl = "https://ssl.ptlogin2." + t + "/ptgetimage"),
                    q.dftImg = T.ptui.isHttps ? "https://ui.ptlogin2.qq.com/style/0/images/1.gif" : "http://imgcache.qq.com/ptlogin/v4/style/0/images/1.gif"
            },
            "VCCallback": function (t) {
                setTimeout(function () {
                    0 == t.ret ? q.vcodeMessage(t) : q.hideVC()
                }, 0)
            },
            "init": (m = g(regeneratorRuntime.mark(function v() {
                    return regeneratorRuntime.wrap(function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return q.toggleManager = new f.ToggleManager(window.g_aegisUid, window.navigator.userAgent),
                                        T.ptui.login_sig = T.ptui.login_sig || k["default"].cookie.get("pt_login_sig"),
                                        q.setLowloginCheckbox(),
                                        q.isNewQr = !(25 != T.ptui.style && 32 != T.ptui.style && 33 != T.ptui.style && !q.isNewStyle && !q.isTenpay),
                                        T.ptui.isHttps = k["default"].check.isHttps(),
                                        q.setUrl(),
                                        q.bindEvent(),
                                    (0,
                                        k["default"])("login_button") && ((0,
                                        k["default"])("login_button").disabled = !1),
                                        q.set_default_uin(T.ptui.defaultUin),
                                    q.isTenpay && T.ptui.defaultUin && (T.ptui.lockuin = 1),
                                    k["default"].check.is_weibo_appid(T.ptui.appid) && (0,
                                        k["default"])("u") && ((0,
                                        k["default"])("u").style.imeMode = "auto"),
                                    T.ptui.isHttps && (q.delayTime = 7e3,
                                        q.delayMonitorId = "294060"),
                                        q.hideVipLink(),
                                    "0" != T.ptui.pt_3rd_aid && s["default"].detectPCMgr(),
                                        T.ptui.lockuin ? q.doLockuin() : (s["default"].fetchOnekeyList(),
                                            s["default"].fetchQloginList()),
                                    !(q.isTenpay && 1093 <= k["default"].sso_ver) || q.isWin8() && k["default"].suportActive() || q.armSafeEdit(),
                                        s["default"].buildUnifiedQloginList(),
                                        t.next = 19,
                                        i["default"].getDeviceId();
                                case 19:
                                    q.deviceId = t.sent,
                                        window.setTimeout(function () {
                                            q.domLoad(),
                                                S.logger.info("plogin.init()", "domLoaded, pt.ptui=".concat(k["default"].str.json2str(T.ptui, null, 4)))
                                        }, 100);
                                case 21:
                                case "end":
                                    return t.stop()
                            }
                    }, v)
                })),
                    function () {
                        return m.apply(this, arguments)
                    }
            ),
            "isWin8": function () {
                var t = navigator.userAgent.toLowerCase();
                return -1 < t.indexOf("windows nt 6.2") || -1 < t.indexOf("windows nt 6.3")
            },
            "aq_patch": function () {
                Math.random() < .05 && !T.ptui.isHttps && k["default"].http.loadScript("http://mat1.gtimg.com/www/js/common_v2.js", function () {
                    if ("function" == typeof checkNonTxDomain)
                        try {
                            checkNonTxDomain(1, 5)
                        } catch (t) {
                        }
                })
            },
            "hideVipLink": function () {
                var t = (0,
                    k["default"])("vip_link2")
                    , e = (0,
                    k["default"])("vip_dot");
                !t || !e || k["default"].check.needVip(T.ptui.appid) && "2052" == T.ptui.lang || (k["default"].css.addClass(t, "hide"),
                    k["default"].css.addClass(e, "hide"))
            },
            "set_default_uin": function (t) {
                "0" != t && (t || (t = k["default"].cookie.get("ptui_loginuin"),
                k["default"].check.is_weibo_appid(T.ptui.appid) || !k["default"].check.isNick(t) && !k["default"].check.isName(t) || (t = 0 == (t = +k["default"].cookie.get("pt2gguin").replace(/^o/, "")) ? "" : t)),
                ((0,
                    k["default"])("u").value = t) && (k["default"].css.hide((0,
                    k["default"])("uin_tips")),
                (0,
                    k["default"])("uin_del") && k["default"].css.show((0,
                    k["default"])("uin_del")),
                    q.set_account()))
            },
            "doLockuin": function () {
                q.switchpage(C.LoginState.PLogin, !0),
                    (0,
                        k["default"])("u").readOnly = !0,
                (0,
                    k["default"])("qlogin_entry") && ((0,
                    k["default"])("qlogin_entry").style.display = "none");
                var t = (0,
                    k["default"])("uinArea");
                k["default"].css.hasClass(t, "default") || k["default"].css.addClass(t, "default");
                t = (0,
                    k["default"])("uin_del");
                t && t.parentNode.removeChild(t),
                    k["default"].e.remove((0,
                        k["default"])("switcher_qlogin"), "click", q.onQloginSwitch),
                    (0,
                        k["default"])("switcher_qlogin").className = "switch_btn_disabled",
                    (0,
                        k["default"])("p").focus()
            },
            "set_account": function () {
                var t = k["default"].str.trim((0,
                    k["default"])("u").value)
                    , e = T.ptui.appid;
                if (q.account = t,
                    q.at_account = t,
                    k["default"].check.isQiyeQQ800(t))
                    return q.at_account = "@" + t,
                        !0;
                if (k["default"].check.is_weibo_appid(e)) {
                    if (k["default"].check.isQQ(t) || k["default"].check.isMail(t))
                        return !0;
                    if (k["default"].check.isNick(t) || k["default"].check.isName(t))
                        return q.at_account = "@" + t,
                            !0;
                    if (k["default"].check.isPhone(t))
                        return q.at_account = "@" + t.replace(/^(86|886)/, ""),
                            !0;
                    if (k["default"].check.isSeaPhone(t))
                        return q.at_account = "@00" + t.replace(/^(00)/, ""),
                        /^(@0088609)/.test(q.at_account) && (q.at_account = q.at_account.replace(/^(@0088609)/, "@008869")),
                            !0
                } else {
                    if (k["default"].check.isQQ(t) || k["default"].check.isMail(t))
                        return !0;
                    if (k["default"].check.isPhone(t))
                        return q.at_account = "@" + t.replace(/^(86|886)/, ""),
                            !0;
                    if (k["default"].check.isNick(t))
                        return (0,
                            k["default"])("u").value = t + "@qq.com",
                            q.account = t + "@qq.com",
                            q.at_account = t + "@qq.com",
                            !0
                }
                return k["default"].check.isForeignPhone(t) && (q.at_account = "@" + t),
                    !0
            },
            "adjustErrTips": function () {
                var t, e, n;
                q.isNewStyle && (t = (0,
                    k["default"])("error_tips"),
                    e = (0,
                        k["default"])("loading_tips"),
                "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin_tips_0")).display && "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin")).display && (n = (0,
                    k["default"])("qlogin_tips_0")),
                "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin_tips_1")).display && "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin")).display && (n = (0,
                    k["default"])("qlogin_tips_1")),
                "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin_tips_2")).display && "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin")).display && (n = (0,
                    k["default"])("qlogin_tips_2")),
                "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin_tips_3")).display && "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin")).display && (n = (0,
                    k["default"])("qlogin_tips_3")),
                (0,
                    k["default"])("qlogin_tips_4") && "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin_tips_4")).display && "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("qlogin")).display && (n = (0,
                    k["default"])("qlogin_tips_4")),
                "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("tips")).display && "block" == k["default"].css.getComputedStyle((0,
                    k["default"])("web_qr_login")).display && (n = (0,
                    k["default"])("tips")),
                    t.style.top = k["default"].css.getOffsetPosition(n).top + parseInt(k["default"].css.getCurrentPixelStyle(n, "height"), 10) + "px",
                    e.style.top = k["default"].css.getOffsetPosition(n).top + parseInt(k["default"].css.getCurrentPixelStyle(n, "height"), 10) + "px")
            },
            "show_err": function (t, e) {
                var n;
                t ? q.smsCheck || ((n = (0,
                    k["default"])("onekey_step2")) && "block" == k["default"].css.getComputedStyle(n).display ? (0,
                    k["default"])("onekey_tips").innerHTML = t : (q.hideLoading(),
                    q.adjustErrTips(),
                    k["default"].css.show((0,
                        k["default"])("error_tips")),
                    q.err_m.innerHTML = t),
                    clearTimeout(q.errclock),
                e || (q.errclock = setTimeout("pt.plogin.hide_err()", 5e3))) : q.hideLoading()
            },
            "hide_err": function () {
                var t = (0,
                    k["default"])("onekey_step2");
                t && "block" == k["default"].css.getComputedStyle(t).display ? (0,
                    k["default"])("onekey_tips").innerHTML = "" : (k["default"].css.hide((0,
                    k["default"])("error_tips")),
                    q.err_m.innerHTML = "")
            },
            "showAssistant": function (t) {
                if ("2052" == T.ptui.lang) {
                    q.hideLoading(),
                        q.adjustErrTips(),
                        k["default"].css.show((0,
                            k["default"])("error_tips"));
                    var e = "";
                    switch (t) {
                        case 0:
                            e = "快速登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                                k["default"].report.monitor("315785");
                            break;
                        case 1:
                            e = "快速登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                                k["default"].report.monitor("315786");
                            break;
                        case 2:
                            e = "登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                                k["default"].report.monitor("315787");
                            break;
                        case 3:
                            e = "快速登录异常，试试 {http://im.qq.com/qq/2013/,升级QQ,onclick='$.report.monitor(326049);'} 修复",
                                k["default"].report.monitor("326046");
                            break;
                        case 4:
                            e = "快速登录异常，试试 {http://im.qq.com/macqq/index.shtml#im.qqformac.plusdown,安装插件,} 并重启浏览器"
                    }
                    q.err_m.innerHTML = e.replace(/{([^,]+?),([^,]+?),(.*?)}/, "<a class='tips_link' style='color: #29B1F1' href='$1' target='_blank' $3>$2</a>")
                }
            },
            "showGuanjiaTips": function () {
                k["default"].initGuanjiaPlugin(),
                    k["default"].guanjiaPlugin ? (k["default"].guanjiaPlugin.QMStartUp(16, '/traytip=3 /tipProblemid=1401 /tipSource=18 /tipType=0 /tipIdParam=0 /tipIconUrl="http://dldir2.qq.com/invc/xfspeed/qqpcmgr/clinic/image/tipsicon_qq.png" /tipTitle="QQ快速登录异常?" /tipDesc="不能用已登录的QQ号快速登录，只能手动输入账号密码，建议用电脑诊所一键修复。"'),
                        k["default"].report.monitor("316548")) : k["default"].report.monitor("316549")
            },
            "showLoading": function (t) {
                q.isNewStyle ? q.adjustErrTips() : (t = q.loginState == C.LoginState.QLogin ? 10 : 20,
                    (0,
                        k["default"])("loading_tips").style.top = t + "px"),
                    q.hide_err(),
                    k["default"].css.show((0,
                        k["default"])("loading_tips"))
            },
            "hideLoading": function () {
                k["default"].css.hide((0,
                    k["default"])("loading_tips"))
            },
            "showLowList": function () {
                var t = (0,
                    k["default"])("combox_list");
                t && (k["default"].css.show(t),
                    q.low_login_isshow = !0)
            },
            "hideLowList": function () {
                var t = (0,
                    k["default"])("combox_list");
                t && (k["default"].css.hide(t),
                    q.low_login_isshow = !1)
            },
            "u_focus": function () {
                "" == (0,
                    k["default"])("u").value && (k["default"].css.show((0,
                    k["default"])("uin_tips")),
                    (0,
                        k["default"])("uin_tips").className = "input_tips_focus"),
                    (0,
                        k["default"])("u").parentNode.className = "inputOuter_focus"
            },
            "u_blur": function () {
                var t, e;
                q.__isShowEmailTips || (/^\+/.test(this.value) && (this.value = this.value.replace(/^\+/, ""),
                /^00/.test(this.value) || (this.value = "00" + this.value)),
                    "" == (t = (0,
                        k["default"])("u")).value ? (e = (0,
                        k["default"])("uin_tips"),
                        k["default"].css.show(e),
                        e.className = "input_tips") : (q.set_account(),
                        q.check()),
                    t.parentNode.className = "inputOuter")
            },
            "u_mouseover": function () {
                "inputOuter_focus" == (0,
                    k["default"])("u").parentNode.className || ((0,
                    k["default"])("u").parentNode.className = "inputOuter_hover")
            },
            "u_mouseout": function () {
                "inputOuter_focus" == (0,
                    k["default"])("u").parentNode.className || ((0,
                    k["default"])("u").parentNode.className = "inputOuter")
            },
            "window_blur": function () {
                q.lastCheckAccount = ""
            },
            "u_refresh_dom": function () {
                "" == (0,
                    k["default"])("u").value ? (k["default"].css.show((0,
                    k["default"])("uin_tips")),
                    (0,
                        k["default"])("uin_tips").className = "input_tips_focus",
                (0,
                    k["default"])("uin_del") && k["default"].css.hide((0,
                    k["default"])("uin_del"))) : (k["default"].css.hide((0,
                    k["default"])("uin_tips")),
                (0,
                    k["default"])("uin_del") && k["default"].css.show((0,
                    k["default"])("uin_del")))
            },
            "u_change": function () {
                q.set_account(),
                    q.passwordErrorNum = 1,
                    q.hasCheck(!1),
                    q.hasSubmit = !1
            },
            "list_keydown": function (t, e) {
                var n = (0,
                    k["default"])("email_list")
                    , o = (0,
                    k["default"])("u");
                1 == e && (n = (0,
                    k["default"])("combox_list"));
                var i = n.getElementsByTagName("li")
                    , r = i.length;
                switch (t.keyCode) {
                    case q.keyCode.UP:
                        i[q.list_index[e]].className = "",
                            q.list_index[e] = (q.list_index[e] - 1 + r) % r,
                            i[q.list_index[e]].className = "hover";
                        break;
                    case q.keyCode.DOWN:
                        i[q.list_index[e]].className = "",
                            q.list_index[e] = (q.list_index[e] + 1) % r,
                            i[q.list_index[e]].className = "hover";
                        break;
                    case q.keyCode.ENTER:
                        var a = i[q.list_index[e]].innerHTML;
                        0 == e && (o.value = k["default"].str.decodeHtml(a)),
                            q.hideEmailTips(),
                            q.hideLowList(),
                            t.preventDefault();
                        break;
                    case q.keyCode.TAB:
                        q.hideEmailTips(),
                            q.hideLowList()
                }
                1 == e && ((0,
                    k["default"])("combox_box").innerHTML = i[q.list_index[e]].innerHTML,
                    (0,
                        k["default"])("low_login_hour").value = i[q.list_index[e]].getAttribute("value"))
            },
            "u_keydown": function (t) {
                k["default"].css.hide((0,
                    k["default"])("uin_tips")),
                -1 != q.list_index[0] && q.list_keydown(t, 0)
            },
            "u_keyup": function (t) {
                "" == this.value ? (k["default"].css.show((0,
                    k["default"])("uin_tips")),
                    (0,
                        k["default"])("uin_tips").className = "input_tips_focus",
                (0,
                    k["default"])("uin_del") && k["default"].css.hide((0,
                    k["default"])("uin_del"))) : (0,
                    k["default"])("uin_del") && k["default"].css.show((0,
                    k["default"])("uin_del"));
                t = t.keyCode;
                t != q.keyCode.UP && t != q.keyCode.DOWN && t != q.keyCode.ENTER && t != q.keyCode.TAB && t != q.keyCode.F5 && (-1 < (0,
                    k["default"])("u").value.indexOf("@") ? (q.showEmailTips(),
                    q.createEmailTips((0,
                        k["default"])("u").value)) : q.hideEmailTips())
            },
            "email_mousemove": function (t) {
                var e, n = t.target;
                "li" == n.tagName.toLowerCase() && ((e = (0,
                    k["default"])("emailTips_" + q.list_index[0])) && (e.className = ""),
                    n.className = "hover",
                    q.list_index[0] = parseInt(n.getAttribute("id").substring(10), 10),
                    t.stopPropagation())
            },
            "email_click": function (t) {
                var e;
                "li" == t.target.tagName.toLowerCase() && ((e = (0,
                    k["default"])("emailTips_" + q.list_index[0])) && ((0,
                    k["default"])("u").value = k["default"].str.decodeHtml(e.innerHTML),
                    q.set_account(),
                    q.check()),
                    q.hideEmailTips(),
                    t.stopPropagation())
            },
            "p_focus": function () {
                "" == this.value && (k["default"].css.show((0,
                    k["default"])("pwd_tips")),
                    (0,
                        k["default"])("pwd_tips").className = "input_tips_focus"),
                    this.parentNode.className = "inputOuter_focus",
                    q.check()
            },
            "p_blur": function () {
                "" == this.value && (k["default"].css.show((0,
                    k["default"])("pwd_tips")),
                    (0,
                        k["default"])("pwd_tips").className = "input_tips"),
                    k["default"].css.hide((0,
                        k["default"])("caps_lock_tips")),
                    this.parentNode.className = "inputOuter"
            },
            "p_mouseover": function () {
                "inputOuter_focus" == (0,
                    k["default"])("p").parentNode.className || ((0,
                    k["default"])("p").parentNode.className = "inputOuter_hover")
            },
            "p_mouseout": function () {
                "inputOuter_focus" == (0,
                    k["default"])("p").parentNode.className || ((0,
                    k["default"])("p").parentNode.className = "inputOuter")
            },
            "p_keydown": function () {
                k["default"].css.hide((0,
                    k["default"])("pwd_tips"))
            },
            "p_keyup": function () {
                "" == this.value && k["default"].css.show((0,
                    k["default"])("pwd_tips"))
            },
            "p_keypress": function (t) {
                q.detectCapsLock(t) ? k["default"].css.show((0,
                    k["default"])("caps_lock_tips")) : k["default"].css.hide((0,
                    k["default"])("caps_lock_tips"))
            },
            "p_refresh_dom": function () {
                "" == (0,
                    k["default"])("p").value ? (k["default"].css.show((0,
                    k["default"])("pwd_tips")),
                    (0,
                        k["default"])("pwd_tips").className = "input_tips_focus") : k["default"].css.hide((0,
                    k["default"])("pwd_tips"))
            },
            "vc_focus": function () {
                "" == this.value && (k["default"].css.show((0,
                    k["default"])("vc_tips")),
                    (0,
                        k["default"])("vc_tips").className = "input_tips_focus"),
                    this.parentNode.className = "inputOuter_focus"
            },
            "vc_blur": function () {
                "" == this.value && (k["default"].css.show((0,
                    k["default"])("vc_tips")),
                    (0,
                        k["default"])("vc_tips").className = "input_tips"),
                    this.parentNode.className = "inputOuter"
            },
            "vc_keydown": function () {
                k["default"].css.hide((0,
                    k["default"])("vc_tips"))
            },
            "vc_keyup": function () {
                "" == this.value && k["default"].css.show((0,
                    k["default"])("vc_tips"))
            },
            "document_click": function () {
                q.action[0] = q.action[0] + 1,
                    q.hideEmailTips(),
                    q.hideLowList()
            },
            "document_keydown": function () {
                q.action[1] = q.action[1] + 1
            },
            "setLowloginCheckbox": function () {
                q.isMailLogin && (q.low_login_enable = !1),
                1 == T.ptui.low_login && (q.low_login_enable ? ((0,
                    k["default"])("q_low_login_enable").className = "checked",
                    (0,
                        k["default"])("p_low_login_enable").className = "checked",
                    (0,
                        k["default"])("auth_low_login_enable").className = "checked") : ((0,
                    k["default"])("q_low_login_enable").className = "uncheck",
                    (0,
                        k["default"])("p_low_login_enable").className = "uncheck",
                    (0,
                        k["default"])("auth_low_login_enable").className = "uncheck"))
            },
            "checkbox_click": function () {
                q.low_login_enable ? ((0,
                    k["default"])("q_low_login_enable").className = "uncheck",
                    (0,
                        k["default"])("p_low_login_enable").className = "uncheck",
                    (0,
                        k["default"])("auth_low_login_enable").className = "uncheck") : ((0,
                    k["default"])("q_low_login_enable").className = "checked",
                    (0,
                        k["default"])("p_low_login_enable").className = "checked",
                    (0,
                        k["default"])("auth_low_login_enable").className = "checked"),
                    q.low_login_enable = !q.low_login_enable
            },
            "feedback": function () {
                window.open("https://support.qq.com/products/14800")
            },
            "bind_account": function () {
                k["default"].css.hide((0,
                    k["default"])("operate_tips")),
                    q.need_hide_operate_tips = !0,
                    window.open("https://id.qq.com/index.html#account"),
                    k["default"].report.monitor("234964")
            },
            "combox_click": function (t) {
                q.low_login_isshow ? q.hideLowList() : q.showLowList(),
                    t.stopPropagation()
            },
            "delUin": function (t) {
                t && k["default"].css.hide(t.target),
                    (0,
                        k["default"])("u").value = "",
                    q.domFocus((0,
                        k["default"])("u")),
                    q.hasCheck(!1)
            },
            "check_cdn_img": function () {
                var e;
                window.g_cdn_js_fail && !T.ptui.isHttps && ((e = new Image).onload = function () {
                    e.onload = null,
                        e.onerror = null
                }
                    ,
                    e.onerror = function () {
                        e.onload = null;
                        var t = (t = (e.onerror = null,
                            k["default"])("main_css").innerHTML).replace(new RegExp("https://imgcache.qq.com/ptlogin/v4/style/", "g"), "https://ui.ptlogin2.qq.com/style/");
                        q.insertInlineCss(t),
                            k["default"].report.monitor(312520)
                    }
                    ,
                    e.src = "https://imgcache.qq.com/ptlogin/v4/style/20/images/c_icon_1.png")
            },
            "insertInlineCss": function (t) {
                var e;
                document.createStyleSheet ? document.createStyleSheet("").cssText = t : ((e = document.createElement("style")).type = "text/css",
                    e.textContent = t,
                    document.getElementsByTagName("head")[0].appendChild(e))
            },
            "createLink": function (t) {
                var e = document.createElement("link");
                e.setAttribute("type", "text/css"),
                    e.setAttribute("rel", "stylesheet"),
                    e.setAttribute("href", t),
                    document.getElementsByTagName("head")[0].appendChild(e)
            },
            "checkInputLable": function () {
                try {
                    (0,
                        k["default"])("u").value && k["default"].css.hide((0,
                        k["default"])("uin_tips")),
                        window.setTimeout(function () {
                            (0,
                                k["default"])("p").value && k["default"].css.hide((0,
                                k["default"])("pwd_tips"))
                        }, 1e3)
                } catch (t) {
                }
            },
            "domLoad": function () {
                if (!q.hasDomLoad) {
                    var t, e;
                    q.hasDomLoad = !0,
                    q.isPwdFirst() || q.switchpage(C.LoginState.QLogin),
                    "1" == k["default"].bom.query("pt_disable_pwd") && (q.switchpage(C.LoginState.QLogin),
                        t = (0,
                            k["default"])("switcher_plogin"),
                        e = (0,
                            k["default"])("docs_dotted"),
                    t && k["default"].css.hide(t),
                    e && k["default"].css.hide(e)),
                    "1" == k["default"].bom.query("pt_isdocs") && (o = (0,
                        k["default"])("login"),
                        k["default"].css.addClass(o, "docsqq")),
                        q.checkInputLable(),
                        q.checkNPLoad(),
                        q.loadQrTipsPic();
                    var n, o = (0,
                        k["default"])("loading_img");
                    o && o.setAttribute("src", o.getAttribute("place_src")),
                        q.check_cdn_img(),
                        q.ptui_notifySize("login"),
                        k["default"].report.monitor("373507&union=256042", .05),
                    navigator.cookieEnabled || (k["default"].report.monitor(408084),
                    k["default"].cookie.get("ptcz") && k["default"].report.monitor(408085)),
                    q.isTenpay && (1093 <= k["default"].sso_ver ? k["default"].report.monitor("451205") : k["default"].report.monitor("451206")),
                        q.dottedShow(),
                        q.webLoginReport(),
                        q.monitorQQNum(),
                        q.aq_patch(),
                        q.gzipReport(),
                        setTimeout(function () {
                            q.isNewStyle && s["default"].hasNoQlogin() && !q.isPwdFirst() && q.showQrTips()
                        }, 1e3),
                    q.isNewStyle && setTimeout("window.scrollTo(0, 0)", 100),
                    !q.isTim || (n = (0,
                        k["default"])("bottom_qlogin")) && k["default"].css.hide(n),
                    !T.plogin.isOnlyQQLogin() || (n = (0,
                        k["default"])("uin_tips")) && (n.innerHTML = k["default"].str.encodeHtml(n.getAttribute("data-onlyqq")));
                    var i = (0,
                        k["default"])("qr_tips_pic");
                    if (i)
                        switch (parseInt(T.ptui.lang, 10)) {
                            case 1033:
                                i.style.background = "url(//imgcache.qq.com/ptlogin/v4/style/40/images/scanQRcode.png)";
                                break;
                            case 1028:
                                i.style.background = "url(//imgcache.qq.com/ptlogin/v4/style/40/images/scanQRcode_cht.png)"
                        }
                    q.isTim || k["default"].http.loadScript("https://ssl.captcha.qq.com/TCaptcha.js", function () {
                        q.initNewVerifyCodeUI(),
                            q.formFocus()
                    })
                }
            },
            "dottedShow": function () {
                try {
                    var t = (0,
                        k["default"])("bottom_qlogin");
                    if (!t)
                        return;
                    t = t.getElementsByTagName("span");
                    if (!t || 0 == t.length)
                        return;
                    for (var t = t[t.length - 1], e = t, n = !1; e;) {
                        if ("a" == (e.tagName && e.tagName.toLowerCase())) {
                            n = !0;
                            break
                        }
                        e = e.nextSibling
                    }
                    n || (t.style.display = "none")
                } catch (o) {
                    k["default"].report.nlog("dotted show " + o.message)
                }
            },
            "isOnlyQQLogin": function () {
                return T.plogin.isQcloud() || 527 == T.ptui.daid || "358" === T.ptui.daid
            },
            "checkNPLoad": function () {
                navigator.mimeTypes["application/nptxsso"] && !k["default"].sso_loadComplete && k["default"].checkNPPlugin()
            },
            "gzipReport": function () {
                var n, t;
                "1" == T.ptui.gzipEnable || T.ptui.isHttps || q.isUIStyle || (k["default"].report.monitor("455847"),
                (n = k["default"].http.getXHR()) && (t = "/cgi-bin/xver?t=" + Math.random(),
                    n.open("get", t),
                    n.onreadystatechange = function () {
                        if (4 == n.readyState)
                            if (200 <= n.status && n.status < 300 || 304 === n.status || 1223 === n.status || 0 === n.status) {
                                try {
                                    var t = document.createElement("script");
                                    t.innerHTML = n.responseText,
                                        document.getElementsByTagName("head")[0].appendChild(t)
                                } catch (e) {
                                }
                                window._gz || k["default"].report.nlog("gzip探测异常，返回内容：" + n.responseText + "返回码：" + n.status + "uin=" + k["default"].cookie.get("pt2gguin"), "462348")
                            } else
                                k["default"].report.nlog("gzip探测异常，返回内容：" + n.responseText + "返回码：" + n.status + "uin=" + k["default"].cookie.get("pt2gguin"), "462348")
                    }
                    ,
                    n.send()))
            },
            "monitorQQNum": function () {
                switch (k["default"].loginQQnum) {
                    case 0:
                        k["default"].report.monitor("330314", .05);
                        break;
                    case 1:
                        k["default"].report.monitor("330315", .05);
                        break;
                    case 2:
                        k["default"].report.monitor("330316", .05);
                        break;
                    case 3:
                        k["default"].report.monitor("330317", .05);
                        break;
                    case 4:
                        k["default"].report.monitor("330318", .05);
                        break;
                    default:
                        k["default"].report.monitor("330319", .05)
                }
            },
            "noscript_err": function () {
                k["default"].report.nlog("noscript_err", 316648),
                    (0,
                        k["default"])("noscript_area").style.display = "none"
            },
            "bindEvent": function () {
                var t = (0,
                    k["default"])("u")
                    , e = (0,
                    k["default"])("p")
                    , n = (0,
                    k["default"])("verifycode")
                    , o = (0,
                    k["default"])("verifyimgArea")
                    , i = (0,
                    k["default"])("login_button")
                    , r = (0,
                    k["default"])("p_low_login_box")
                    , a = (0,
                    k["default"])("q_low_login_box")
                    , u = (0,
                    k["default"])("auth_low_login_box")
                    , s = (0,
                    k["default"])("email_list")
                    , l = (0,
                    k["default"])("close")
                    , c = (0,
                    k["default"])("switcher_qlogin")
                    , f = (0,
                    k["default"])("switcher_plogin")
                    , d = (0,
                    k["default"])("uin_del")
                    , p = (0,
                    k["default"])("bind_account")
                    , h = (0,
                    k["default"])("cancleAuth")
                    , g = (0,
                    k["default"])("authClose")
                    , m = (0,
                    k["default"])("auth_area")
                    , _ = ((0,
                    k["default"])("qr_invalid"),
                    (0,
                        k["default"])("goBack"))
                    , y = (0,
                    k["default"])("qr_img_box")
                    , v = (0,
                    k["default"])("qrlogin_img")
                    , w = (0,
                    k["default"])("qr_info_link")
                    , b = (0,
                    k["default"])("qrswitch_logo");
                b && k["default"].e.add(b, "click", q.switch_qrlogin),
                w && k["default"].e.add(v, "click", function () {
                    k["default"].report.monitor("331287", .05)
                }),
                y && (k["default"].e.add(y, "mouseover", q.showQrTips),
                    k["default"].e.add(y, "mouseout", q.hideQrTips)),
                _ && k["default"].e.add(_, "click", function (t) {
                    t.preventDefault(),
                        q.go_qrlogin_step(1),
                        k["default"].report.monitor("331288", .05)
                }),
                m && (k["default"].e.add(m, "click", q.authLogin),
                    k["default"].e.add(m, "mousedown", q.authMouseDowm),
                    k["default"].e.add(m, "mouseup", q.authMouseUp)),
                h && k["default"].e.add(h, "click", q.cancleAuth),
                g && k["default"].e.add(g, "click", q.ptui_notifyClose),
                c && k["default"].e.add(c, "click", q.onQloginSwitch),
                f && k["default"].e.add(f, "click", function (t) {
                    t.preventDefault(),
                        q.switchpage(C.LoginState.PLogin),
                        k["default"].report.monitor("331285", .05)
                }),
                p && (k["default"].e.add(p, "click", q.bind_account),
                    k["default"].e.add(p, "mouseover", function () {
                        q.need_hide_operate_tips = !1
                    }),
                    k["default"].e.add(p, "mouseout", function () {
                        q.need_hide_operate_tips = !0
                    })),
                l && k["default"].e.add(l, "click", q.ptui_notifyClose),
                1 == T.ptui.low_login && r && a && (k["default"].e.add(r, "click", q.checkbox_click),
                    k["default"].e.add(a, "click", q.checkbox_click)),
                1 == T.ptui.low_login && u && k["default"].e.add(u, "click", q.checkbox_click),
                    k["default"].e.add(t, "focus", q.u_focus),
                    k["default"].e.add(t, "blur", q.u_blur),
                    k["default"].e.add(t, "change", q.u_change),
                    k["default"].e.add(t, "keydown", q.u_keydown),
                    k["default"].e.add(t, "paste", function () {
                        setTimeout(q.u_refresh_dom, 0)
                    }),
                    k["default"].e.add(t, "keyup", q.u_keyup),
                    k["default"].e.add(d, "click", q.delUin),
                    k["default"].e.add(e, "focus", q.p_focus),
                    k["default"].e.add(e, "blur", q.p_blur),
                    k["default"].e.add(e, "keydown", q.p_keydown),
                    k["default"].e.add(e, "keyup", q.p_keyup),
                    k["default"].e.add(e, "keypress", q.p_keypress),
                    k["default"].e.add(e, "paste", function () {
                        setTimeout(q.p_refresh_dom, 0)
                    }),
                    k["default"].e.add(i, "click", function (t) {
                        var e;
                        S.logger.log("$login_btn.onClick()"),
                        t && t.preventDefault(),
                            1 != q.needShowNewVc || q.hasVCSuccess ? 1 == q.needShowNewVc && q.hasVCSuccess ? (e = q.checkUrl.replace(/^https?:\/\//gi, "").split("/")[0],
                                q.show_err('网络遇到点问题，请稍后刷新页面重试。<a target="_blank" href="https://ping.huatuo.qq.com/' + e + '">点击排查。</a>', !0),
                                S.logger.info("$login_btn.onClick()", "plogin.cntCheckTimeout=".concat(q.cntCheckTimeout))) : q.submit(t) : (q.showVC(),
                                S.logger.info("$login_btn.onClick()", "showVC"))
                    }),
                    k["default"].e.add(o, "click", q.changeVC),
                    k["default"].e.add(s, "mousemove", q.email_mousemove),
                    k["default"].e.add(s, "click", q.email_click),
                    k["default"].e.add(document, "click", q.document_click),
                    k["default"].e.add(document, "keydown", q.document_keydown),
                    k["default"].e.add(n, "focus", q.vc_focus),
                    k["default"].e.add(n, "blur", q.vc_blur),
                    k["default"].e.add(n, "keydown", q.vc_keydown),
                    k["default"].e.add(n, "keyup", q.vc_keyup),
                    k["default"].e.add(window, "load", q.domLoad);
                n = (0,
                    k["default"])("noscript_img");
                n && (k["default"].e.add(n, "load", q.noscript_err),
                    k["default"].e.add(n, "error", q.noscript_err));
                n = (0,
                    k["default"])("vip_link2");
                n && k["default"].e.add(n, "click", function (t) {
                    window.open("https://pay.qq.com/qqvip/index.shtml?aid=vip.gongneng.other.red.dengluweb_wording2_open"),
                        t.preventDefault(),
                        k["default"].report.monitor("263482")
                }),
                q.isNewQr && k["default"].e.add(document, "visibilitychange", function () {
                    var t = (0,
                        k["default"])("onekey_step2");
                    if (!t || "block" != k["default"].css.getComputedStyle(t).display)
                        switch (document.visibilityState) {
                            case "hidden":
                                q.cancle_qrlogin();
                                break;
                            case "visible":
                                q.loginState == C.LoginState.QLogin && q.qrlogin_invalid && q.begin_qrlogin()
                        }
                })
            },
            "vcodeMessage": function (t) {
                t.randstr && t.ticket || k["default"].report.nlog("vcode postMessage error：" + t),
                    (0,
                        k["default"])("verifycode").value = t.randstr,
                    S.logger.info("vcodeMessage set verifycode to", t.randstr),
                    q.pt_verifysession = t.ticket,
                    q.hasVCSuccess = !0,
                    q.hideVC(),
                    q.submit()
            },
            "onSmsSubmit": function () {
                S.logger.info("plogin.onSmsSubmit()");
                var t = q.smsLoginUrl;
                t && (k["default"].cookie.get("pt_sms") && (t += "&pt_sms_code=" + k["default"].cookie.get("pt_sms")),
                    k["default"].http.loadScript(t),
                    S.logger.info("plogin.onSmsSubmit", "url: ".concat(t, ", pt_sms=").concat(k["default"].cookie.get("pt_sms"))))
            },
            "onCloseSms": function () {
                var t = (0,
                    k["default"])("verify_iframe_mask");
                t && document.body.removeChild(t)
            },
            "newVCFirst": !0,
            "showNewVC": function () {
                var t = "dark" === k["default"].url.getParam("verify_theme")
                    , e = (0,
                    k["default"])(y);
                e.style.cssText = "background: none #FFFFFF; position: absolute; top: 0; width: 100%; z-index:9999;",
                    e.style.height = (0,
                        k["default"])("login").offsetHeight - (21 == T.ptui.style ? 2 : 4) + "px",
                t && (e.style.background = "#000",
                    e.style.color = "#FFF"),
                    k["default"].css.show(e),
                    q.captcha = new TencentCaptcha(document.getElementById(_), T.ptui.appid, q.VCCallback, {
                        "sid": q.sessionID,
                        "type": "embed",
                        "enableDarkMode": t && "force"
                    }),
                    q.captcha.show()
            },
            "hideNewVC": function () {
                (0,
                    k["default"])(y) && k["default"].css.hide((0,
                    k["default"])(y)),
                window.TencentCaptcha && q.captcha instanceof TencentCaptcha && q.captcha.destroy(),
                    q.captcha = null
            },
            "changeNewVC": function () {
                q.showNewVC()
            },
            "initNewVerifyCodeUI": function () {
                var t = (0,
                    k["default"])(y)
                    , e = document.createElement("div")
                    , n = document.createElement("div");
                n.id = _,
                    q.isQcloud() ? (e.innerHTML = '<div style=" width: 300px; left:50%; margin-left:-150px; position: relative"><div style="position: relative; margin-left: 10px"><a href="javascript:pt.plogin.hideVC();" style="color: #007aff; text-decoration: none;">返回</a></div></div>',
                        n.style.cssText = "background: none #FFFFFF; position: relative; width: 300px; left:50%; margin-left:-150px; z-index:9999;",
                        t.appendChild(n),
                        t.appendChild(e)) : (e.innerHTML = '<div style="border-bottom: 1px solid #d7d7d7;"><div style="position: absolute; margin-left: 10px"><a href="javascript:pt.plogin.hideVC();" style="color: #007aff; text-decoration: none;">返回</a></div><div style="width: 100%; text-align: center; font-size: 16px; font-weight: bold">安全验证</div></div>',
                        n.style.cssText = "background: none #FFFFFF; position: absolute; width: 300px; left:50%; margin-left:-150px; z-index:9999;",
                        t.appendChild(e),
                        t.appendChild(n)),
                    e.style.cssText = "margin: 0px; padding: 0px; line-height: 40px"
            },
            "showVC": function () {
                q.vcFlag = !0,
                    "1" == T.ptui.pt_vcode_v1 ? q.showNewVC() : (k["default"].css.show((0,
                        k["default"])("verifyArea")),
                        ((0,
                            k["default"])("verifycode").value = "",
                            k["default"])("verifyimg").src = q.getVCUrl(),
                        console.log("showVC set verifycode to empty")),
                    q.ptui_notifySize("login")
            },
            "hideVC": function () {
                q.vcFlag = !1,
                    "1" == T.ptui.pt_vcode_v1 ? q.hideNewVC() : k["default"].css.hide((0,
                        k["default"])("verifyArea")),
                    q.ptui_notifySize("login")
            },
            "changeVC": function (t) {
                t && t.preventDefault(),
                    "1" == T.ptui.pt_vcode_v1 ? q.changeNewVC() : (0,
                        k["default"])("verifyimg").src = q.getVCUrl(),
                t && k["default"].report.monitor("330322", .05)
            },
            "getVCUrl": function () {
                var t = q.at_account
                    , e = T.ptui.appid
                    , n = q.sessionID || "";
                return q.verifycodeUrl + "?uin=" + t + "&aid=" + e + "&cap_cd=" + q.cap_cd + (n ? "&sessionID=" + n : "") + "&" + Math.random()
            },
            "checkValidate": function (t) {
                try {
                    var e = t.u
                        , n = t.p
                        , o = t.verifycode
                        , i = (0,
                        k["default"])("safe_edit");
                    if ("" == k["default"].str.trim(e.value))
                        return q.show_err(T.str.no_uin),
                            q.domFocus(e),
                            !1;
                    if (k["default"].check.isNullQQ(e.value))
                        return q.show_err(T.str.inv_uin),
                            q.domFocus(e),
                            !1;
                    e = n.value;
                    if (q.armSafeEdit.isSafe && i && ("D41D8CD98F00B204E9800998ECF8427E" == (e = i.GetPwdHash()) && (e = ""),
                        q.armSafeEdit.safepwd = e),
                        !e)
                        return q.show_err(T.str.no_pwd),
                            q.domFocus(n),
                            !1;
                    if ("" == o.value)
                        return q.needVc || q.vcFlag ? (q.show_err(T.str.no_vcode),
                            q.domFocus(o)) : (q.checkResultReport(14),
                            clearTimeout(q.checkClock),
                            q.showVC()),
                            !1;
                    if (o.value.length < 4)
                        return q.show_err(T.str.inv_vcode),
                            q.domFocus(o),
                            o.select(),
                            !1
                } catch (r) {
                }
                return !0
            },
            "checkTimeout": function () {
                var t = k["default"].str.trim((0,
                    k["default"])("u").value);
                (k["default"].check.isQQ(t) || k["default"].check.isQQMail(t)) && (q.cap_cd = 0,
                    q.salt = k["default"].str.uin2hex(t.replace("@qq.com", "")),
                    q.needVc = !0,
                    "1" == T.ptui.pt_vcode_v1 ? q.needShowNewVc = !0 : q.showVC(),
                    q.isCheckTimeout = !0,
                    q.checkRet = 1,
                    q.cntCheckTimeout = q.cntCheckTimeout + 1),
                    k["default"].report.monitor(216082),
                    S.logger.info("plogin.checkTimeout()", "uin=".concat(t))
            },
            "loginTimeout": function () {
                q.showAssistant(2),
                    console.warn("login Timeout")
            },
            "hasCheck": function (t) {
                if (void 0 === t)
                    return q.checkState;
                q.checkState = t
            },
            "check": function (t) {
                var e;
                {
                    if (S.logger.log("check start, caller=".concat((0,
                        S.getCallerName)(3))),
                        !q.smsCheck)
                        return 0 === q.checkState ? (S.logger.info("checking, holding"),
                            q.check.cb = t) : (q.account || q.set_account(),
                            k["default"].check.isNullQQ(q.account) ? (q.show_err(T.str.inv_uin),
                                !1) : void (q.account != q.lastCheckAccount && "" != q.account ? (q.hasCheck(0),
                                e = T.ptui.appid,
                                e = q.getCheckUrl(q.at_account, e),
                                q.isCheckTimeout = !1,
                                clearTimeout(q.checkClock),
                                q.checkClock = setTimeout("pt.plogin.checkTimeout();", 5e3),
                                k["default"].http.loadScript(e),
                                q.check.cb = t,
                                S.logger.info("start to req check api")) : S.logger.info("need not to check, plogin.account=".concat(q.account, " plogin.lastCheckAccount=").concat(q.lastCheckAccount))));
                    S.logger.info("sms need not to check")
                }
            },
            "getCheckUrl": function (t, e) {
                var n = q.checkUrl + "?regmaster=" + T.ptui.regmaster + "&pt_tea=2&pt_vcode=" + T.ptui.pt_vcode_v1 + "&";
                return n += "uin=" + t + "&appid=" + e + "&js_ver=" + T.ptui.ptui_version + "&js_type=" + q.js_type + "&login_sig=" + T.ptui.login_sig + "&u1=" + encodeURIComponent(T.ptui.s_url) + "&r=" + Math.random() + "&pt_uistyle=" + T.ptui.style + "&daid=" + T.ptui.daid + "&pt_3rd_aid=" + T.ptui.pt_3rd_aid + "&o1vId=" + q.deviceId,
                window.TDC && window.TDC.getInfo && window.TDC.getInfo().tokenid && (n += "&pt_jstoken=" + window.TDC.getInfo().tokenid),
                    n
            },
            "getSubmitUrl": function (t) {
                var e, n, o = q.loginUrl + t + "?", i = {};
                if ("pt_susp_repush" == t)
                    return o + ("appid=" + T.ptui.appid + "&daid=" + T.ptui.daid);
                for (n in "login" == t && (i.u = encodeURIComponent(q.at_account),
                    i.verifycode = (0,
                        k["default"])("verifycode").value,
                    S.logger.info("getSubmitUrl setParams verifycode", (0,
                        k["default"])("verifycode").value),
                    q.needShowNewVc ? i.pt_vcode_v1 = 1 : i.pt_vcode_v1 = 0,
                    i.pt_verifysession_v1 = q.pt_verifysession || k["default"].cookie.get("verifysession"),
                    e = (0,
                        k["default"])("p").value,
                q.armSafeEdit.isSafe && (e = q.armSafeEdit.safepwd),
                    i.p = r["default"].getEncryption(e, q.salt, i.verifycode, q.armSafeEdit.isSafe),
                    i.pt_randsalt = q.isRandSalt || 0,
                window.TDC && window.TDC.getInfo && window.TDC.getInfo().tokenid && (i.pt_jstoken = window.TDC.getInfo().tokenid),
                    S.logger.log("getSubmitUrl loginName == login branch finished")),
                    i.u1 = "login" == t ? encodeURIComponent(s["default"].getSurl((0,
                        k["default"])("u").value)) : encodeURIComponent(s["default"].getSurl()),
                "ptqrlogin" == t && (i.ptqrtoken = k["default"].str.hash33(k["default"].cookie.get("qrsig"))),
                "pt_susp_poll" == t && (i.pt_susp_poll_token = k["default"].str.hash33(k["default"].cookie.get("pt_susp_sig"))),
                    i.ptredirect = T.ptui.target,
                    i.h = 1,
                    i.t = 1,
                    i.g = 1,
                    i.from_ui = 1,
                    i.ptlang = T.ptui.lang,
                    i.action = q.action.join("-") + "-" + +new Date,
                    i.js_ver = T.ptui.ptui_version,
                    i.js_type = q.js_type,
                    i.login_sig = T.ptui.login_sig,
                    i.pt_uistyle = T.ptui.style,
                1 == T.ptui.low_login && q.low_login_enable && !q.isMailLogin && (i.low_login_enable = 1,
                    i.low_login_hour = q.low_login_hour),
                "0" != T.ptui.csimc && (i.csimc = T.ptui.csimc,
                    i.csnum = T.ptui.csnum,
                    i.authid = T.ptui.authid),
                    i.aid = T.ptui.appid,
                T.ptui.daid && (i.daid = T.ptui.daid),
                "0" != T.ptui.pt_3rd_aid && (i.pt_3rd_aid = T.ptui.pt_3rd_aid),
                T.ptui.regmaster && (i.regmaster = T.ptui.regmaster),
                T.ptui.mibao_css && (i.mibao_css = T.ptui.mibao_css),
                "1" == T.ptui.pt_qzone_sig && (i.pt_qzone_sig = 1),
                "1" == T.ptui.pt_light && (i.pt_light = 1),
                q.ptdrvs && (i.ptdrvs = q.ptdrvs),
                q.sessionID && (i.sid = q.sessionID),
                    i)
                    o += n + "=" + i[n] + "&";
                return q.isTim && (o += "tim=1&"),
                s["default"].hasOneKeyList() && (o += "has_onekey=1&"),
                s["default"].QQProtectGUID && (o += "&pt_guid_sig=" + s["default"].QQProtectGUID),
                    o += "&o1vId=" + q.deviceId
            },
            "submit": function (t) {
                if (S.logger.log("submit() caller=".concat((0,
                    S.getCallerName)(3))),
                2 <= q.cntCheckTimeout)
                    return q.show_err(q.checkErr[T.ptui.lang]),
                        q.needVc = !1,
                        q.needShowNewVc = !1,
                        void S.logger.warn("check超时2次，提示网络错误");
                if (q.submitTime = (new Date).getTime(),
                t && t.preventDefault(),
                q.lastCheckAccount != q.account && !q.hasCheck())
                    return S.logger.info("start check, plogin.lastCheckAccount=".concat(q.lastCheckAccount, " plogin.account=").concat(q.account, " plogin.hasCheck()=").concat(q.hasCheck())),
                        void q.check(q.submit);
                if (!q.ptui_onLogin(document.loginform))
                    return S.logger.info("表单合法性检查不通过，中止submit"),
                        !1;
                if (k["default"].cookie.set("ptui_loginuin", escape(document.loginform.u.value), T.ptui.domain, "/", 720),
                -1 == q.checkRet || 3 == q.checkRet)
                    return q.show_err(q.checkErr[T.ptui.lang]),
                        q.lastCheckAccount = "",
                        q.domFocus((0,
                            k["default"])("p")),
                        S.logger.info("retry check, plogin.checkRet=".concat(q.checkRet)),
                        void q.check();
                clearTimeout(q.loginClock),
                    q.loginClock = setTimeout("pt.plogin.loginTimeout();", 5e3);
                t = q.getSubmitUrl("login");
                return q.smsLoginUrl = t,
                    k["default"].winName.set("login_href", encodeURIComponent(T.ptui.href)),
                    q.showLoading(),
                    q.isVCSessionTimeOut() && !q.needVc ? (q.lastCheckAccount = "",
                        q.check(q.submit),
                        S.logger.info("start check, vcsession timeout")) : (s["default"].reportPCMgr(q.at_account, 1),
                        s["default"].reportPath(q.at_account, 0),
                        S.logger.info("start to req login api, loginuin=".concat(document.loginform.u.value)),
                        k["default"].http.loadScript(t),
                        q.isdTime["7808-7-2-0"] = (new Date).getTime()),
                    !1
            },
            "isVCSessionTimeOut": function () {
                return q.checkTime = q.checkTime || (new Date).getTime(),
                12e5 < q.submitTime - q.checkTime && (k["default"].report.monitor(330323, .05),
                    !0)
            },
            "webLoginReport": function () {
            },
            "ptui_speedReport": function () {
            },
            "resultReport": function () {
            },
            "crossMessage": function (t) {
                if (q.isUIStyle && q.uistyleCM(t),
                "undefined" != typeof window.postMessage)
                    window.parent.postMessage(k["default"].str.json2str(t), "*");
                else if (T.ptui.proxy_url) {
                    var e, n = T.ptui.proxy_url + "#";
                    for (e in t)
                        n += e + "=" + t[e] + "&";
                    (0,
                        k["default"])("proxy") && ((0,
                        k["default"])("proxy").innerHTML = '<iframe src="' + encodeURI(n) + '"></iframe>')
                } else
                    try {
                        navigator.ptlogin_callback && navigator.ptlogin_callback(k["default"].str.json2str(t))
                    } catch (o) {
                        k["default"].report.nlog("ptlogin_callback " + o.message)
                    }
            },
            "uistyleCM": function (t) {
                var e = encodeURIComponent(k["default"].str.json2str(t))
                    , t = document.location.protocol + "//ui.ptlogin2." + T.ptui.domain + "/cross_proxy.html#" + e
                    , e = (0,
                    k["default"])("proxy");
                e && (e.innerHTML = '<iframe  allowtransparency="true" scrolling="no" frameborder="0" width="1" height="1" src="' + t + '">')
            },
            "ptui_notifyClose": function (t) {
                t && t.preventDefault();
                t = {
                    "action": "close"
                };
                q.crossMessage(t),
                    q.cancle_qrlogin()
            },
            "ptui_notifySize": function (t) {
                q.loginState == C.LoginState.PLogin && ((0,
                    k["default"])("bottom_web") && k["default"].css.hide((0,
                    k["default"])("bottom_web")),
                    q.adjustLoginsize(),
                (0,
                    k["default"])("bottom_web") && k["default"].css.show((0,
                    k["default"])("bottom_web")));
                var e = (0,
                    k["default"])(t)
                    , t = {};
                q.isNewStyle && (e.style.height = "100%"),
                    t.action = "resize",
                    t.width = e.offsetWidth || 1,
                    t.height = e.offsetHeight || 1,
                q.isNewStyle && (t.height -= k["default"].css.getCurrentPixelStyle(e, "border-top-width") + k["default"].css.getCurrentPixelStyle(e, "border-bottom-width"),
                    e.style.height = t.height - k["default"].css.getCurrentPixelStyle(e, "border-top-width") - k["default"].css.getCurrentPixelStyle(e, "border-bottom-width") + "px"),
                    q.crossMessage(t)
            },
            "ptui_onLogin": function (t) {
                return q.checkValidate(t)
            },
            "ptui_uin": function () {
            },
            "is_mibao": function (t) {
                return /^http(s)?:\/\/(ssl\.)?ui.ptlogin2.(\S)+\/cgi-bin\/mibao_vry/.test(t)
            },
            "__get_polling_url": function (t) {
                t = (T.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + T.ptui.domain + "/" + t + "?";
                return t += "appid=" + T.ptui.appid + "&e=2&l=M&s=3&d=72&v=4&t=" + Math.random(),
                T.ptui.regmaster && (t += "&regmaster=" + T.ptui.regmaster),
                T.ptui.daid && (t += "&daid=" + T.ptui.daid),
                q.isTim && (t += "&tim=1"),
                T.ptui.pt_3rd_aid && (t += "&pt_3rd_aid=" + T.ptui.pt_3rd_aid),
                    t
            },
            "get_qrlogin_pic": function () {
                return q.__get_polling_url("ptqrshow")
            },
            "go_qrlogin_step": function (t) {
                switch (t) {
                    case 1:
                        q.begin_qrlogin(),
                        q.isNewQr || k["default"].css.show((0,
                            k["default"])("qrlogin_step1")),
                            k["default"].css.hide((0,
                                k["default"])("qrlogin_step2"));
                        break;
                    case 2:
                        q.isNewQr ? ((0,
                            k["default"])("qrlogin_step2").style.height = (0,
                            k["default"])("login").offsetHeight - 8 + "px",
                            k["default"].css.show((0,
                                k["default"])("qrlogin_step2"))) : (k["default"].css.show((0,
                            k["default"])("qrlogin_step2")),
                            k["default"].css.hide((0,
                                k["default"])("qrlogin_step1")))
                }
            },
            "go_onekey_step": function (t) {
                var e = (0,
                    k["default"])("onekey_step2");
                switch (t) {
                    case 1:
                        k["default"].css.hide(e),
                            q.begin_qrlogin();
                        break;
                    case 2:
                        k["default"].css.show(e),
                            q.showLoading(),
                            q.hideLoading()
                }
            },
            "begin_qrlogin": function () {
                if (S.logger.log("开始拉取qrlogin，caller=".concat((0,
                    S.getCallerName)(3))),
                    T.ptui.lockuin)
                    S.logger.info("固定UIN，不需要qrlogin，pt.ptui.lockuin=".concat(T.ptui.lockuin));
                else {
                    var e, t = (0,
                        k["default"])("qr_invalid"), n = (0,
                        k["default"])("qrlogin_img");
                    if (t && (S.logger.info("隐藏QRCode不可用的遮罩"),
                        k["default"].css.hide(t)),
                        n) {
                        if (e = setTimeout(function () {
                            S.logger.warn("拉取二维码超时"),
                                k["default"].report.monitor("33902489")
                        }, q.defaultTimeoutTime),
                            n.onload = function () {
                                try {
                                    if (S.logger.log("qrloginImg.onload timer=".concat(e)),
                                        clearTimeout(e),
                                        !(0,
                                            a.isInPage)(this))
                                        return void S.logger.info("当前图片元素已经从dom树上移除，忽略");
                                    S.logger.log("parentNode=", this.parentNode),
                                        S.logger.log("parentNode.childNodes=", this.parentNode.childNodes),
                                        ((0,
                                            k["default"])("qrlogin_img").onload = null,
                                            k["default"])("qrlogin_img").onerror = null,
                                        q.cancle_qrlogin(),
                                        q.qrlogin_clock = window.setInterval("pt.plogin.qrlogin_submit();", 3e3),
                                        q.qrlogin_timeout = window.setTimeout(function () {
                                            S.logger.info("将QR登录设置为不可用 timer=".concat(e)),
                                                q.set_qrlogin_invalid()
                                        }, q.qrlogin_timeout_time),
                                        S.logger.info("拉取二维码成功")
                                } catch (t) {
                                    S.logger.warn("qrloginImg.onload 遇到错误", t)
                                }
                            }
                            ,
                            n.onerror = function () {
                                try {
                                    if (S.logger.log("qrloginImg.onerror timer=".concat(e)),
                                        clearTimeout(e),
                                        !(0,
                                            a.isInPage)(this))
                                        return void S.logger.info("当前图片元素已经从dom树上移除，忽略");
                                    S.logger.log("parentNode=", this.parentNode),
                                        S.logger.log("parentNode.childNodes=", this.parentNode.childNodes),
                                        ((0,
                                            k["default"])("qrlogin_img").onload = null,
                                            k["default"])("qrlogin_img").onerror = null,
                                        q.set_qrlogin_invalid(),
                                        S.logger.warn("拉取二维码失败 处理完成")
                                } catch (t) {
                                    S.logger.warn("qrloginImg.onerror 遇到错误", t)
                                }
                            }
                            ,
                            S.logger.log("begin_qrlogin timer=".concat(e)),
                        q.qrloginGetTime && new Date - q.qrloginGetTime < q.qrloginRefreshInterval)
                            return clearTimeout(e),
                            !q.qrlogin_clock && q.qrlogin_invalid && (0,
                                k["default"])("qr_invalid") && (S.logger.info("显示二维码不可用遮罩 timer=".concat(e)),
                                k["default"].css.show((0,
                                    k["default"])("qr_invalid"))),
                                void S.logger.info("距离上次拉取时间太短, plogin.qrloginGetTime = ".concat(q.qrloginGetTime, " timer=").concat(e, " qrlogin_invalid=").concat(q.qrlogin_invalid));
                        S.logger.info("开始拉取二维码 timer=".concat(e)),
                            q.qrlogin_invalid = !1,
                            q.qrloginGetTime = (new Date).getTime(),
                            setTimeout(function () {
                                try {
                                    (0,
                                        k["default"])("qrlogin_img").src = q.get_qrlogin_pic()
                                } catch (t) {
                                    q.qrloginGetTime = 0,
                                        S.logger.warn("拉取二维码遇到异常,timer=".concat(e, " :"), t)
                                }
                            }, 0)
                    } else
                        S.logger.warn("qrloginImg 元素不存在")
                }
            },
            "cancle_qrlogin": function () {
                S.logger.log("cancle_qrlogin caller=".concat((0,
                    S.getCallerName)())),
                    window.clearInterval(q.qrlogin_clock),
                    window.clearTimeout(q.qrlogin_timeout),
                    q.qrlogin_clock = 0,
                    q.qrlogin_invalid = !0
            },
            "set_qrlogin_invalid": function () {
                S.logger.log("set_qrlogin_invalid caller=".concat((0,
                    S.getCallerName)())),
                    q.cancle_qrlogin(),
                    q.switch_qrlogin(),
                (0,
                    k["default"])("qr_invalid") && (S.logger.info("显示QRCode不可用的遮罩"),
                    k["default"].css.show((0,
                        k["default"])("qr_invalid"))),
                    q.hideQrTips()
            },
            "loadQrTipsPic": function () {
                if (q.isNewQr) {
                    var t = (0,
                        k["default"])("qr_tips_pic")
                        , e = "chs";
                    switch (T.ptui.lang + "") {
                        case "2052":
                            e = "chs";
                            break;
                        case "1033":
                            e = "en";
                            break;
                        case "1028":
                            e = "cht"
                    }
                    k["default"].css.addClass(t, "qr_tips_pic_" + e)
                } else {
                    t = T.ptui.cssPath + "/c_qr_login.css";
                    (0,
                        k["default"])("qrswitch_logo") && q.createLink(t)
                }
            },
            "showQrTips": function () {
                var t, e, n, o;
                q.inTipsAnimate || q.isTim || 2 === q.loginState && (t = {},
                    e = k["default"].css.getOffsetPosition("qrlogin_img"),
                    n = k["default"].css.getOffsetPosition("login"),
                    t.left = e.left - n.left,
                    t.right = (0,
                        k["default"])("login").offsetWidth - (0,
                        k["default"])("qrlogin_img").offsetWidth - t.left,
                    t.left = t.left - 92 - 6,
                    (0,
                        k["default"])("qr_tips").style.left = t.left + "px",
                    o = function o() {
                        t.left < 0 || (k["default"].css.show((0,
                            k["default"])("qr_tips")),
                            ((0,
                                k["default"])("qr_tips_pic").style.opacity = 0,
                                k["default"])("qr_tips_pic").style.filter = "alpha(opacity=0)",
                            (0,
                                k["default"])("qr_tips_menban").className = "qr_tips_menban",
                            k["default"].animate.fade("qr_tips_pic", 100, 10, 10, function () {
                                q.inTipsAnimate = !1
                            }))
                    }
                    ,
                    q.inTipsAnimate = !0,
                    o(),
                    q.hideQrTipsClock = window.setTimeout("pt.plogin.hideQrTips()", 5e3),
                    k["default"].report.monitor("331286", .05))
            },
            "hideQrTips": function () {
                q.isTim || q.isNewQr && (q.inTipsAnimate = !0,
                    window.clearTimeout(q.hideQrTipsClock),
                    (0,
                        k["default"])("qr_tips_menban").className = "",
                    k["default"].animate.fade("qr_tips_pic", 0, 10, 10, function () {
                        s["default"].hasNoQlogin() ? (k["default"].css.hide((0,
                            k["default"])("qr_tips")),
                            k["default"].animate.animate("qrlogin_img", {
                                "left": 12
                            }, 10, 10, function () {
                                q.inTipsAnimate = !1
                            })) : (k["default"].css.hide((0,
                            k["default"])("qr_tips")),
                            q.inTipsAnimate = !1)
                    }))
            },
            "resetQrTips": function () {
                q.isTim || q.isNewQr && ((0,
                    k["default"])("qrlogin_img") && ((0,
                    k["default"])("qrlogin_img").style.cssText = ""),
                (0,
                    k["default"])("qr_tips") && k["default"].css.hide((0,
                    k["default"])("qr_tips")))
            },
            "qr_load": function () {
            },
            "qr_error": function () {
            },
            "switch_qrlogin_animate": function () {
                var t = q.isQrLogin
                    , e = (0,
                    k["default"])("web_qr_login_show")
                    , n = 0;
                t ? (q.isNewStyle || (n = -(0,
                    k["default"])("web_login").offsetHeight,
                    (0,
                        k["default"])("web_qr_login").style.height = ((0,
                        k["default"])("qrlogin").offsetHeight || 265) + "px"),
                    (0,
                        k["default"])("qrlogin").style.visibility = "visible",
                    (0,
                        k["default"])("web_login").style.visibility = "hidden") : (q.isNewStyle || ((n = 0,
                    k["default"])("web_qr_login").style.height = (0,
                    k["default"])("web_login").offsetHeight + "px"),
                    (0,
                        k["default"])("web_login").style.visibility = "visible",
                    (0,
                        k["default"])("qrlogin").style.visibility = "hidden"),
                    k["default"].animate.animate(e, {
                        "top": n
                    }, 30, 20)
            },
            "switch_qrlogin": function (t) {
                q.isNewQr || (t && t.preventDefault(),
                    q.hide_err(),
                    q.isQrLogin ? ((0,
                        k["default"])("qrlogin").style.visibility = "hidden",
                        q.cancle_qrlogin(),
                        (0,
                            k["default"])("qrswitch_logo").title = "二维码登录",
                        (0,
                            k["default"])("qrswitch_logo").className = "qrswitch_logo",
                        k["default"].report.monitor("273368", .05)) : ((0,
                        k["default"])("qrlogin").style.visibility = "visible",
                        q.go_qrlogin_step(1),
                        (0,
                            k["default"])("qrswitch_logo").title = "返回",
                        (0,
                            k["default"])("qrswitch_logo").className = "qrswitch_logo_qr",
                        q.begin_qrlogin(),
                        k["default"].report.monitor("273367", .05)),
                    q.isQrLogin = !q.isQrLogin,
                    q.switch_qrlogin_animate(),
                    q.ptui_notifySize("login"))
            },
            "adjustLoginsize": function () {
                var t;
                q.isNewStyle || (t = q.isQrLogin,
                    (0,
                        k["default"])("web_qr_login").style.height = t ? ((0,
                        k["default"])("qrlogin").offsetHeight || 265) + "px" : (0,
                        k["default"])("web_login").offsetHeight + "px")
            },
            "qrlogin_submit": function () {
                S.logger.log("qr_loginsubmit caller=".concat((0,
                    S.getCallerName)(3)));
                var t = q.getSubmitUrl("ptqrlogin");
                k["default"].winName.set("login_href", encodeURIComponent(T.ptui.href)),
                    "qq.com" === T.ptui.domain && q.toggleManager.featureEnable(q.toggleManager.FEATURE_KEYS.QR_LOGIN_XHR) ? u.get((0,
                        l.getProxyUrl)(t)).then(function (t) {
                        var e;
                        try {
                            e = JSON.parse(t.data.replace(/'/g, '"').replace("ptuiCB(", "[").replace(/\)$/, "]"))
                        } catch (n) {
                            throw S.logger.warn("error occured when parse ptuiCB params", n),
                                n
                        }
                        c.ptuiCB.apply(window, e)
                    })["catch"](function (t) {
                        S.logger.warn("error occured when request qrlogin:", t)
                    }) : k["default"].http.loadScript(t)
            },
            "force_qrlogin": function () {
                if (!T.ptui.lockuin)
                    switch (parseInt(T.ptui.style, 10)) {
                        case 21:
                        case 22:
                        case 23:
                            q.switch_qrlogin();
                            break;
                        default:
                            q.switchpage(C.LoginState.QLogin)
                    }
            },
            "redirect": function (t, e) {
                switch (t + "") {
                    case "0":
                        location.replace(e);
                        break;
                    case "1":
                        top.location.replace(e);
                        break;
                    case "2":
                        parent.location.replace(e);
                        break;
                    default:
                        top.location.replace(e)
                }
            },
            "armSafeEdit": function () {
                var n = (0,
                    k["default"])("pwdArea")
                    , o = (0,
                    k["default"])("p")
                    , i = n.style.height;
                o.style.width = "208px";
                var r = document.createElement("a");
                r.tabIndex = 1,
                    r.id = "safe_lock",
                    r.title = "安全控件登录开关";
                var t = {
                    "background": "url(https://ui.ptlogin2.qq.com/style/34/images/icon_5.png) no-repeat -130px -130px",
                    "width": "13px",
                    "height": "20px",
                    "display": "block",
                    "margin": "-29px 20px 0 0",
                    "cursor": "pointer",
                    "webkitUserSelect": "none",
                    "outline": "none",
                    "marginLeft": "220px"
                };
                for (e in "6.0" == k["default"].browser("version") && (t.background = t.background.replace("icon_5.png", "icon_5_8.png")),
                    t)
                    r.style[e] = t[e];
                r.style.style = "right",
                    q.armSafeEdit.isSafe = !1,
                    n.appendChild(r);
                var e, a = document.createElement("div");
                for (e in t = {
                    "position": "absolute",
                    "top": "2px",
                    "left": "1px"
                })
                    a.style[e] = t[e];

                function u() {
                    if (q.armSafeEdit.isSafe)
                        o.style.display = "block",
                            o.value = "",
                            setTimeout(function () {
                                try {
                                    o.focus()
                                } catch (t) {
                                }
                            }, 0),
                            n.removeChild(a),
                            r.style.backgroundPosition = "-130px -130px",
                            q.armSafeEdit.isSafe = !1;
                    else {
                        var t = (0,
                            k["default"])("safe_edit");
                        t ? a.style.display = "block" : (a.innerHTML = (k["default"].suportActive() ? '<object id="safe_edit" classid="CLSID:EAAED308-7322-4b9b-965E-171933ADD473" width="208" height="38">                    <param name="bkColor" value="16777215"/>                    <param name="fontColor" value="0"/>                    <param name="fontHeight" value="0.25" />                    <param name="caretHeight" value="0.2" />                    <param name="borderType" value="2" />                    <param name="borderColor" value="16777215" />                </object>' : '<embed id="safe_edit" type="application/nptxsso"     width="208" height="38" bkcolor="16777215" fontcolor="0"     fontheight="0.25" caretheight="0.8" bordertype="2" bordercolor="16777215" />') + '<div class="safe-edit-tips"     style="color: #2C9E62; height: 28px; line-height: 34px; width: 208px;">    当前为安全登录模式，使用密码控件</div>',
                            n.appendChild(a),
                            t = (0,
                                k["default"])("safe_edit"),
                            k["default"].e.add(t, "focus", q.check));
                        try {
                            t.CreateSafeEdit(),
                                t.ClearAllInput(),
                                setTimeout(function () {
                                    t.focus()
                                }, 200),
                                o.style.display = "none",
                                r.style.backgroundPosition = "-117px -130px",
                                q.armSafeEdit.isSafe = !0
                        } catch (e) {
                            q.show_err("安全控件加载失败"),
                                o.focus(),
                                q.armSafeEdit.isSafe = !1,
                                a.style.display = "none",
                                n.removeChild(a),
                                k["default"].report.monitor("456099")
                        }
                        k["default"].report.monitor("456098")
                    }
                    return q.armSafeEdit.isSafe ? n.style.height = "74px" : n.style.height = i,
                        q.ptui_notifySize("login"),
                        !1
                }

                k["default"].e.add(r, "click", u),
                    q.armSafeEdit.lockToggle = u
            },
            "onekeyVerify": function (t, e, n) {
                var o = (0,
                    k["default"])("onekey_verify")
                    , i = (0,
                    k["default"])("ov_retry_wrap")
                    , r = (0,
                    k["default"])("ov_retry")
                    , a = (0,
                    k["default"])("ov_back")
                    , u = (0,
                    k["default"])("p")
                    , s = document.loginform
                    , l = e
                    , c = n;
                if (o) {
                    clearInterval(q.onekeyVerifyClock),
                        l = parseInt(l, 10) || q.onekeyVerify.__style || 1,
                        q.onekeyVerify.__style = l;
                    for (var f = o.getElementsByTagName("span"), d = ["占位"], p = 0; p < f.length; p++)
                        -1 < f[p].className.indexOf("ov-tips") && d.push(f[p]);
                    r.onclick = function () {
                        k["default"].http.loadScript(q.getSubmitUrl("pt_susp_repush"))
                    }
                        ,
                        "hide" == t ? (q.onekeyVerifyClock = 0,
                            q.hide_err(),
                            k["default"].css.hide(o),
                            k["default"].css.show(s),
                            setTimeout(function () {
                                u.value = "",
                                    q.domFocus(u)
                            }, 0)) : ("invalid" == t ? (q.onekeyVerifyClock = 0,
                            k["default"].css.addClass(o, "invalid"),
                            q.hide_err(),
                            k["default"].e.add(a, "click", function () {
                                q.onekeyVerify("hide")
                            })) : (k["default"].css.setClass(o, "ov-" + l),
                        d[l] && d[l].appendChild(i),
                            c = c || q.onekeyVerify.__tips || "你的帐号千金难求。为确保安全，请务必对手机收到的登录请求进行确认。",
                            q.onekeyVerify.__tips = c,
                            q.show_err(c, !0),
                            q.onekeyVerifyClock = setInterval(function () {
                                k["default"].http.loadScript(q.getSubmitUrl("pt_susp_poll"))
                            }, 3e3),
                            setTimeout(function () {
                                clearInterval(q.onekeyVerifyClock),
                                    q.onekeyVerify("invalid")
                            }, q.onekey_verify_timeout)),
                            k["default"].css.show(o),
                            k["default"].css.hide(s))
                }
            },
            "getLoginParams": function (t) {
                if (q.login_param)
                    for (var e = q.login_param.split("&"), n = 0; n < e.length; n++) {
                        var o = e[n].split("=");
                        if (o[0] === t)
                            return o[1]
                    }
                return null
            }
        };
        e["default"] = q
    }
    , function (t, p, h) {
        "use strict";
        (function (e) {
                var t = h(3)
                    , n = h(4)
                    , o = setTimeout;

                function l(t) {
                    return Boolean(t && "undefined" != typeof t.length)
                }

                function i() {
                }

                function a(t) {
                    if (!(this instanceof a))
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t)
                        throw new TypeError("not a function");
                    this._state = 0,
                        this._handled = !1,
                        this._value = undefined,
                        this._deferreds = [],
                        d(t, this)
                }

                function r(o, i) {
                    for (; 3 === o._state;)
                        o = o._value;
                    0 !== o._state ? (o._handled = !0,
                        a._immediateFn(function () {
                            var t, e = 1 === o._state ? i.onFulfilled : i.onRejected;
                            if (null !== e) {
                                try {
                                    t = e(o._value)
                                } catch (n) {
                                    return void s(i.promise, n)
                                }
                                u(i.promise, t)
                            } else
                                (1 === o._state ? u : s)(i.promise, o._value)
                        })) : o._deferreds.push(i)
                }

                function u(t, e) {
                    try {
                        if (e === t)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof a)
                                return t._state = 3,
                                    t._value = e,
                                    void c(t);
                            if ("function" == typeof n)
                                return void d((o = n,
                                        i = e,
                                        function () {
                                            o.apply(i, arguments)
                                        }
                                ), t)
                        }
                        t._state = 1,
                            t._value = e,
                            c(t)
                    } catch (r) {
                        s(t, r)
                    }
                    var o, i
                }

                function s(t, e) {
                    t._state = 2,
                        t._value = e,
                        c(t)
                }

                function c(t) {
                    2 === t._state && 0 === t._deferreds.length && a._immediateFn(function () {
                        t._handled || a._unhandledRejectionFn(t._value)
                    });
                    for (var e = 0, n = t._deferreds.length; e < n; e++)
                        r(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function f(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null,
                        this.onRejected = "function" == typeof e ? e : null,
                        this.promise = n
                }

                function d(t, e) {
                    var n = !1;
                    try {
                        t(function (t) {
                            n || (n = !0,
                                u(e, t))
                        }, function (t) {
                            n || (n = !0,
                                s(e, t))
                        })
                    } catch (o) {
                        if (n)
                            return;
                        n = !0,
                            s(e, o)
                    }
                }

                a.prototype["catch"] = function (t) {
                    return this.then(null, t)
                }
                    ,
                    a.prototype.then = function (t, e) {
                        var n = new this.constructor(i);
                        return r(this, new f(t, e, n)),
                            n
                    }
                    ,
                    a.prototype["finally"] = t["a"],
                    a.all = function (e) {
                        return new a(function (i, r) {
                                if (!l(e))
                                    return r(new TypeError("Promise.all accepts an array"));
                                var a = Array.prototype.slice.call(e);
                                if (0 === a.length)
                                    return i([]);
                                var u = a.length;
                                for (var t = 0; t < a.length; t++)
                                    !function s(e, t) {
                                        try {
                                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                                var n = t.then;
                                                if ("function" == typeof n)
                                                    return void n.call(t, function (t) {
                                                        s(e, t)
                                                    }, r)
                                            }
                                            a[e] = t,
                                            0 == --u && i(a)
                                        } catch (o) {
                                            r(o)
                                        }
                                    }(t, a[t])
                            }
                        )
                    }
                    ,
                    a.allSettled = n["a"],
                    a.resolve = function (e) {
                        return e && "object" == typeof e && e.constructor === a ? e : new a(function (t) {
                                t(e)
                            }
                        )
                    }
                    ,
                    a.reject = function (n) {
                        return new a(function (t, e) {
                                e(n)
                            }
                        )
                    }
                    ,
                    a.race = function (i) {
                        return new a(function (t, e) {
                                if (!l(i))
                                    return e(new TypeError("Promise.race accepts an array"));
                                for (var n = 0, o = i.length; n < o; n++)
                                    a.resolve(i[n]).then(t, e)
                            }
                        )
                    }
                    ,
                    a._immediateFn = "function" == typeof e ? function (t) {
                            e(t)
                        }
                        : function (t) {
                            o(t, 0)
                        }
                    ,
                    a._unhandledRejectionFn = function (t) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                    }
                    ,
                    p["a"] = a
            }
        ).call(this, h(21).setImmediate)
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.getProxyUrl = e.shouldProxy = void 0;
        var o = function o(t) {
            return t && "string" == typeof t && 0 === t.indexOf("https://ssl.ptlogin2.qq.com/")
        };
        e.shouldProxy = o;
        var i = function i(t) {
            return o(t) ? t.replace("https://ssl.ptlogin2.qq.com/", "https://" + location.hostname + "/ssl/") : t
        };
        e.getProxyUrl = i
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var k = r(n(1))
            , S = r(n(14))
            , o = function (t) {
            if (t && t.__esModule)
                return t;
            if (null === t || "object" != typeof t && "function" != typeof t)
                return {
                    "default": t
                };
            var e = a();
            if (e && e.has(t))
                return e.get(t);
            var n, o = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (n in t) {
                var r;
                Object.prototype.hasOwnProperty.call(t, n) && ((r = i ? Object.getOwnPropertyDescriptor(t, n) : null) && (r.get || r.set) ? Object.defineProperty(o, n, r) : o[n] = t[n])
            }
            o["default"] = t,
            e && e.set(t, o);
            return o
        }(n(35))
            , C = n(18)
            , c = n(2)
            , l = n(64)
            , i = n(36);

        function a() {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap;
            return a = function a() {
                return t
            }
                ,
                t
        }

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t, e, n, o, i, r, a) {
            try {
                var u = t[r](a)
                    , s = u.value
            } catch (l) {
                return void n(l)
            }
            u.done ? e(s) : Promise.resolve(s).then(o, i)
        }

        function u(u) {
            return function () {
                var t = this
                    , a = arguments;
                return new Promise(function (e, n) {
                        var o = u.apply(t, a);

                        function i(t) {
                            s(o, e, n, i, r, "next", t)
                        }

                        function r(t) {
                            s(o, e, n, i, r, "throw", t)
                        }

                        i(undefined)
                    }
                )
            }
        }

        var g, f, T, d, p, h, q, m, _, y, v, w, b, x, E, L, P, O, N, j, I, A, M, D, Q, R, U, $, B, F, H, V, G, z, J, X,
            W, K, Y, Z, tt, et, nt, ot, it, rt, at, ut, st, lt, ct, ft, dt = window.pt, pt = (g = 5,
                f = [],
                T = [],
                d = [],
                p = [],
                h = 0,
                q = 9,
                m = '<a hidefocus=true draggable=false href="javascript:void(0);" tabindex="#tabindex#" uin="#uin#" type="#type#" onclick="pt.qlogin.imgClick(this);return false;" onfocus="pt.qlogin.imgFocus(this);" onblur="pt.qlogin.imgBlur(this);" onmouseover="pt.qlogin.imgMouseover(this);" onmousedown="pt.qlogin.imgMouseDowm(this)" onmouseup="pt.qlogin.imgMouseUp(this)" onmouseout="pt.qlogin.imgMouseUp(this)" class="face"  >          <img  id="img_#uin#" uin="#uin#" type="#type#" src="#src#"    onerror="pt.qlogin.imgErr(this);" />           <span id="mengban_#uin#"></span>          <span class="uin_menban"></span>          <span class="uin">#uin#</span>          <span id="img_out_#uin#" uin="#uin#" type="#type#"  class="img_out"  ></span>          <span id="nick_#uin#" class="#nick_class#">#nick#</span>          <span class="#vip_logo#"></span>          <span class="#onekey_logo#"></span>      </a><a  class="#return#" onclick="pt.qlogin.buildUnifiedQloginList();pt.plogin.hide_err();return false;">#return_text#</a>',
                _ = 1,
                y = {
                    "17": 2,
                    "19": 3,
                    "20": 2,
                    "21": 3,
                    "22": 3,
                    "23": 3,
                    "25": 3,
                    "32": 3,
                    "33": 3,
                    "34": 3,
                    "40": 2
                }[dt.ptui.style],
                v = {
                    "17": 240,
                    "19": 300,
                    "20": 240,
                    "21": 360,
                    "22": 360,
                    "23": 300,
                    "25": 300,
                    "32": 360,
                    "33": 300,
                    "34": 300,
                    "40": 240
                }[dt.ptui.style],
                w = 1,
                b = null,
                x = [4300, 4302, 4304, 4306, 4308],
                E = [4301, 4303, 4305, 4307, 4309],
                L = function L(t) {
                    var e, n, o, i;
                    1 == t && w <= 1 || 2 == t && _ <= w || (n = (e = 0,
                        k["default"])("qlogin_show").offsetWidth || v,
                        o = Math.ceil(n / 10),
                        i = 0,
                        1 == t ? --w <= 1 ? (k["default"].css.hide((0,
                            k["default"])("prePage")),
                            k["default"].css.show((0,
                                k["default"])("nextPage"))) : (k["default"].css.show((0,
                            k["default"])("nextPage")),
                            k["default"].css.show((0,
                                k["default"])("prePage"))) : (_ <= (w += 1) ? k["default"].css.hide((0,
                            k["default"])("nextPage")) : k["default"].css.show((0,
                            k["default"])("nextPage")),
                            k["default"].css.show((0,
                                k["default"])("prePage"))),
                        e = window.setInterval(function () {
                            (0,
                                k["default"])("qlogin_list").style.left = 1 == t ? 10 * i - w * n + "px" : (2 - w) * n - 10 * i + "px",
                            o < (i += 1) && window.clearInterval(e)
                        }, 1))
                }
                ,
                P = function P() {
                    if (T.length = 0,
                        !S["default"].isTim) {
                        if (k["default"].suportActive())
                            try {
                                var t = k["default"].activetxsso
                                    , e = t.CreateTXSSOData();
                                t.InitSSOFPTCtrl(0, e);
                                e = t.DoOperation(1, e);
                                if (null == e)
                                    return;
                                for (var n = e.GetArray("PTALIST"), o = n.GetSize(), i = 0; i < o; i++) {
                                    var r = n.GetData(i)
                                        , a = r.GetDWord("dwSSO_Account_dwAccountUin")
                                        , u = r.GetDWord("dwSSO_Account_dwAccountUin")
                                        , s = r.GetByte("cSSO_Account_cAccountType")
                                        , l = a;
                                    if (1 == s)
                                        try {
                                            l = r.GetArray("SSO_Account_AccountValueList").GetStr(0)
                                        } catch (b) {
                                        }
                                    var c = 0;
                                    try {
                                        c = r.GetWord("wSSO_Account_wFaceIndex")
                                    } catch (b) {
                                        c = 0
                                    }
                                    var f = "";
                                    try {
                                        f = r.GetStr("strSSO_Account_strNickName")
                                    } catch (b) {
                                        f = ""
                                    }
                                    for (var d = r.GetBuf("bufST_PTLOGIN"), p = "", h = d.GetSize(), g = 0; g < h; g++) {
                                        var m = d.GetAt(g).toString("16");
                                        1 == m.length && (m = "0" + m),
                                            p += m
                                    }
                                    var _ = {
                                        "uin": a,
                                        "name": l,
                                        "uinString": u,
                                        "type": s,
                                        "face": c,
                                        "nick": f,
                                        "flag": r.GetDWord("dwSSO_Account_dwUinFlag"),
                                        "key": p,
                                        "loginType": 2
                                    };
                                    T.push(_)
                                }
                                0 == o && (j(),
                                    k["default"].report.monitor(2129652, 1))
                            } catch (b) {
                                j(),
                                    k["default"].report.nlog("IE获取快速登录信息失败：" + b.message, "391626", .05)
                            }
                        else
                            try {
                                var y = k["default"].nptxsso
                                    , v = y.InitPVA()
                                    , w = 0;
                                if (0 != v) {
                                    w = y.GetPVACount();
                                    for (g = 0; g < w; g++) {
                                        _ = {
                                            "uin": y.GetUin(g),
                                            "name": y.GetAccountName(g),
                                            "uinString": y.GetUinString(g),
                                            "type": 0,
                                            "face": y.GetFaceIndex(g),
                                            "nick": y.GetNickname(g) || y.GetUinString(g),
                                            "flag": y.GetUinFlag(g),
                                            "key": y.GetST(g),
                                            "loginType": 2
                                        };
                                        T.push(_)
                                    }
                                    "function" == typeof y.GetKeyIndex && (q = y.GetKeyIndex())
                                }
                                v && 0 != w || (j(),
                                    k["default"].report.monitor(2129654, 1))
                            } catch (b) {
                                j(),
                                    k["default"].report.nlog("非IE获取快速登录信息失败：" + (b.message || b), "391627", .05)
                            }
                        T.length && S["default"].isMailLogin && S["default"].switchpage(C.LoginState.QLogin)
                    }
                }
                ,
                O = function O(t) {
                    for (var e = 0, n = T.length; e < n; e++) {
                        var o = T[e];
                        if (o.uinString == t)
                            return o
                    }
                    return null
                }
                ,
                N = function N(t, e, n, o, i) {
                    var r;
                    /linux/i.test(navigator.userAgent) && -1 == navigator.userAgent.indexOf("virtual machine 2 ") ? c.logger.info("need not to onekey login") : k["default"].cookie.get("pt_local_token") || (k["default"].cookie.set("pt_local_token", Math.random(), "ptlogin2." + dt.ptui.domain),
                        k["default"].cookie.get("pt_local_token")) ? (r = dt.ptui.isHttps ? E : x,
                        t = "https://localhost.ptlogin2." + dt.ptui.domain + ":[port]/" + t + "&r=" + Math.random() + "&pt_local_tk=" + k["default"].cookie.get("pt_local_token"),
                        ft(t, r, e, window[n], o, i)) : c.logger.warn("无法设置cookie，无法使用快速登录")
                }
                ,
                j = function j() {
                    0 != dt.ptui.enable_qlogin ? N("pt_get_uins?callback=ptui_getuins_CB", 300, "ptui_getuins_CB") : c.logger.info("need not to onekey login，enable_qlogin=".concat(dt.ptui.enable_qlogin))
                }
                ,
                I = function I() {
                    var t;
                    /windows/i.test(navigator.userAgent) && (t = "pc_querystatus?callback=ptui_pc_querystatus_CB&appid=ptlogin&subappid=" + dt.ptui.pt_3rd_aid,
                        N(t, 100, "ptui_pc_querystatus_CB", null, function () {
                            pt.callQQProtect({
                                "service": 104,
                                "action": 3,
                                "wparam": k["default"].str.json2str({
                                    "appid": "ptlogin",
                                    "subappid": dt.ptui.pt_3rd_aid,
                                    "qqnum": "123456",
                                    "msgid": 1
                                }),
                                "callbackName": "ptui_qqprotect_querystatus_CB"
                            })
                        }))
                }
                ,
                A = "0",
                M = function M(t, e, n, o) {
                    var i = t;
                    if (/windows/i.test(navigator.userAgent)) {
                        switch (parseInt(n, 10)) {
                            case 0:
                            case 1:
                                i = A;
                                break;
                            default:
                                A = i
                        }
                        if (pt.PCMgrSession) {
                            var r = "pc_action?callback=ptui_action_result_CB&appid=ptlogin&subappid=" + dt.ptui.pt_3rd_aid + "&operator=" + pt.PCMgrChecked + "&actionstring=" + encodeURIComponent(pt.PCMgrSession) + "&qqnum=" + encodeURIComponent(i) + "&loginType=" + e;
                            switch (parseInt(n, 10)) {
                                case 0:
                                    r += "&errcode=0";
                                    break;
                                case 1:
                                    r += "&errcode=1"
                            }
                            N(r, 100, "ptui_action_result_CB", o, o)
                        } else if (pt.PCMgrSession2) {
                            var a = {
                                "appid": "ptlogin",
                                "subappid": dt.ptui.pt_3rd_aid,
                                "qqnum": i,
                                "ActionString": pt.PCMgrSession2
                            };
                            switch (pt.PCMgrChecked) {
                                case 1:
                                case 3:
                                    a.check = 1;
                                    break;
                                default:
                                    a.check = 0
                            }
                            switch (parseInt(n, 10)) {
                                case 0:
                                    a.msgid = 3,
                                        a.result = 1;
                                    break;
                                case 1:
                                    a.msgid = 3,
                                        a.result = 0;
                                    break;
                                default:
                                    a.msgid = 2
                            }
                            pt.callQQProtect({
                                "service": 104,
                                "action": 1,
                                "callbackName": "ptui_qqprotect_result_CB",
                                "wparam": k["default"].str.json2str(a),
                                "callback": o,
                                "timeoutCallback": o
                            })
                        } else
                            "function" == typeof o && o()
                    } else
                        "function" == typeof o && o()
                }
                ,
                D = function D(t) {
                    t && (S["default"].showLoading(),
                        N("pt_get_st?clientuin=" + t, 8e3, "ptui_getst_CB", function (t) {
                            c.logger.info("pt_get_st data", t),
                                o.ptui_getst_CB(t)
                        }, function () {
                            S["default"].hideLoading(),
                                o.ptui_qlogin_CB("-1234", "", "快速登录失败，请检查QQ客户端是否打开。")
                        }),
                        o.ptui_getst_CB.submitUrl = B({
                            "uin": t,
                            "pt_local_tk": "{{hash_clientkey}}"
                        }))
                }
                ,
                Q = function Q(t, e) {
                    if (S["default"].isNewStyle) {
                        if (1 == e)
                            switch (t) {
                                case 1:
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_0")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_1")),
                                        k["default"].css.show((0,
                                            k["default"])("qlogin_tips_2")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_3")),
                                    (0,
                                        k["default"])("qlogin_tips_4") && k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_4"));
                                    break;
                                case 2:
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_0")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_1")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_2")),
                                        k["default"].css.show((0,
                                            k["default"])("qlogin_tips_3")),
                                    (0,
                                        k["default"])("qlogin_tips_4") && k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_4"));
                                    break;
                                case 3:
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_0")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_1")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_2")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_3")),
                                    (0,
                                        k["default"])("qlogin_tips_4") && k["default"].css.show((0,
                                        k["default"])("qlogin_tips_4"));
                                    break;
                                default:
                                    k["default"].css.show((0,
                                        k["default"])("qlogin_tips_0")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_1")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_2")),
                                        k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_3")),
                                    (0,
                                        k["default"])("qlogin_tips_4") && k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_4"))
                            }
                        else
                            k["default"].css.hide((0,
                                k["default"])("qlogin_tips_0")),
                                k["default"].css.show((0,
                                    k["default"])("qlogin_tips_1")),
                                k["default"].css.hide((0,
                                    k["default"])("qlogin_tips_2")),
                                k["default"].css.hide((0,
                                    k["default"])("qlogin_tips_3")),
                            (0,
                                k["default"])("qlogin_tips_4") && k["default"].css.hide((0,
                                k["default"])("qlogin_tips_4"));
                        t ? (k["default"].css.show((0,
                            k["default"])("title_1")),
                            k["default"].css.hide((0,
                                k["default"])("title_0"))) : (k["default"].css.hide((0,
                            k["default"])("title_1")),
                            k["default"].css.show((0,
                                k["default"])("title_0")))
                    }
                }
                ,
                R = function R(t) {
                    var e;
                    t ? (P(),
                        null == (e = O(t)) ? (c.logger.info("qloginObj is null, show error, uin=".concat(t)),
                            S["default"].show_err(dt.str.qlogin_expire),
                            k["default"].report.monitor(231544, 1)) : (c.logger.info("qloginObj exists, start submit, uin=".concat(t, " jump200=").concat(!0)),
                            e = B(e),
                            M(t, 2),
                            k["default"].http.loadScript(e),
                            S["default"].showLoading(),
                            window.clearTimeout(pt.__getstClock),
                            pt.__getstClock = window.setTimeout("pt.plogin.hideLoading();pt.plogin.showAssistant(0);", 1e4))) : c.logger.warn("uin is empty")
                }
                ,
                U = function U(t, e, n) {
                    var o = t.split("#")
                        , t = 0 < o[0].indexOf("?") ? "&" : "?";
                    return "?" == o[0].substr(o[0].length - 1, 1) && (t = ""),
                        o[1] ? o[1] = "#" + o[1] : o[1] = "",
                    o[0] + t + e + "=" + n + o[1]
                }
                ,
                $ = function $(t) {
                    var e = dt.ptui.s_url;
                    return 1 == dt.ptui.low_login && S["default"].low_login_enable && S["default"].isMailLogin && (e = U(e, "ss", 1)),
                    S["default"].isMailLogin && t && (e = U(e, "account", encodeURIComponent(t))),
                        e
                }
                ,
                B = function B(t) {
                    var e = (dt.ptui.isHttps ? "https://ssl.ptlogin2." : "http://ptlogin2.") + dt.ptui.domain + "/" + (dt.ptui.jumpname || "jump") + "?";
                    switch (dt.ptui.domain) {
                        case "tencent.com":
                        case "bkcloud.cc":
                        case "bkclouds.cc":
                            e = dt.ptui.isHttps ? "https" : "http://ptlogin2." + dt.ptui.domain + "/jump?"
                    }
                    return e += "clientuin=" + t.uin + "&keyindex=" + q + "&pt_aid=" + dt.ptui.appid + (dt.ptui.daid ? "&daid=" + dt.ptui.daid : "") + "&u1=" + encodeURIComponent($()),
                        "undefined" != typeof t.key ? e += "&clientkey=" + t.key : e += "&pt_local_tk=" + t.pt_local_tk,
                    1 == dt.ptui.low_login && S["default"].low_login_enable && !S["default"].isMailLogin && (e += "&low_login_enable=1&low_login_hour=" + S["default"].low_login_hour),
                    "0" != dt.ptui.csimc && dt.ptui.csimc && (e += "&csimc=" + dt.ptui.csimc + "&csnum=" + dt.ptui.csnum + "&authid=" + dt.ptui.authid),
                    "1" == dt.ptui.pt_qzone_sig && (e += "&pt_qzone_sig=1"),
                    "1" == dt.ptui.pt_light && (e += "&pt_light=1"),
                    dt.ptui.pt_3rd_aid && (e += "&pt_3rd_aid=" + dt.ptui.pt_3rd_aid),
                        e += "&ptopt=1",
                        e += "&style=" + dt.ptui.style,
                    pt.hasOneKeyList() && (e += "&has_onekey=1"),
                    dt.ptui.regmaster && (e += "&regmaster=" + dt.ptui.regmaster),
                    pt.QQProtectGUID && (e += "&pt_guid_sig=" + pt.QQProtectGUID),
                        e
                }
                ,
                F = function F() {
                    var t = H();
                    S["default"].redirect(dt.ptui.target, t),
                        S["default"].showLoading(),
                        c.logger.info("authLoginSubmit finished")
                }
                ,
                H = function H() {
                    var t = S["default"].authSubmitUrl;
                    return t += "&regmaster=" + dt.ptui.regmaster + "&aid=" + dt.ptui.appid + "&s_url=" + encodeURIComponent($()),
                    1 == dt.ptui.low_login && S["default"].low_login_enable && (t += "&low_login_enable=1&low_login_hour=" + S["default"].low_login_hour),
                    "1" == dt.ptui.pt_light && (t += "&pt_light=1"),
                    pt.hasOneKeyList() && (t += "&has_onekey=1"),
                    pt.QQProtectGUID && (t += "&pt_guid_sig=" + pt.QQProtectGUID),
                        t
                }
                ,
                V = function V(t, e) {
                    var n = "https://ssl.ptlogin2." + dt.ptui.domain + "/ptqrshow?qr_push_uin=" + t + "&type=1&qr_push=1&appid=" + dt.ptui.appid + "&t=" + Math.random() + "&ptlang=" + dt.ptui.lang;
                    dt.ptui.daid && (n += "&daid=" + dt.ptui.daid),
                    dt.ptui.pt_3rd_aid && (n += "&pt_3rd_aid=" + dt.ptui.pt_3rd_aid),
                        pt.__onekeyClock = setTimeout(function () {
                            S["default"].hideLoading(),
                                S["default"].showAssistant(0)
                        }, 5e3),
                        S["default"].showLoading(),
                        k["default"].http.loadScript(n),
                        c.logger.info("推送手机授权到服务端 uin=".concat(t, " appid=").concat(dt.ptui.appid, " daid=").concat(dt.ptui.daid, " pt_3rd_aid=").concat(dt.ptui.pt_3rd_aid)),
                        pt.__onekeyUin = t,
                        pt.__onekeyFirst = !!e
                }
                ,
                G = function G(t) {
                    return t.onerror = null,
                    t.src != S["default"].dftImg && (t.src = S["default"].dftImg),
                        !1
                }
                ,
                z = function z(t) {
                    var e = parseInt(t.getAttribute("type"), 10)
                        , n = t.getAttribute("uin");
                    switch (c.logger.info("点击快速登录头像 uin=".concat(n, " type=").concat(e)),
                        e) {
                        case 1:
                            pt.reportPath(n, 2),
                                F();
                            break;
                        case 2:
                            R(n),
                                pt.reportPath(n, 1);
                            break;
                        case 4:
                            D(n),
                                pt.reportPath(n, 1);
                            break;
                        case g:
                            V(n, !0),
                                pt.reportPath(n, 4)
                    }
                }
                ,
                J = function J(t) {
                    !t || (t = t.getAttribute("uin")) && ((0,
                        k["default"])("img_out_" + t).className = "img_out_focus")
                }
                ,
                X = function X(t) {
                    !t || (t = t.getAttribute("uin")) && ((0,
                        k["default"])("img_out_" + t).className = "img_out")
                }
                ,
                W = function W(t) {
                    t && (b != t && (X(b),
                        b = t),
                        J(t))
                }
                ,
                K = function K(t) {
                    t && (t = t.getAttribute("uin"),
                    (t = (0,
                        k["default"])("mengban_" + t)) && (t.className = "face_mengban"))
                }
                ,
                Y = function Y(t) {
                    t && (t = t.getAttribute("uin"),
                    (t = (0,
                        k["default"])("mengban_" + t)) && (t.className = ""))
                }
                ,
                Z = function Z() {
                    var t = (0,
                        k["default"])("qlogin_list").getElementsByTagName("a");
                    0 < t.length && (b = t[0])
                }
                ,
                tt = function tt() {
                    try {
                        b.focus()
                    } catch (t) {
                    }
                }
                ,
                et = function et() {
                    var t = (0,
                        k["default"])("prePage")
                        , e = (0,
                        k["default"])("nextPage");
                    t && k["default"].e.add(t, "click", function () {
                        L(1)
                    }),
                    e && k["default"].e.add(e, "click", function () {
                        L(2)
                    });
                    for (var n = document.getElementsByClassName("guanjia_checkbox"), o = 0; o < n.length; ++o)
                        k["default"].e.add(n[o], "change", function (t) {
                            pt.PCMgrChecked = t.target.checked;
                            for (var e = 0; e < n.length; ++e)
                                n[e].checked = pt.PCMgrChecked
                        })
                }
                ,
                nt = function nt() {
                    for (var t = p.length, e = 0; e < t; e++)
                        p[e].uinString && (p[e].uinString in i.headerCache ? i.headerCache.update(p[e].uinString) : k["default"].http.loadScript((dt.ptui.isHttps ? "https://ssl.ptlogin2." : "http://ptlogin2.") + dt.ptui.domain + "/getface?appid=" + dt.ptui.appid + "&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + p[e].uinString + "&r=" + Math.random()))
                }
                ,
                ot = function ot() {
                    et(),
                        c.logger.info("qloginInited"),
                        setTimeout(function () {
                            k["default"].report.monitor(492804, .05)
                        }, 0)
                }
                ,
                it = function it() {
                    c.logger.log("removeAllChildrenExceptQRCode child length is=", (0,
                        k["default"])("qlogin_list").childNodes.length);
                    for (var t = (0,
                        k["default"])("qlogin_list").childNodes, e = 0; e < t.length; e++) {
                        var n = t[e];
                        "qr_area" !== n.id && (n.parentNode.removeChild(n),
                            --e)
                    }
                    c.logger.log("after remove, child length is =", (0,
                        k["default"])("qlogin_list").childNodes.length)
                }
                ,
                at = function at(t, e) {
                    for (var n, o = 0; o < e; o++)
                        3 == t[o].loginType && (n = (0,
                            k["default"])("qr_area"),
                            1 == e ? (n && ((0,
                                k["default"])("qr_area").className = "qr_0"),
                            "1033" == dt.ptui.lang && ((0,
                                k["default"])("qlogin_show").style.height = (0,
                                k["default"])("qlogin_show").offsetHeight + 10 + "px")) : n && ((0,
                                k["default"])("qr_area").className = "qr_1"))
                }
                ,
                ut = function ut(t, e, n) {
                    for (var o = document.createDocumentFragment(), i = (0,
                        k["default"])("qlogin_list"), r = 0; r < e; r++) {
                        var a = t[r]
                            , u = function (t) {
                            var e = k["default"].str.encodeHtml(t.uinString + "")
                                , n = k["default"].str.encodeHtml(t.nick);
                            "" == k["default"].str.trim(t.nick) && (n = e);
                            var o = t.flag;
                            return {
                                "uin": e,
                                "nick": n,
                                "flag": o,
                                "vipFlag": 4 == (4 & o),
                                "onekeyFlag": t.loginType == g,
                                "userAvatar": S["default"].dftImg,
                                "loginType": t.loginType
                            }
                        }(a)
                            , s = u.uin
                            , l = u.nick
                            , c = u.vipFlag
                            , f = u.onekeyFlag
                            , d = u.userAvatar;
                        if (3 != u.loginType) {
                            d = m.replace(/#uin#/g, s).replace(/#nick#/g, k["default"].str.trim(l) || s).replace(/#nick_class#/, c ? "nick red" : "nick").replace(/#vip_logo#/, c ? "vip_logo" : "").replace(/#onekey_logo#/, f ? "onekey_logo" : "").replace(/#type#/g, a.loginType).replace(/#src#/g, d).replace(/#tabindex#/, r + 1).replace(/#class#/g, 1 == a.loginType ? "auth" : "hide").replace(/#return#/g, 3 == n ? "return" : "hide").replace(/#return_text#/g, dt.str.onekey_return),
                                a = document.createElement("div");
                            a.innerHTML = d;
                            for (var p = a.childNodes, h = 0; h < p.length; h++)
                                o.appendChild(p[h])
                        }
                    }
                    i.appendChild(o)
                }
                ,
                st = function st(i) {
                    c.logger.log("buildQloginDom，caller=".concat((0,
                        c.getCallerName)(3)));
                    var r = h
                        , a = p;
                    if (c.logger.log("buildQloginDom type=".concat(r, " list=").concat(a)),
                    S["default"].loginState == C.LoginState.QLogin) {
                        var u = (0,
                            k["default"])("qlogin_list")
                            , t = (0,
                            k["default"])("qr_area");
                        it(),
                            e = t,
                            3 == r ? k["default"].css.hide(e) : e.style.display = "";
                        var e, s = (t = a,
                            e = 5,
                            !S["default"].isNewStyle && t.length > e ? e : t.length);
                        if (0 == s)
                            return c.logger.info("没有获取到快速登录的账号，切回普通登录"),
                                void S["default"].switchpage(C.LoginState.PLogin, !0);
                        for (var n = 0; n < (r ? 1 : a.length); n++)
                            4 != a[n].loginType && 2 != a[n].loginType || (pt.hasBuildQlogin = !0);
                        S["default"].isNewStyle ? Q(r, s) : S["default"].isNewQr && (1 == s ? ((0,
                            k["default"])("qlogin_tips") && k["default"].css.hide((0,
                            k["default"])("qlogin_tips")),
                            (0,
                                k["default"])("qlogin_show").style.top = "25px") : ((0,
                            k["default"])("qlogin_tips") && k["default"].css.show((0,
                            k["default"])("qlogin_tips")),
                            (0,
                                k["default"])("qlogin_show").style.top = "")),
                            at(a, s),
                            ut(a, s, r),
                            setTimeout(function () {
                                var t, e = (0,
                                    k["default"])("qlogin_show").offsetWidth || v, n = S["default"].isMailLogin ? 93 : 100;
                                S["default"].isNewStyle && (y = 3 != r && 1 == s ? 3 : Math.floor(e / n)),
                                    _ = Math.ceil(s / y),
                                S["default"].isNewStyle && (t = (0,
                                    k["default"])("qlogin_show"),
                                    e = 3 != r && 1 == s ? 3 * n : y * n,
                                    t.style.width = e + "px",
                                    t.style.left = "50%",
                                    t.style.marginLeft = -50 * y + "px"),
                                    2 <= _ ? k["default"].css.show((0,
                                        k["default"])("nextPage")) : (k["default"].css.hide((0,
                                        k["default"])("prePage")),
                                        k["default"].css.hide((0,
                                            k["default"])("nextPage"))),
                                    w = 1,
                                    (0,
                                        k["default"])("qlogin_list").style.left = "",
                                    n = S["default"].isNewStyle ? 1 == _ ? e : e / y * s : 1 == _ ? e : s * n,
                                    u.style.width = n + "px",
                                S["default"].isMailLogin && (u.style.width = n + 14 + "px");
                                for (var o = 0; o < s; o++)
                                    if (3 == a[o].loginType) {
                                        c.logger.info("start qrlogin, uIndex==".concat(o)),
                                            S["default"].begin_qrlogin();
                                        break
                                    }
                                setTimeout(function () {
                                    "function" == typeof i && i()
                                }, 0)
                            }, 0),
                            Z(),
                            tt(),
                            nt(),
                            S["default"].resetQrTips()
                    } else
                        c.logger.log("plogin.loginState != LoginState.QLogin, exit")
                }
                ,
                lt = function lt(t, e, n, o, i, r) {
                    var a = 0
                        , u = function u() {
                        clearInterval(l),
                        "function" == typeof i && i()
                    }
                        , s = function s() {
                        if (a >= e.length)
                            return clearInterval(l),
                            o.called || "function" != typeof r || r(),
                                void c.logger.info("尝试完所有端口，都失败了 url=".concat(t, " ports="), e);
                        k["default"].http.loadScript(t.replace("[port]", e[a]), u),
                            a += 1
                    };
                    o.called = !1;
                    var l = setInterval(s, n);
                    s()
                }
                ,
                rt = u(regeneratorRuntime.mark(function ht(e, n, o, i, r) {
                    var a, u, s;
                    return regeneratorRuntime.wrap(function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    c.logger.info("loadLocalAsync Started"),
                                        a = 0;
                                case 2:
                                    if (a < n.length)
                                        return u = (0,
                                            l.jsonp)(e.replace("[port]", n[a]).replace(/&callback=[_\w]+&/gi, "&"), {
                                            "timeout": o
                                        }),
                                            t.next = 6,
                                            u.promise["catch"](function (t) {
                                                return {
                                                    "err": t
                                                }
                                            });
                                    t.next = 30;
                                    break;
                                case 6:
                                    if (!(s = t.sent).err) {
                                        t.next = 20;
                                        break
                                    }
                                    if ("Error" === s.err.message)
                                        return c.logger.info("port=".concat(n[a], " onError try next")),
                                            t.abrupt("continue", 27);
                                    t.next = 13;
                                    break;
                                case 13:
                                    if ("Timeout" === s.err.message)
                                        return c.logger.info("timeout stop trying"),
                                        r && r(),
                                            t.abrupt("break", 30);
                                    t.next = 19;
                                    break;
                                case 19:
                                    throw s.err;
                                case 20:
                                    if (c.logger.info("responseData:", s),
                                    "array" == typeof s || "object" == typeof s)
                                        return i && i(s),
                                            t.abrupt("break", 30);
                                    t.next = 26;
                                    break;
                                case 26:
                                    throw new Error("unknown response data type");
                                case 27:
                                    a++,
                                        t.next = 2;
                                    break;
                                case 30:
                                    c.logger.info("loadLocalAsync Ended");
                                case 31:
                                case "end":
                                    return t.stop()
                            }
                    }, ht)
                })),
                ct = function ct(t, e, n, o, i) {
                    return rt.apply(this, arguments)
                }
                ,
                ft = function ft(t, e, n, o, i, r) {
                    -1 < t.indexOf("/pt_get_st?") ? ct(t, e, n, i, r) : lt(t, e, n, o, i, r)
                }
                ,
                ot(),
                {
                    "hasBuildQlogin": !1,
                    "imgClick": z,
                    "imgFocus": J,
                    "imgBlur": X,
                    "imgMouseover": W,
                    "imgMouseDowm": K,
                    "imgMouseUp": Y,
                    "imgErr": G,
                    "focusHeader": tt,
                    "authLoginSubmit": F,
                    "__getstClock": 0,
                    "__onekeyClock": 0,
                    "__onekeyUin": 0,
                    "__onekeyFirst": !0,
                    "getSurl": $,
                    "pcsvrQloginSubmit": D,
                    "PCSvrQlogin": 4,
                    "OneKeyPush": g,
                    "onekeyPush": V,
                    "setPCSvrQloginList": function (t) {
                        T = t
                    },
                    "setOneKeyList": function (t) {
                        d = t
                    },
                    "hasOneKeyList": function () {
                        return !!d.length
                    },
                    "buildUnifiedQloginList": function (t, e) {
                        c.logger.log("start buildUnifiedQloginList，caller=".concat((0,
                            c.getCallerName)(3))),
                            h = void 0 === t ? 0 : t;
                        var n, o = [], i = {};
                        if (f.length = 0,
                            c.logger.log("buildUnifiedQloginList init status type=".concat(t, " uin=").concat(e, " list.length=").concat(o.length, " plogin.isNewQr=").concat(S["default"].isNewQr, " clientUinList=").concat(k["default"].str.json2str(T), " onekeyUinList=").concat(k["default"].str.json2str(d))),
                        S["default"].isNewQr && o.push({
                            "loginType": 3
                        }),
                        1 == t || 2 == t)
                            return c.logger.info("type=".concat(t, "，清空qloginBuildList")),
                                p = o,
                                void st();
                        if (S["default"].authUin && "0" == dt.ptui.auth_mode && "" == dt.ptui.regmaster && "1" != dt.ptui.noAuth && !S["default"].isTim && (c.logger.info("authUin=".concat(S["default"].authUin, " auth_mode=").concat(dt.ptui.auth_mode, " regmaster=").concat(dt.ptui.regmaster, " noAuth=").concat(dt.ptui.noAuth, " plogin.isTim=").concat(S["default"].isTim)),
                            n = {
                                "name": S["default"].authUin,
                                "uinString": S["default"].authUin,
                                "nick": k["default"].str.utf8ToUincode(k["default"].cookie.get("ptnick_" + S["default"].authUin)) || S["default"].authUin,
                                "loginType": 1
                            },
                            o.push(n),
                            i[n.name] = n,
                            f.push(n)),
                        "1" == dt.ptui.enable_qlogin && !S["default"].isTim)
                            for (var r in T)
                                !Object.prototype.hasOwnProperty.call(T, r) || i[T[r].name] || i[T[r].uinString] || (o.push(T[r]),
                                    i[T[r].uinString] = T[r],
                                    f.push(T[r]));
                        if ("1" == dt.ptui.enable_qlogin && !S["default"].isTim)
                            for (var r in d)
                                !Object.prototype.hasOwnProperty.call(d, r) || i[d[r].name] || i[d[r].uinString] || (o.push(d[r]),
                                    i[d[r].uinString] = d[r],
                                    f.push(d[r]));
                        3 == t && i[e] && (o.length = 0,
                            o.push(i[e])),
                            c.logger.info("before buildQloginDom, list=".concat(k["default"].str.json2str(o))),
                            p = o,
                            st()
                    },
                    "buildQloginDom": st,
                    "fetchQloginList": P,
                    "QQProtectSession": "",
                    "QQProtectPortList": [9410, 16873],
                    "QQProtectGUID": "",
                    "callQQProtect": function (t) {
                        if (/windows/i.test(navigator.userAgent)) {
                            var e = k["default"].cookie.get("_qpsvr_localtk");
                            if (e || k["default"].cookie.set("_qpsvr_localtk", Math.random(), "qq.com"),
                                e = k["default"].cookie.get("_qpsvr_localtk")) {
                                var n = t.timeout || 200
                                    , o = t.wparam || ""
                                    , i = t.lparam || "";
                                switch (parseInt(t.service, 10)) {
                                    case 103:
                                        var r = 1
                                            , a = pt.QQProtectSession;
                                        break;
                                    case 104:
                                    default:
                                        r = 0,
                                            a = ""
                                }
                                i = "https://localhost.sec.qq.com:[port]/?cmd=101&service=" + encodeURIComponent(t.service) + "&action=" + encodeURIComponent(t.action) + "&timeout=5000&_tk=" + encodeURIComponent(e) + "&encrypt=" + r + "&_ts=" + (new Date).getTime() + "&callback=" + encodeURIComponent(t.callbackName) + "&wparam=" + encodeURIComponent(o) + "&lparam=" + encodeURIComponent(i) + "&session=" + encodeURIComponent(a);
                                ft(i, [9410, 16873], n, window[t.callbackName], t.callback, t.timeoutCallback)
                            }
                        }
                    },
                    "fetchOnekeyListByGUID": function (t) {
                        if (t)
                            var e = "https://ssl.ptlogin2." + dt.ptui.domain + "/pt_fetch_dev_uin?r=" + Math.random() + "&pt_guid_sig=" + t;
                        else {
                            t = k["default"].cookie.get("pt_guid_sig");
                            if (!t)
                                return;
                            e = "https://ssl.ptlogin2." + dt.ptui.domain + "/pt_fetch_dev_uin?r=" + Math.random() + "&pt_guid_token=" + k["default"].str.hash33(t)
                        }
                        k["default"].http.loadScript(e)
                    },
                    "fetchOnekeyList": function () {
                        if (S["default"].isNewStyle && !S["default"].isTim && "0" != dt.ptui.enable_qlogin)
                            return navigator.userAgent.match(/Windows/) ? void pt.callQQProtect({
                                "service": 1,
                                "callbackName": "pt_qqprotect_version",
                                "timeoutCallback": function () {
                                    pt.fetchOnekeyListByGUID(),
                                        k["default"].report.monitor(2732844)
                                }
                            }) : (c.logger.info("非windows没有Q盾，直接从GUID获取快速登录"),
                                pt.fetchOnekeyListByGUID())
                    },
                    "hasNoQlogin": function () {
                        return 0 == f.length
                    },
                    "detectPCMgr": I,
                    "reportPCMgr": M,
                    "PCMgrSession": "",
                    "PCMgrSession2": "",
                    "PCMgrChecked": 3,
                    "processPCMgrStatus": function (t, e, n) {
                        for (var o = document.getElementsByClassName("guanjia"), i = 0; i < o.length; ++i)
                            k["default"].css.show(o[i]);
                        for (var r = document.getElementsByClassName("guanjia_tips"), i = 0; i < r.length; ++i)
                            r[i].innerHTML = k["default"].str.encodeHtml(e);
                        switch (parseInt(t, 10)) {
                            case 0:
                                return;
                            case 1:
                                for (var a = document.getElementsByClassName("guanjia_logo"), i = 0; i < a.length; ++i)
                                    a[i].style.display = "inline";
                                for (i = 0; i < o.length; ++i) {
                                    o[i].style.opacity = 0,
                                        o[i].style.filter = "alpha(opacity=0)";
                                    var u = k["default"].css.getCurrentPixelStyle(o[i], "top");
                                    o[i].style.top = u + 10 + "px",
                                        k["default"].animate.animate2(o[i], {
                                            "top": u + "px"
                                        }, 5),
                                        k["default"].animate.fade(o[i], 100, 5)
                                }
                                break;
                            case 2:
                                for (var s = document.getElementsByClassName("guanjia_checkbox"), i = 0; i < s.length; ++i) {
                                    s[i].style.display = "inline";
                                    var l = "true" == n.toString().toLowerCase() || "1" == n;
                                    s[i].checked = l,
                                        pt.PCMgrChecked = l ? 1 : 2
                                }
                        }
                        for (var c = document.getElementsByClassName("bottom"), i = 0; i < c.length; ++i)
                            k["default"].css.addClass(c[i], "center")
                    },
                    "reportPath": function (t, e) {
                        for (var n = 0, o = 0, i = 0, r = 0, a = 0, u = 0; u < p.length; ++u) {
                            switch (p[u].loginType) {
                                case 1:
                                    o += 1;
                                    break;
                                case g:
                                    r += 1;
                                    break;
                                case 2:
                                case 4:
                                    i += 1
                            }
                            if (p[u].uinString == t)
                                switch (u < y && (a = 1),
                                    p[u].loginType) {
                                    case 1:
                                        n = 2;
                                        break;
                                    case g:
                                        n = 4;
                                        break;
                                    case 2:
                                    case 4:
                                        n = 1
                                }
                        }
                        k["default"].http.loadScript("//ui.ptlogin2.qq.com/cgi-bin/report?ct=2&path=" + e + "-" + n + "-" + a + "-" + o + "-" + i + "-" + r)
                    }
                });
        e["default"] = pt
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.LoginState = void 0;
        e.LoginState = {
            "PLogin": 1,
            "QLogin": 2,
            "OneKeyLogin": 3
        }
    }
    , function (t, e, n) {
        var o = function (a) {
            "use strict";
            var l, t = Object.prototype, s = t.hasOwnProperty, e = "function" == typeof Symbol ? Symbol : {},
                i = e.iterator || "@@iterator", n = e.asyncIterator || "@@asyncIterator",
                o = e.toStringTag || "@@toStringTag";

            function r(t, e, n) {
                return Object.defineProperty(t, e, {
                    "value": n,
                    "enumerable": !0,
                    "configurable": !0,
                    "writable": !0
                }),
                    t[e]
            }

            try {
                r({}, "")
            } catch (E) {
                r = function (t, e, n) {
                    return t[e] = n
                }
            }

            function u(t, e, n, o) {
                var r, a, u, s, e = e && e.prototype instanceof m ? e : m, e = Object.create(e.prototype),
                    o = new T(o || []);
                return e._invoke = (r = t,
                        a = n,
                        u = o,
                        s = f,
                        function (t, e) {
                            if (s === p)
                                throw new Error("Generator is already running");
                            if (s === h) {
                                if ("throw" === t)
                                    throw e;
                                return x()
                            }
                            for (u.method = t,
                                     u.arg = e; ;) {
                                var n = u.delegate;
                                if (n) {
                                    var o = function i(t, e) {
                                        var n = t.iterator[e.method];
                                        if (n === l) {
                                            if (e.delegate = null,
                                            "throw" === e.method) {
                                                if (t.iterator["return"] && (e.method = "return",
                                                    e.arg = l,
                                                    i(t, e),
                                                "throw" === e.method))
                                                    return g;
                                                e.method = "throw",
                                                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                                            }
                                            return g
                                        }
                                        n = c(n, t.iterator, e.arg);
                                        if ("throw" === n.type)
                                            return e.method = "throw",
                                                e.arg = n.arg,
                                                e.delegate = null,
                                                g;
                                        var n = n.arg;
                                        if (!n)
                                            return e.method = "throw",
                                                e.arg = new TypeError("iterator result is not an object"),
                                                e.delegate = null,
                                                g;
                                        {
                                            if (!n.done)
                                                return n;
                                            e[t.resultName] = n.value,
                                                e.next = t.nextLoc,
                                            "return" !== e.method && (e.method = "next",
                                                e.arg = l)
                                        }
                                        e.delegate = null;
                                        return g
                                    }(n, u);
                                    if (o) {
                                        if (o === g)
                                            continue;
                                        return o
                                    }
                                }
                                if ("next" === u.method)
                                    u.sent = u._sent = u.arg;
                                else if ("throw" === u.method) {
                                    if (s === f)
                                        throw s = h,
                                            u.arg;
                                    u.dispatchException(u.arg)
                                } else
                                    "return" === u.method && u.abrupt("return", u.arg);
                                s = p;
                                o = c(r, a, u);
                                if ("normal" === o.type) {
                                    if (s = u.done ? h : d,
                                    o.arg !== g)
                                        return {
                                            "value": o.arg,
                                            "done": u.done
                                        }
                                } else
                                    "throw" === o.type && (s = h,
                                        u.method = "throw",
                                        u.arg = o.arg)
                            }
                        }
                ),
                    e
            }

            function c(t, e, n) {
                try {
                    return {
                        "type": "normal",
                        "arg": t.call(e, n)
                    }
                } catch (E) {
                    return {
                        "type": "throw",
                        "arg": E
                    }
                }
            }

            a.wrap = u;
            var f = "suspendedStart"
                , d = "suspendedYield"
                , p = "executing"
                , h = "completed"
                , g = {};

            function m() {
            }

            function _() {
            }

            function y() {
            }

            var v = {};
            v[i] = function () {
                return this
            }
            ;
            e = Object.getPrototypeOf,
                e = e && e(e(q([])));
            e && e !== t && s.call(e, i) && (v = e);
            var w = y.prototype = m.prototype = Object.create(v);

            function b(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    r(t, e, function (t) {
                        return this._invoke(e, t)
                    })
                })
            }

            function k(a, u) {
                var e;
                this._invoke = function (n, o) {
                    function t() {
                        return new u(function (t, e) {
                                !function r(t, e, n, o) {
                                    t = c(a[t], a, e);
                                    if ("throw" !== t.type) {
                                        var i = t.arg
                                            , e = i.value;
                                        return e && "object" == typeof e && s.call(e, "__await") ? u.resolve(e.__await).then(function (t) {
                                            r("next", t, n, o)
                                        }, function (t) {
                                            r("throw", t, n, o)
                                        }) : u.resolve(e).then(function (t) {
                                            i.value = t,
                                                n(i)
                                        }, function (t) {
                                            return r("throw", t, n, o)
                                        })
                                    }
                                    o(t.arg)
                                }(n, o, t, e)
                            }
                        )
                    }

                    return e = e ? e.then(t, t) : t()
                }
            }

            function S(t) {
                var e = {
                    "tryLoc": t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
            }

            function C(t) {
                var e = t.completion || {};
                e.type = "normal",
                    delete e.arg,
                    t.completion = e
            }

            function T(t) {
                this.tryEntries = [{
                    "tryLoc": "root"
                }],
                    t.forEach(S, this),
                    this.reset(!0)
            }

            function q(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                            , o = function o() {
                            for (; ++n < t.length;)
                                if (s.call(t, n))
                                    return o.value = t[n],
                                        o.done = !1,
                                        o;
                            return o.value = l,
                                o.done = !0,
                                o
                        };
                        return o.next = o
                    }
                }
                return {
                    "next": x
                }
            }

            function x() {
                return {
                    "value": l,
                    "done": !0
                }
            }

            return ((_.prototype = w.constructor = y).constructor = _).displayName = r(y, o, "GeneratorFunction"),
                a.isGeneratorFunction = function (t) {
                    t = "function" == typeof t && t.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                a.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y,
                        r(t, o, "GeneratorFunction")),
                        t.prototype = Object.create(w),
                        t
                }
                ,
                a.awrap = function (t) {
                    return {
                        "__await": t
                    }
                }
                ,
                b(k.prototype),
                k.prototype[n] = function () {
                    return this
                }
                ,
                a.AsyncIterator = k,
                a.async = function (t, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var r = new k(u(t, e, n, o), i);
                    return a.isGeneratorFunction(e) ? r : r.next().then(function (t) {
                        return t.done ? t.value : r.next()
                    })
                }
                ,
                b(w),
                r(w, o, "Generator"),
                w[i] = function () {
                    return this
                }
                ,
                w.toString = function () {
                    return "[object Generator]"
                }
                ,
                a.keys = function (e) {
                    var t, n = [];
                    for (t in e)
                        n.push(t);
                    return n.reverse(),
                        function o() {
                            for (; n.length;) {
                                var t = n.pop();
                                if (t in e)
                                    return o.value = t,
                                        o.done = !1,
                                        o
                            }
                            return o.done = !0,
                                o
                        }
                }
                ,
                a.values = q,
                T.prototype = {
                    "constructor": T,
                    "reset": function (t) {
                        if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = l,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = l,
                            this.tryEntries.forEach(C),
                            !t)
                            for (var e in this)
                                "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = l)
                    },
                    "stop": function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    "dispatchException": function (n) {
                        if (this.done)
                            throw n;
                        var o = this;

                        function t(t, e) {
                            return r.type = "throw",
                                r.arg = n,
                                o.next = t,
                            e && (o.method = "next",
                                o.arg = l),
                                !!e
                        }

                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var i = this.tryEntries[e]
                                , r = i.completion;
                            if ("root" === i.tryLoc)
                                return t("end");
                            if (i.tryLoc <= this.prev) {
                                var a = s.call(i, "catchLoc")
                                    , u = s.call(i, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < i.catchLoc)
                                        return t(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return t(i.finallyLoc)
                                } else if (a) {
                                    if (this.prev < i.catchLoc)
                                        return t(i.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc)
                                        return t(i.finallyLoc)
                                }
                            }
                        }
                    },
                    "abrupt": function (t, e) {
                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && s.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var r = i ? i.completion : {};
                        return r.type = t,
                            r.arg = e,
                            i ? (this.method = "next",
                                this.next = i.finallyLoc,
                                g) : this.complete(r)
                    },
                    "complete": function (t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === t.type && e && (this.next = e),
                            g
                    },
                    "finish": function (t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                    C(n),
                                    g
                        }
                    },
                    "catch": function (t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var o, i = n.completion;
                                return "throw" === i.type && (o = i.arg,
                                    C(n)),
                                    o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    "delegateYield": function (t, e, n) {
                        return this.delegate = {
                            "iterator": q(t),
                            "resultName": e,
                            "nextLoc": n
                        },
                        "next" === this.method && (this.arg = l),
                            g
                    }
                },
                a
        }(t.exports);
        try {
            regeneratorRuntime = o
        } catch (i) {
            Function("r", "regeneratorRuntime = r")(o)
        }
    }
    , function (t, e, r) {
        "use strict";
        r.r(e),
            function (t) {
                var e = r(15)
                    , n = r(3)
                    , o = r(4)
                    , i = function () {
                    if ("undefined" != typeof self)
                        return self;
                    if ("undefined" != typeof window)
                        return window;
                    if (void 0 !== t)
                        return t;
                    throw new Error("unable to locate global object")
                }();
                "function" != typeof i["Promise"] ? i["Promise"] = e["a"] : i.Promise.prototype["finally"] ? i.Promise.allSettled || (i.Promise.allSettled = o["a"]) : i.Promise.prototype["finally"] = n["a"]
            }
                .call(this, r(0))
    }
    , function (t, i, r) {
        (function (t) {
                var e = void 0 !== t && t || "undefined" != typeof self && self || window
                    , n = Function.prototype.apply;

                function o(t, e) {
                    this._id = t,
                        this._clearFn = e
                }

                i.setTimeout = function () {
                    return new o(n.call(setTimeout, e, arguments), clearTimeout)
                }
                    ,
                    i.setInterval = function () {
                        return new o(n.call(setInterval, e, arguments), clearInterval)
                    }
                    ,
                    i.clearTimeout = i.clearInterval = function (t) {
                        t && t.close()
                    }
                    ,
                    o.prototype.unref = o.prototype.ref = function () {
                    }
                    ,
                    o.prototype.close = function () {
                        this._clearFn.call(e, this._id)
                    }
                    ,
                    i.enroll = function (t, e) {
                        clearTimeout(t._idleTimeoutId),
                            t._idleTimeout = e
                    }
                    ,
                    i.unenroll = function (t) {
                        clearTimeout(t._idleTimeoutId),
                            t._idleTimeout = -1
                    }
                    ,
                    i._unrefActive = i.active = function (t) {
                        clearTimeout(t._idleTimeoutId);
                        var e = t._idleTimeout;
                        0 <= e && (t._idleTimeoutId = setTimeout(function () {
                            t._onTimeout && t._onTimeout()
                        }, e))
                    }
                    ,
                    r(22),
                    i.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate,
                    i.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
            }
        ).call(this, r(0))
    }
    , function (t, e, n) {
        (function (t, h) {
                !function (n, o) {
                    "use strict";
                    var i, r, e, a, u, s, l, c, t, f;

                    function d(t) {
                        delete r[t]
                    }

                    function p(t) {
                        if (e)
                            setTimeout(p, 0, t);
                        else {
                            var n = r[t];
                            if (n) {
                                e = !0;
                                try {
                                    !function () {
                                        var t = n.callback
                                            , e = n.args;
                                        switch (e.length) {
                                            case 0:
                                                t();
                                                break;
                                            case 1:
                                                t(e[0]);
                                                break;
                                            case 2:
                                                t(e[0], e[1]);
                                                break;
                                            case 3:
                                                t(e[0], e[1], e[2]);
                                                break;
                                            default:
                                                t.apply(o, e)
                                        }
                                    }()
                                } finally {
                                    d(t),
                                        e = !1
                                }
                            }
                        }
                    }

                    n.setImmediate || (i = 1,
                        e = !(r = {}),
                        a = n.document,
                        f = (f = Object.getPrototypeOf && Object.getPrototypeOf(n)) && f.setTimeout ? f : n,
                        u = "[object process]" === {}.toString.call(n.process) ? function (t) {
                                h.nextTick(function () {
                                    p(t)
                                })
                            }
                            : function () {
                                if (n.postMessage && !n.importScripts) {
                                    var t = !0
                                        , e = n.onmessage;
                                    return n.onmessage = function () {
                                        t = !1
                                    }
                                        ,
                                        n.postMessage("", "*"),
                                        n.onmessage = e,
                                        t
                                }
                            }() ? (c = "setImmediate$" + Math.random() + "$",
                                    t = function (t) {
                                        t.source === n && "string" == typeof t.data && 0 === t.data.indexOf(c) && p(+t.data.slice(c.length))
                                    }
                                    ,
                                    n.addEventListener ? n.addEventListener("message", t, !1) : n.attachEvent("onmessage", t),
                                    function (t) {
                                        n.postMessage(c + t, "*")
                                    }
                            ) : n.MessageChannel ? ((l = new MessageChannel).port1.onmessage = function (t) {
                                    p(t.data)
                                }
                                    ,
                                    function (t) {
                                        l.port2.postMessage(t)
                                    }
                            ) : a && "onreadystatechange" in a.createElement("script") ? (s = a.documentElement,
                                    function (t) {
                                        var e = a.createElement("script");
                                        e.onreadystatechange = function () {
                                            p(t),
                                                e.onreadystatechange = null,
                                                s.removeChild(e),
                                                e = null
                                        }
                                            ,
                                            s.appendChild(e)
                                    }
                            ) : function (t) {
                                setTimeout(p, 0, t)
                            }
                        ,
                        f.setImmediate = function (t) {
                            "function" != typeof t && (t = new Function("" + t));
                            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)
                                e[n] = arguments[n + 1];
                            return t = {
                                "callback": t,
                                "args": e
                            },
                                r[i] = t,
                                u(i),
                                i++
                        }
                        ,
                        f.clearImmediate = d)
                }("undefined" == typeof self ? void 0 === t ? this : t : self)
            }
        ).call(this, n(0), n(23))
    }
    , function (t, e) {
        var n, o, t = t.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (n === setTimeout)
                return setTimeout(t, 0);
            if ((n === i || !n) && setTimeout)
                return n = setTimeout,
                    setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }

        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                n = i
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                o = r
            }
        }();
        var u, s = [], l = !1, c = -1;

        function f() {
            l && u && (l = !1,
                u.length ? s = u.concat(s) : c = -1,
            s.length && d())
        }

        function d() {
            if (!l) {
                var t = a(f);
                l = !0;
                for (var e = s.length; e;) {
                    for (u = s,
                             s = []; ++c < e;)
                        u && u[c].run();
                    c = -1,
                        e = s.length
                }
                u = null,
                    l = !1,
                    function (t) {
                        if (o === clearTimeout)
                            return clearTimeout(t);
                        if ((o === r || !o) && clearTimeout)
                            return o = clearTimeout,
                                clearTimeout(t);
                        try {
                            o(t)
                        } catch (e) {
                            try {
                                return o.call(null, t)
                            } catch (e) {
                                return o.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function p(t, e) {
            this.fun = t,
                this.array = e
        }

        function h() {
        }

        t.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            s.push(new p(t, e)),
            1 !== s.length || l || a(d)
        }
            ,
            p.prototype.run = function () {
                this.fun.apply(null, this.array)
            }
            ,
            t.title = "browser",
            t.browser = !0,
            t.env = {},
            t.argv = [],
            t.version = "",
            t.versions = {},
            t.on = h,
            t.addListener = h,
            t.once = h,
            t.off = h,
            t.removeListener = h,
            t.removeAllListeners = h,
            t.emit = h,
            t.prependListener = h,
            t.prependOnceListener = h,
            t.listeners = function (t) {
                return []
            }
            ,
            t.binding = function (t) {
                throw new Error("process.binding is not supported")
            }
            ,
            t.cwd = function () {
                return "/"
            }
            ,
            t.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }
            ,
            t.umask = function () {
                return 0
            }
    }
    , function (t, e, n) {
        "use strict";
        t.exports = function (t, e) {
            if (e = e.split(":")[0],
                !(t = +t))
                return !1;
            switch (e) {
                case "http":
                case "ws":
                    return 80 !== t;
                case "https":
                case "wss":
                    return 443 !== t;
                case "ftp":
                    return 21 !== t;
                case "gopher":
                    return 70 !== t;
                case "file":
                    return !1
            }
            return 0 !== t
        }
    }
    , function (t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;

        function a(t) {
            try {
                return decodeURIComponent(t.replace(/\+/g, " "))
            } catch (e) {
                return null
            }
        }

        function u(t) {
            try {
                return encodeURIComponent(t)
            } catch (e) {
                return null
            }
        }

        e.stringify = function (t, e) {
            var n, o, i = [];
            for (o in "string" != typeof (e = e || "") && (e = "?"),
                t)
                r.call(t, o) && ((n = t[o]) || null != n && !isNaN(n) || (n = ""),
                    o = u(o),
                    n = u(n),
                null !== o && null !== n && i.push(o + "=" + n));
            return i.length ? e + i.join("&") : ""
        }
            ,
            e.parse = function (t) {
                for (var e = /([^=?#&]+)=?([^&]*)/g, n = {}; i = e.exec(t);) {
                    var o = a(i[1])
                        , i = a(i[2]);
                    null === o || null === i || o in n || (n[o] = i)
                }
                return n
            }
    }
    , function (t, e, n) {
        (function (Or) {
                (function (t) {
                        "use strict";
                        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== Or ? Or : "undefined" != typeof self ? self : {}
                            , n = {
                            "exports": {}
                        };
                        !function () {
                            var t = function (a) {
                                var l, t = Object.prototype, s = t.hasOwnProperty,
                                    e = "function" == typeof Symbol ? Symbol : {}, i = e.iterator || "@@iterator",
                                    n = e.asyncIterator || "@@asyncIterator", o = e.toStringTag || "@@toStringTag";

                                function r(t, e, n) {
                                    return Object.defineProperty(t, e, {
                                        "value": n,
                                        "enumerable": !0,
                                        "configurable": !0,
                                        "writable": !0
                                    }),
                                        t[e]
                                }

                                try {
                                    r({}, "")
                                } catch (E) {
                                    r = function (t, e, n) {
                                        return t[e] = n
                                    }
                                }

                                function u(t, e, n, o) {
                                    var r, a, u, s, e = e && e.prototype instanceof m ? e : m,
                                        e = Object.create(e.prototype), o = new T(o || []);
                                    return e._invoke = (r = t,
                                            a = n,
                                            u = o,
                                            s = f,
                                            function (t, e) {
                                                if (s === p)
                                                    throw new Error("Generator is already running");
                                                if (s === h) {
                                                    if ("throw" === t)
                                                        throw e;
                                                    return x()
                                                }
                                                for (u.method = t,
                                                         u.arg = e; ;) {
                                                    var n = u.delegate;
                                                    if (n) {
                                                        var o = function i(t, e) {
                                                            var n = t.iterator[e.method];
                                                            if (n === l) {
                                                                if (e.delegate = null,
                                                                "throw" === e.method) {
                                                                    if (t.iterator["return"] && (e.method = "return",
                                                                        e.arg = l,
                                                                        i(t, e),
                                                                    "throw" === e.method))
                                                                        return g;
                                                                    e.method = "throw",
                                                                        e.arg = new TypeError("The iterator does not provide a 'throw' method")
                                                                }
                                                                return g
                                                            }
                                                            n = c(n, t.iterator, e.arg);
                                                            if ("throw" === n.type)
                                                                return e.method = "throw",
                                                                    e.arg = n.arg,
                                                                    e.delegate = null,
                                                                    g;
                                                            var n = n.arg;
                                                            if (!n)
                                                                return e.method = "throw",
                                                                    e.arg = new TypeError("iterator result is not an object"),
                                                                    e.delegate = null,
                                                                    g;
                                                            {
                                                                if (!n.done)
                                                                    return n;
                                                                e[t.resultName] = n.value,
                                                                    e.next = t.nextLoc,
                                                                "return" !== e.method && (e.method = "next",
                                                                    e.arg = l)
                                                            }
                                                            e.delegate = null;
                                                            return g
                                                        }(n, u);
                                                        if (o) {
                                                            if (o === g)
                                                                continue;
                                                            return o
                                                        }
                                                    }
                                                    if ("next" === u.method)
                                                        u.sent = u._sent = u.arg;
                                                    else if ("throw" === u.method) {
                                                        if (s === f)
                                                            throw s = h,
                                                                u.arg;
                                                        u.dispatchException(u.arg)
                                                    } else
                                                        "return" === u.method && u.abrupt("return", u.arg);
                                                    s = p;
                                                    o = c(r, a, u);
                                                    if ("normal" === o.type) {
                                                        if (s = u.done ? h : d,
                                                        o.arg !== g)
                                                            return {
                                                                "value": o.arg,
                                                                "done": u.done
                                                            }
                                                    } else
                                                        "throw" === o.type && (s = h,
                                                            u.method = "throw",
                                                            u.arg = o.arg)
                                                }
                                            }
                                    ),
                                        e
                                }

                                function c(t, e, n) {
                                    try {
                                        return {
                                            "type": "normal",
                                            "arg": t.call(e, n)
                                        }
                                    } catch (E) {
                                        return {
                                            "type": "throw",
                                            "arg": E
                                        }
                                    }
                                }

                                a.wrap = u;
                                var f = "suspendedStart"
                                    , d = "suspendedYield"
                                    , p = "executing"
                                    , h = "completed"
                                    , g = {};

                                function m() {
                                }

                                function _() {
                                }

                                function y() {
                                }

                                var v = {};
                                r(v, i, function () {
                                    return this
                                });
                                e = Object.getPrototypeOf,
                                    e = e && e(e(q([])));
                                e && e !== t && s.call(e, i) && (v = e);
                                var w = y.prototype = m.prototype = Object.create(v);

                                function b(t) {
                                    ["next", "throw", "return"].forEach(function (e) {
                                        r(t, e, function (t) {
                                            return this._invoke(e, t)
                                        })
                                    })
                                }

                                function k(a, u) {
                                    var e;
                                    this._invoke = function (n, o) {
                                        function t() {
                                            return new u(function (t, e) {
                                                    !function r(t, e, n, o) {
                                                        t = c(a[t], a, e);
                                                        if ("throw" !== t.type) {
                                                            var i = t.arg
                                                                , e = i.value;
                                                            return e && "object" == typeof e && s.call(e, "__await") ? u.resolve(e.__await).then(function (t) {
                                                                r("next", t, n, o)
                                                            }, function (t) {
                                                                r("throw", t, n, o)
                                                            }) : u.resolve(e).then(function (t) {
                                                                i.value = t,
                                                                    n(i)
                                                            }, function (t) {
                                                                return r("throw", t, n, o)
                                                            })
                                                        }
                                                        o(t.arg)
                                                    }(n, o, t, e)
                                                }
                                            )
                                        }

                                        return e = e ? e.then(t, t) : t()
                                    }
                                }

                                function S(t) {
                                    var e = {
                                        "tryLoc": t[0]
                                    };
                                    1 in t && (e.catchLoc = t[1]),
                                    2 in t && (e.finallyLoc = t[2],
                                        e.afterLoc = t[3]),
                                        this.tryEntries.push(e)
                                }

                                function C(t) {
                                    var e = t.completion || {};
                                    e.type = "normal",
                                        delete e.arg,
                                        t.completion = e
                                }

                                function T(t) {
                                    this.tryEntries = [{
                                        "tryLoc": "root"
                                    }],
                                        t.forEach(S, this),
                                        this.reset(!0)
                                }

                                function q(t) {
                                    if (t) {
                                        var e = t[i];
                                        if (e)
                                            return e.call(t);
                                        if ("function" == typeof t.next)
                                            return t;
                                        if (!isNaN(t.length)) {
                                            var n = -1
                                                , o = function o() {
                                                for (; ++n < t.length;)
                                                    if (s.call(t, n))
                                                        return o.value = t[n],
                                                            o.done = !1,
                                                            o;
                                                return o.value = l,
                                                    o.done = !0,
                                                    o
                                            };
                                            return o.next = o
                                        }
                                    }
                                    return {
                                        "next": x
                                    }
                                }

                                function x() {
                                    return {
                                        "value": l,
                                        "done": !0
                                    }
                                }

                                return r(w, "constructor", _.prototype = y),
                                    r(y, "constructor", _),
                                    _.displayName = r(y, o, "GeneratorFunction"),
                                    a.isGeneratorFunction = function (t) {
                                        t = "function" == typeof t && t.constructor;
                                        return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                                    }
                                    ,
                                    a.mark = function (t) {
                                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y,
                                            r(t, o, "GeneratorFunction")),
                                            t.prototype = Object.create(w),
                                            t
                                    }
                                    ,
                                    a.awrap = function (t) {
                                        return {
                                            "__await": t
                                        }
                                    }
                                    ,
                                    b(k.prototype),
                                    r(k.prototype, n, function () {
                                        return this
                                    }),
                                    a.AsyncIterator = k,
                                    a.async = function (t, e, n, o, i) {
                                        void 0 === i && (i = Promise);
                                        var r = new k(u(t, e, n, o), i);
                                        return a.isGeneratorFunction(e) ? r : r.next().then(function (t) {
                                            return t.done ? t.value : r.next()
                                        })
                                    }
                                    ,
                                    b(w),
                                    r(w, o, "Generator"),
                                    r(w, i, function () {
                                        return this
                                    }),
                                    r(w, "toString", function () {
                                        return "[object Generator]"
                                    }),
                                    a.keys = function (e) {
                                        var t, n = [];
                                        for (t in e)
                                            n.push(t);
                                        return n.reverse(),
                                            function o() {
                                                for (; n.length;) {
                                                    var t = n.pop();
                                                    if (t in e)
                                                        return o.value = t,
                                                            o.done = !1,
                                                            o
                                                }
                                                return o.done = !0,
                                                    o
                                            }
                                    }
                                    ,
                                    a.values = q,
                                    T.prototype = {
                                        "constructor": T,
                                        "reset": function (t) {
                                            if (this.prev = 0,
                                                this.next = 0,
                                                this.sent = this._sent = l,
                                                this.done = !1,
                                                this.delegate = null,
                                                this.method = "next",
                                                this.arg = l,
                                                this.tryEntries.forEach(C),
                                                !t)
                                                for (var e in this)
                                                    "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = l)
                                        },
                                        "stop": function () {
                                            this.done = !0;
                                            var t = this.tryEntries[0].completion;
                                            if ("throw" === t.type)
                                                throw t.arg;
                                            return this.rval
                                        },
                                        "dispatchException": function (n) {
                                            if (this.done)
                                                throw n;
                                            var o = this;

                                            function t(t, e) {
                                                return r.type = "throw",
                                                    r.arg = n,
                                                    o.next = t,
                                                e && (o.method = "next",
                                                    o.arg = l),
                                                    !!e
                                            }

                                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                                var i = this.tryEntries[e]
                                                    , r = i.completion;
                                                if ("root" === i.tryLoc)
                                                    return t("end");
                                                if (i.tryLoc <= this.prev) {
                                                    var a = s.call(i, "catchLoc")
                                                        , u = s.call(i, "finallyLoc");
                                                    if (a && u) {
                                                        if (this.prev < i.catchLoc)
                                                            return t(i.catchLoc, !0);
                                                        if (this.prev < i.finallyLoc)
                                                            return t(i.finallyLoc)
                                                    } else if (a) {
                                                        if (this.prev < i.catchLoc)
                                                            return t(i.catchLoc, !0)
                                                    } else {
                                                        if (!u)
                                                            throw new Error("try statement without catch or finally");
                                                        if (this.prev < i.finallyLoc)
                                                            return t(i.finallyLoc)
                                                    }
                                                }
                                            }
                                        },
                                        "abrupt": function (t, e) {
                                            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                                                var o = this.tryEntries[n];
                                                if (o.tryLoc <= this.prev && s.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                                    var i = o;
                                                    break
                                                }
                                            }
                                            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                                            var r = i ? i.completion : {};
                                            return r.type = t,
                                                r.arg = e,
                                                i ? (this.method = "next",
                                                    this.next = i.finallyLoc,
                                                    g) : this.complete(r)
                                        },
                                        "complete": function (t, e) {
                                            if ("throw" === t.type)
                                                throw t.arg;
                                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                                                this.method = "return",
                                                this.next = "end") : "normal" === t.type && e && (this.next = e),
                                                g
                                        },
                                        "finish": function (t) {
                                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                                var n = this.tryEntries[e];
                                                if (n.finallyLoc === t)
                                                    return this.complete(n.completion, n.afterLoc),
                                                        C(n),
                                                        g
                                            }
                                        },
                                        "catch": function (t) {
                                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                                var n = this.tryEntries[e];
                                                if (n.tryLoc === t) {
                                                    var o, i = n.completion;
                                                    return "throw" === i.type && (o = i.arg,
                                                        C(n)),
                                                        o
                                                }
                                            }
                                            throw new Error("illegal catch attempt")
                                        },
                                        "delegateYield": function (t, e, n) {
                                            return this.delegate = {
                                                "iterator": q(t),
                                                "resultName": e,
                                                "nextLoc": n
                                            },
                                            "next" === this.method && (this.arg = l),
                                                g
                                        }
                                    },
                                    a
                            }(n.exports);
                            try {
                                regeneratorRuntime = t
                            } catch (e) {
                                "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
                            }
                        }();
                        var o = n.exports
                            , i = function (t) {
                                return t && t.Math == Math && t
                            }
                            ,
                            r = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || function () {
                                return this
                            }() || Function("return this")()
                            , a = {
                                "exports": {}
                            }
                            , u = r
                            , s = Object.defineProperty
                            , l = function (t, e) {
                                try {
                                    s(u, t, {
                                        "value": e,
                                        "configurable": !0,
                                        "writable": !0
                                    })
                                } catch (n) {
                                    u[t] = e
                                }
                                return e
                            }
                            , c = "__core-js_shared__"
                            , f = r[c] || l(c, {})
                            , d = f;
                        (a.exports = function (t, e) {
                                return d[t] || (d[t] = e !== undefined ? e : {})
                            }
                        )("versions", []).push({
                            "version": "3.21.1",
                            "mode": "global",
                            "copyright": "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                            "license": "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
                            "source": "https://github.com/zloirock/core-js"
                        });
                        var p = function (t) {
                            try {
                                return !!t()
                            } catch (e) {
                                return !0
                            }
                        }
                            , h = !p(function () {
                            var t = function () {
                            }
                                .bind();
                            return "function" != typeof t || t.hasOwnProperty("prototype")
                        })
                            , g = h
                            , m = Function.prototype
                            , _ = m.bind
                            , y = m.call
                            , v = g && _.bind(y, y)
                            , w = g ? function (t) {
                                return t && v(t)
                            }
                            : function (t) {
                                return t && function () {
                                    return y.apply(t, arguments)
                                }
                            }
                            , b = r.TypeError
                            , k = function (t) {
                            if (t == undefined)
                                throw b("Can't call method on " + t);
                            return t
                        }
                            , S = k
                            , C = r.Object
                            , T = function (t) {
                            return C(S(t))
                        }
                            , q = w({}.hasOwnProperty)
                            , x = Object.hasOwn || function ti(t, e) {
                            return q(T(t), e)
                        }
                            , E = w
                            , L = 0
                            , P = Math.random()
                            , O = E(1..toString)
                            , N = function (t) {
                            return "Symbol(" + (t === undefined ? "" : t) + ")_" + O(++L + P, 36)
                        }
                            , j = function (t) {
                            return "function" == typeof t
                        }
                            , I = r
                            , A = j
                            , M = function (t, e) {
                            return arguments.length < 2 ? (n = I[t],
                                A(n) ? n : undefined) : I[t] && I[t][e];
                            var n
                        }
                            , D = M("navigator", "userAgent") || ""
                            , Q = D
                            , R = r.process
                            , U = r.Deno
                            , $ = R && R.versions || U && U.version
                            , B = $ && $.v8;
                        B && (St = 0 < (vt = B.split("."))[0] && vt[0] < 4 ? 1 : +(vt[0] + vt[1])),
                        !St && Q && (!(vt = Q.match(/Edge\/(\d+)/)) || 74 <= vt[1]) && (vt = Q.match(/Chrome\/(\d+)/)) && (St = +vt[1]);
                        var F = St
                            , H = F
                            , V = !!Object.getOwnPropertySymbols && !p(function () {
                            var t = Symbol();
                            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && H && H < 41
                        })
                            , G = V && !Symbol.sham && "symbol" == typeof Symbol.iterator
                            , z = r
                            , J = a.exports
                            , X = x
                            , W = N
                            , K = V
                            , Y = G
                            , Z = J("wks")
                            , tt = z.Symbol
                            , et = tt && tt["for"]
                            , nt = Y ? tt : tt && tt.withoutSetter || W
                            , ot = function (t) {
                            var e;
                            return X(Z, t) && (K || "string" == typeof Z[t]) || (e = "Symbol." + t,
                                K && X(tt, t) ? Z[t] = tt[t] : Z[t] = (Y && et ? et : nt)(e)),
                                Z[t]
                        }
                            , it = {};
                        it[ot("toStringTag")] = "z";
                        var rt = "[object z]" === String(it)
                            , i = {
                            "exports": {}
                        }
                            , e = !p(function () {
                            return 7 != Object.defineProperty({}, 1, {
                                "get": function () {
                                    return 7
                                }
                            })[1]
                        })
                            , c = {}
                            , at = j
                            , m = function (t) {
                            return "object" == typeof t ? null !== t : at(t)
                        }
                            , _ = m
                            , ut = r.document
                            , st = _(ut) && _(ut.createElement)
                            , g = function (t) {
                            return st ? ut.createElement(t) : {}
                        }
                            , lt = g
                            , E = !e && !p(function () {
                            return 7 != Object.defineProperty(lt("div"), "a", {
                                "get": function () {
                                    return 7
                                }
                            }).a
                        })
                            , R = e && p(function () {
                            return 42 != Object.defineProperty(function () {
                            }, "prototype", {
                                "value": 42,
                                "writable": !1
                            }).prototype
                        })
                            , ct = m
                            , ft = r.String
                            , dt = r.TypeError
                            , U = function (t) {
                            if (ct(t))
                                return t;
                            throw dt(ft(t) + " is not an object")
                        }
                            , pt = Function.prototype.call
                            , $ = h ? pt.bind(pt) : function () {
                            return pt.apply(pt, arguments)
                        }
                            , B = w({}.isPrototypeOf)
                            , ht = M
                            , gt = j
                            , mt = B
                            , _t = r.Object
                            , Q = G ? function (t) {
                                return "symbol" == typeof t
                            }
                            : function (t) {
                                var e = ht("Symbol");
                                return gt(e) && mt(e.prototype, _t(t))
                            }
                            , yt = r.String
                            , vt = function (t) {
                            try {
                                return yt(t)
                            } catch (e) {
                                return "Object"
                            }
                        }
                            , wt = j
                            , bt = vt
                            , kt = r.TypeError
                            , St = function (t) {
                            if (wt(t))
                                return t;
                            throw kt(bt(t) + " is not a function")
                        }
                            , Ct = St
                            , V = function (t, e) {
                            e = t[e];
                            return null == e ? undefined : Ct(e)
                        }
                            , Tt = $
                            , qt = j
                            , xt = m
                            , Et = r.TypeError
                            , Lt = $
                            , Pt = m
                            , Ot = Q
                            , Nt = V
                            , jt = function (t, e) {
                            var n, o;
                            if ("string" === e && qt(n = t.toString) && !xt(o = Tt(n, t)))
                                return o;
                            if (qt(n = t.valueOf) && !xt(o = Tt(n, t)))
                                return o;
                            if ("string" !== e && qt(n = t.toString) && !xt(o = Tt(n, t)))
                                return o;
                            throw Et("Can't convert object to primitive value")
                        }
                            , It = r.TypeError
                            , At = ot("toPrimitive")
                            , Mt = function (t, e) {
                            if (!Pt(t) || Ot(t))
                                return t;
                            var n = Nt(t, At);
                            if (n) {
                                if (e === undefined && (e = "default"),
                                    n = Lt(n, t, e),
                                !Pt(n) || Ot(n))
                                    return n;
                                throw It("Can't convert object to primitive value")
                            }
                            return e === undefined && (e = "number"),
                                jt(t, e)
                        }
                            , Dt = Q
                            , J = function (t) {
                            t = Mt(t, "string");
                            return Dt(t) ? t : t + ""
                        }
                            , Qt = E
                            , Rt = U
                            , Ut = J
                            , $t = r.TypeError
                            , Bt = Object.defineProperty
                            , Ft = Object.getOwnPropertyDescriptor
                            , Ht = "enumerable"
                            , Vt = "configurable"
                            , Gt = "writable";
                        c.f = e ? R ? function Qn(t, e, n) {
                                var o;
                                return Rt(t),
                                    e = Ut(e),
                                    Rt(n),
                                "function" == typeof t && "prototype" === e && "value" in n && Gt in n && !n[Gt] && ((o = Ft(t, e)) && o[Gt] && (t[e] = n.value,
                                    n = {
                                        "configurable": (Vt in n ? n : o)[Vt],
                                        "enumerable": (Ht in n ? n : o)[Ht],
                                        "writable": !1
                                    })),
                                    Bt(t, e, n)
                            }
                            : Bt : function Qn(t, e, n) {
                            if (Rt(t),
                                e = Ut(e),
                                Rt(n),
                                Qt)
                                try {
                                    return Bt(t, e, n)
                                } catch (o) {
                                }
                            if ("get" in n || "set" in n)
                                throw $t("Accessors not supported");
                            return "value" in n && (t[e] = n.value),
                                t
                        }
                        ;
                        var z = function (t, e) {
                            return {
                                "enumerable": !(1 & t),
                                "configurable": !(2 & t),
                                "writable": !(4 & t),
                                "value": e
                            }
                        }
                            , zt = c
                            , Jt = z
                            , W = e ? function (t, e, n) {
                                return zt.f(t, e, Jt(1, n))
                            }
                            : function (t, e, n) {
                                return t[e] = n,
                                    t
                            }
                            , it = j
                            , _ = f
                            , Xt = w(Function.toString);
                        it(_.inspectSource) || (_.inspectSource = function (t) {
                                return Xt(t)
                            }
                        );
                        var Wt, Kt, Yt, Zt, te, ee, ne, oe, G = _.inspectSource, Q = r.WeakMap,
                            R = j(Q) && /native code/.test(G(Q)), it = a.exports, ie = N, re = it("keys"), _ = {},
                            Q = w, ae = m, ue = W, se = x, a = function (t) {
                                return re[t] || (re[t] = ie(t))
                            }, N = _, le = "Object already initialized", ce = r.TypeError, it = r.WeakMap;
                        ne = R || f.state ? (Wt = f.state || (f.state = new it),
                                Kt = Q(Wt.get),
                                Yt = Q(Wt.has),
                                Zt = Q(Wt.set),
                                te = function (t, e) {
                                    if (Yt(Wt, t))
                                        throw new ce(le);
                                    return e.facade = t,
                                        Zt(Wt, t, e),
                                        e
                                }
                                ,
                                ee = function (t) {
                                    return Kt(Wt, t) || {}
                                }
                                ,
                                function (t) {
                                    return Yt(Wt, t)
                                }
                        ) : (N[oe = a("state")] = !0,
                                te = function (t, e) {
                                    if (se(t, oe))
                                        throw new ce(le);
                                    return e.facade = t,
                                        ue(t, oe, e),
                                        e
                                }
                                ,
                                ee = function (t) {
                                    return se(t, oe) ? t[oe] : {}
                                }
                                ,
                                function (t) {
                                    return se(t, oe)
                                }
                        );
                        var R = {
                            "set": te,
                            "get": ee,
                            "has": ne,
                            "enforce": function (t) {
                                return ne(t) ? ee(t) : te(t, {})
                            },
                            "getterFor": function (n) {
                                return function (t) {
                                    var e;
                                    if (!ae(t) || (e = ee(t)).type !== n)
                                        throw ce("Incompatible receiver, " + n + " required");
                                    return e
                                }
                            }
                        }
                            , f = e
                            , it = Function.prototype
                            , Q = f && Object.getOwnPropertyDescriptor
                            , N = x(it, "name")
                            , a = N && "something" === function () {
                        }
                            .name
                            , f = N && (!f || f && Q(it, "name").configurable)
                            , fe = r
                            , de = j
                            , pe = x
                            , he = W
                            , ge = l
                            , me = G
                            , _e = {
                            "EXISTS": N,
                            "PROPER": a,
                            "CONFIGURABLE": f
                        }.CONFIGURABLE
                            , ye = R.get
                            , ve = R.enforce
                            , we = String(String).split("String");
                        (i.exports = function (t, e, n, o) {
                                var i = !!o && !!o.unsafe
                                    , r = !!o && !!o.enumerable
                                    , a = !!o && !!o.noTargetGet
                                    , u = o && o.name !== undefined ? o.name : e;
                                de(n) && ("Symbol(" === String(u).slice(0, 7) && (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                                (!pe(n, "name") || _e && n.name !== u) && he(n, "name", u),
                                (o = ve(n)).source || (o.source = we.join("string" == typeof u ? u : ""))),
                                    t !== fe ? (i ? !a && t[e] && (r = !0) : delete t[e],
                                        r ? t[e] = n : he(t, e, n)) : r ? t[e] = n : ge(e, n)
                            }
                        )(Function.prototype, "toString", function Le() {
                            return de(this) && ye(this).source || me(this)
                        });
                        var Q = w
                            , be = Q({}.toString)
                            , ke = Q("".slice)
                            , it = function (t) {
                            return ke(be(t), 8, -1)
                        }
                            , N = r
                            , a = rt
                            , Se = j
                            , Ce = it
                            , Te = ot("toStringTag")
                            , qe = N.Object
                            , xe = "Arguments" == Ce(function () {
                            return arguments
                        }())
                            , f = a ? Ce : function (t) {
                            var e;
                            return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (t = function (t, e) {
                                try {
                                    return t[e]
                                } catch (n) {
                                }
                            }(e = qe(t), Te)) ? t : xe ? Ce(e) : "Object" == (t = Ce(e)) && Se(e.callee) ? "Arguments" : t
                        }
                            , Ee = f
                            , Q = rt ? {}.toString : function Le() {
                            return "[object " + Ee(this) + "]"
                        }
                            , N = i.exports
                            , Le = Q;
                        rt || N(Object.prototype, "toString", Le, {
                            "unsafe": !0
                        });
                        var a = {}
                            , Q = {}
                            , rt = {}.propertyIsEnumerable
                            , Pe = Object.getOwnPropertyDescriptor
                            , N = Pe && !rt.call({
                            "1": 2
                        }, 1);
                        Q.f = N ? function (t) {
                                t = Pe(this, t);
                                return !!t && t.enumerable
                            }
                            : rt;
                        var rt = p
                            , Oe = it
                            , Ne = r.Object
                            , je = w("".split)
                            , Ie = rt(function () {
                            return !Ne("z").propertyIsEnumerable(0)
                        }) ? function (t) {
                                return "String" == Oe(t) ? je(t, "") : Ne(t)
                            }
                            : Ne
                            , Ae = k
                            , k = function (t) {
                            return Ie(Ae(t))
                        }
                            , Me = $
                            , De = Q
                            , Qe = z
                            , Re = k
                            , Ue = J
                            , $e = x
                            , Be = E
                            , Fe = Object.getOwnPropertyDescriptor;
                        a.f = e ? Fe : function ki(t, e) {
                            if (t = Re(t),
                                e = Ue(e),
                                Be)
                                try {
                                    return Fe(t, e)
                                } catch (n) {
                                }
                            if ($e(t, e))
                                return Qe(!Me(De.f, t, e), t[e])
                        }
                        ;
                        var z = {}
                            , He = Math.ceil
                            , Ve = Math.floor
                            , J = function (t) {
                                t = +t;
                                return t != t || 0 == t ? 0 : (0 < t ? Ve : He)(t)
                            }
                            , Ge = J
                            , ze = Math.max
                            , Je = Math.min
                            , Xe = J
                            , We = Math.min
                            , Ke = function (t) {
                                return 0 < t ? We(Xe(t), 9007199254740991) : 0
                            }
                            , E = function (t) {
                                return Ke(t.length)
                            }
                            , Ye = k
                            , Ze = function (t, e) {
                                t = Ge(t);
                                return t < 0 ? ze(t + e, 0) : Je(t, e)
                            }
                            , tn = E
                            , J = function (u) {
                                return function (t, e, n) {
                                    var o, i = Ye(t), r = tn(i), a = Ze(n, r);
                                    if (u && e != e) {
                                        for (; a < r;)
                                            if ((o = i[a++]) != o)
                                                return !0
                                    } else
                                        for (; a < r; a++)
                                            if ((u || a in i) && i[a] === e)
                                                return u || a || 0;
                                    return !u && -1
                                }
                            }
                            , J = {
                                "includes": J(!0),
                                "indexOf": J(!1)
                            }
                            , en = x
                            , nn = k
                            , on = J.indexOf
                            , rn = _
                            , an = w([].push)
                            , un = function (t, e) {
                                var n, o = nn(t), i = 0, r = [];
                                for (n in o)
                                    !en(rn, n) && en(o, n) && an(r, n);
                                for (; e.length > i;)
                                    en(o, n = e[i++]) && (~on(r, n) || an(r, n));
                                return r
                            }
                            ,
                            sn = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
                        z.f = Object.getOwnPropertyNames || function (t) {
                            return un(t, sn)
                        }
                        ;
                        J = {};
                        J.f = Object.getOwnPropertySymbols;
                        var _ = M
                            , ln = z
                            , cn = J
                            , fn = U
                            , dn = w([].concat)
                            , _ = _("Reflect", "ownKeys") || function hn(t) {
                            var e = ln.f(fn(t))
                                , n = cn.f;
                            return n ? dn(e, n(t)) : e
                        }
                            , pn = x
                            , hn = _
                            , gn = a
                            , mn = c
                            , _n = p
                            , yn = j
                            , vn = /#|\.prototype\./
                            , _ = function (t, e) {
                            t = bn[wn(t)];
                            return t == Sn || t != kn && (yn(e) ? _n(e) : !!e)
                        }
                            , wn = _.normalize = function (t) {
                            return String(t).replace(vn, ".").toLowerCase()
                        }
                            , bn = _.data = {}
                            , kn = _.NATIVE = "N"
                            , Sn = _.POLYFILL = "P"
                            , _ = _
                            , Cn = r
                            , Tn = a.f
                            , qn = W
                            , xn = i.exports
                            , En = l
                            , Ln = function (t, e, n) {
                            for (var o = hn(e), i = mn.f, r = gn.f, a = 0; a < o.length; a++) {
                                var u = o[a];
                                pn(t, u) || n && pn(n, u) || i(t, u, r(e, u))
                            }
                        }
                            , Pn = _
                            , W = r.Promise
                            , On = i.exports
                            , Nn = j
                            , jn = r.String
                            , In = r.TypeError
                            , An = w
                            , Mn = U
                            , Dn = function (t) {
                            if ("object" == typeof t || Nn(t))
                                return t;
                            throw In("Can't set " + jn(t) + " as a prototype")
                        }
                            , l = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                            var n, o = !1, t = {};
                            try {
                                (n = An(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(t, []),
                                    o = t instanceof Array
                            } catch (e) {
                            }
                            return function Qi(t, e) {
                                return Mn(t),
                                    Dn(e),
                                    o ? n(t, e) : t.__proto__ = e,
                                    t
                            }
                        }() : undefined)
                            , Qn = c.f
                            , Rn = x
                            , Un = ot("toStringTag")
                            , $n = M
                            , Bn = c
                            , Fn = e
                            , Hn = ot("species")
                            , Vn = B
                            , Gn = r.TypeError
                            , zn = St
                            , Jn = h
                            , Xn = w(w.bind)
                            , c = function (t, e) {
                            return zn(t),
                                e === undefined ? t : Jn ? Xn(t, e) : function () {
                                    return t.apply(e, arguments)
                                }
                        }
                            , e = {}
                            , Wn = e
                            , Kn = ot("iterator")
                            , Yn = Array.prototype
                            , Zn = f
                            , to = V
                            , eo = e
                            , no = ot("iterator")
                            , e = function (t) {
                            if (t != undefined)
                                return to(t, no) || to(t, "@@iterator") || eo[Zn(t)]
                        }
                            , oo = $
                            , io = St
                            , ro = U
                            , ao = vt
                            , uo = e
                            , so = r.TypeError
                            , lo = $
                            , co = U
                            , fo = V
                            , po = c
                            , ho = $
                            , go = U
                            , mo = vt
                            , _o = function (t) {
                            return t !== undefined && (Wn.Array === t || Yn[Kn] === t)
                        }
                            , yo = E
                            , vo = B
                            , wo = function (t, e) {
                            e = arguments.length < 2 ? uo(t) : e;
                            if (io(e))
                                return ro(oo(e, t));
                            throw so(ao(t) + " is not iterable")
                        }
                            , bo = e
                            , ko = function (t, e, n) {
                            var o, i;
                            co(t);
                            try {
                                if (!(o = fo(t, "return"))) {
                                    if ("throw" === e)
                                        throw n;
                                    return n
                                }
                                o = lo(o, t)
                            } catch (r) {
                                i = !0,
                                    o = r
                            }
                            if ("throw" === e)
                                throw n;
                            if (i)
                                throw o;
                            return co(o),
                                n
                        }
                            , So = r.TypeError
                            , Co = function (t, e) {
                            this.stopped = t,
                                this.result = e
                        }
                            , To = Co.prototype
                            , qo = ot("iterator")
                            , xo = !1;
                        try {
                            var Eo = 0
                                , Lo = {
                                "next": function () {
                                    return {
                                        "done": !!Eo++
                                    }
                                },
                                "return": function () {
                                    xo = !0
                                }
                            };
                            Lo[qo] = function () {
                                return this
                            }
                                ,
                                Array.from(Lo, function () {
                                    throw 2
                                })
                        } catch (Pr) {
                        }
                        var E = w
                            , B = p
                            , Po = j
                            , Oo = f
                            , No = G
                            , jo = function () {
                        }
                            , Io = []
                            , Ao = M("Reflect", "construct")
                            , Mo = /^\s*(?:class|function)\b/
                            , Do = E(Mo.exec)
                            , Qo = !Mo.exec(jo)
                            , Ro = function Bo(t) {
                            if (!Po(t))
                                return !1;
                            try {
                                return Ao(jo, Io, t),
                                    !0
                            } catch (Pr) {
                                return !1
                            }
                        }
                            , e = function Bo(t) {
                            if (!Po(t))
                                return !1;
                            switch (Oo(t)) {
                                case "AsyncFunction":
                                case "GeneratorFunction":
                                case "AsyncGeneratorFunction":
                                    return !1
                            }
                            try {
                                return Qo || !!Do(Mo, No(t))
                            } catch (Pr) {
                                return !0
                            }
                        };
                        e.sham = !0;
                        var Uo, $o, Bo = !Ao || B(function () {
                                var t;
                                return Ro(Ro.call) || !Ro(Object) || !Ro(function () {
                                    t = !0
                                }) || t
                            }) ? e : Ro, Fo = vt, Ho = r.TypeError, Vo = U, Go = function (t) {
                                if (Bo(t))
                                    return t;
                                throw Ho(Fo(t) + " is not a constructor")
                            }, zo = ot("species"), f = Function.prototype, Jo = f.apply, Xo = f.call,
                            E = "object" == typeof Reflect && Reflect.apply || (h ? Xo.bind(Jo) : function () {
                                    return Xo.apply(Jo, arguments)
                                }
                            ), B = M("document", "documentElement"), e = w([].slice), Wo = r.TypeError,
                            vt = /(?:ipad|iphone|ipod).*applewebkit/i.test(D), f = "process" == it(r.process), Ko = r,
                            Yo = E, h = c, Zo = j, ti = x, w = p, ei = B, ni = e, oi = g, ii = function (t, e) {
                                if (t < e)
                                    throw Wo("Not enough arguments");
                                return t
                            }, it = vt, E = f, x = Ko.setImmediate, p = Ko.clearImmediate, ri = Ko.process,
                            ai = Ko.Dispatch, ui = Ko.Function, B = Ko.MessageChannel, si = Ko.String, li = 0, ci = {},
                            fi = "onreadystatechange";
                        try {
                            Uo = Ko.location
                        } catch (Pr) {
                        }
                        var di = function (t) {
                            var e;
                            ti(ci, t) && (e = ci[t],
                                delete ci[t],
                                e())
                        }
                            , pi = function (t) {
                            return function () {
                                di(t)
                            }
                        }
                            , e = function (t) {
                            di(t.data)
                        }
                            , g = function (t) {
                            Ko.postMessage(si(t), Uo.protocol + "//" + Uo.host)
                        };
                        x && p || (x = function (t) {
                                ii(arguments.length, 1);
                                var e = Zo(t) ? t : ui(t)
                                    , n = ni(arguments, 1);
                                return ci[++li] = function () {
                                    Yo(e, undefined, n)
                                }
                                    ,
                                    $o(li),
                                    li
                            }
                                ,
                                p = function (t) {
                                    delete ci[t]
                                }
                                ,
                                E ? $o = function (t) {
                                        ri.nextTick(pi(t))
                                    }
                                    : ai && ai.now ? $o = function (t) {
                                        ai.now(pi(t))
                                    }
                                    : B && !it ? (bi = (B = new B).port2,
                                        B.port1.onmessage = e,
                                        $o = h(bi.postMessage, bi)) : Ko.addEventListener && Zo(Ko.postMessage) && !Ko.importScripts && Uo && "file:" !== Uo.protocol && !w(g) ? ($o = g,
                                        Ko.addEventListener("message", e, !1)) : $o = fi in oi("script") ? function (t) {
                                            ei.appendChild(oi("script"))[fi] = function () {
                                                ei.removeChild(this),
                                                    di(t)
                                            }
                                        }
                                        : function (t) {
                                            setTimeout(pi(t), 0)
                                        }
                        );
                        var hi, gi, mi, _i, yi, vi, wi, bi = {
                                "set": x,
                                "clear": p
                            }, w = r, g = /ipad|iphone|ipod/i.test(D) && w.Pebble !== undefined,
                            e = /web0s(?!.*chrome)/i.test(D), x = r, p = c, ki = a.f, Si = bi.set, w = vt, D = g, c = e,
                            Ci = f, a = x.MutationObserver || x.WebKitMutationObserver, vt = x.document, Ti = x.process,
                            g = x.Promise, e = ki(x, "queueMicrotask"), e = e && e.value;
                        e || (hi = function () {
                            var t, e;
                            for (Ci && (t = Ti.domain) && t.exit(); gi;) {
                                e = gi.fn,
                                    gi = gi.next;
                                try {
                                    e()
                                } catch (Pr) {
                                    throw gi ? _i() : mi = undefined,
                                        Pr
                                }
                            }
                            mi = undefined,
                            t && t.enter()
                        }
                            ,
                            _i = w || Ci || c || !a || !vt ? !D && g && g.resolve ? ((D = g.resolve(undefined)).constructor = g,
                                    wi = p(D.then, D),
                                    function () {
                                        wi(hi)
                                    }
                            ) : Ci ? function () {
                                    Ti.nextTick(hi)
                                }
                                : (Si = p(Si, x),
                                        function () {
                                            Si(hi)
                                        }
                                ) : (yi = !0,
                                    vi = vt.createTextNode(""),
                                    new a(hi).observe(vi, {
                                        "characterData": !0
                                    }),
                                    function () {
                                        vi.data = yi = !yi
                                    }
                            ));
                        var x = e || function (t) {
                            t = {
                                "fn": t,
                                "next": undefined
                            };
                            mi && (mi.next = t),
                            gi || (gi = t,
                                _i()),
                                mi = t
                        }
                            , vt = {}
                            , qi = St
                            , xi = function (t) {
                            var n, o;
                            this.promise = new t(function (t, e) {
                                    if (n !== undefined || o !== undefined)
                                        throw TypeError("Bad Promise constructor");
                                    n = t,
                                        o = e
                                }
                            ),
                                this.resolve = qi(n),
                                this.reject = qi(o)
                        };
                        vt.f = function (t) {
                            return new xi(t)
                        }
                        ;
                        var Ei = U
                            , Li = m
                            , Pi = vt
                            , Oi = r
                            , a = function () {
                            this.head = null,
                                this.tail = null
                        };
                        a.prototype = {
                            "add": function (t) {
                                t = {
                                    "item": t,
                                    "next": null
                                };
                                this.head ? this.tail.next = t : this.head = t,
                                    this.tail = t
                            },
                            "get": function () {
                                var t = this.head;
                                if (t)
                                    return this.head = t.next,
                                    this.tail === t && (this.tail = null),
                                        t.item
                            }
                        };
                        var Ni, ji, Ii, Ai, e = "object" == typeof window, U = function (t, e) {
                                var n, o, i, r = t.target, a = t.global, u = t.stat,
                                    s = a ? Cn : u ? Cn[r] || En(r, {}) : (Cn[r] || {}).prototype;
                                if (s)
                                    for (n in e) {
                                        if (o = e[n],
                                            i = t.noTargetGet ? (i = Tn(s, n)) && i.value : s[n],
                                        !Pn(a ? n : r + (u ? "." : "#") + n, t.forced) && i !== undefined) {
                                            if (typeof o == typeof i)
                                                continue;
                                            Ln(o, i)
                                        }
                                        (t.sham || i && i.sham) && qn(o, "sham", !0),
                                            xn(s, n, o, t)
                                    }
                            }, Mi = r, r = M, Di = $, M = W, $ = i.exports, W = function (t, e, n) {
                                for (var o in e)
                                    On(t, o, e[o], n);
                                return t
                            }, Qi = l, i = function (t, e, n) {
                                t && !n && (t = t.prototype),
                                t && !Rn(t, Un) && Qn(t, Un, {
                                    "configurable": !0,
                                    "value": e
                                })
                            }, l = function (t) {
                                var e = $n(t)
                                    , t = Bn.f;
                                Fn && e && !e[Hn] && t(e, Hn, {
                                    "configurable": !0,
                                    "get": function () {
                                        return this
                                    }
                                })
                            }, Ri = St, Ui = j, $i = m, Bi = function (t, e) {
                                if (Vn(e, t))
                                    return t;
                                throw Gn("Incorrect invocation")
                            }, Fi = G, Hi = function (t, e, n) {
                                var o, i, r, a, u, s, l = n && n.that, c = !(!n || !n.AS_ENTRIES),
                                    f = !(!n || !n.IS_ITERATOR), d = !(!n || !n.INTERRUPTED), p = po(e, l),
                                    h = function (t) {
                                        return o && ko(o, "normal", t),
                                            new Co(!0, t)
                                    }, g = function (t) {
                                        return c ? (go(t),
                                            d ? p(t[0], t[1], h) : p(t[0], t[1])) : d ? p(t, h) : p(t)
                                    };
                                if (f)
                                    o = t;
                                else {
                                    if (!(f = bo(t)))
                                        throw So(mo(t) + " is not iterable");
                                    if (_o(f)) {
                                        for (i = 0,
                                                 r = yo(t); i < r; i++)
                                            if ((a = g(t[i])) && vo(To, a))
                                                return a;
                                        return new Co(!1)
                                    }
                                    o = wo(t, f)
                                }
                                for (u = o.next; !(s = ho(u, o)).done;) {
                                    try {
                                        a = g(s.value)
                                    } catch (m) {
                                        ko(o, "throw", m)
                                    }
                                    if ("object" == typeof a && a && vo(To, a))
                                        return a
                                }
                                return new Co(!1)
                            }, G = function (t, e) {
                                if (!e && !xo)
                                    return !1;
                                var n = !1;
                                try {
                                    var o = {};
                                    o[qo] = function () {
                                        return {
                                            "next": function () {
                                                return {
                                                    "done": n = !0
                                                }
                                            }
                                        }
                                    }
                                        ,
                                        t(o)
                                } catch (Pr) {
                                }
                                return n
                            }, Vi = function (t, e) {
                                var n, t = Vo(t).constructor;
                                return t === undefined || (n = Vo(t)[zo]) == undefined ? e : Go(n)
                            }, Gi = bi.set, zi = x, Ji = function (t, e) {
                                if (Ei(t),
                                Li(e) && e.constructor === t)
                                    return e;
                                t = Pi.f(t);
                                return (0,
                                    t.resolve)(e),
                                    t.promise
                            }, Xi = function (t, e) {
                                var n = Oi.console;
                                n && n.error && (1 == arguments.length ? n.error(t) : n.error(t, e))
                            }, vt = vt, Wi = function (t) {
                                try {
                                    return {
                                        "error": !1,
                                        "value": t()
                                    }
                                } catch (Pr) {
                                    return {
                                        "error": !0,
                                        "value": Pr
                                    }
                                }
                            }, Ki = a, R = R, _ = _, Yi = e, Zi = f, tr = F, er = ot("species"), nr = "Promise",
                            or = R.getterFor(nr), ir = R.set, rr = R.getterFor(nr), ar = M && M.prototype, ur = M,
                            sr = ar, lr = Mi.TypeError, cr = Mi.document, fr = Mi.process, dr = vt.f, pr = dr,
                            hr = !!(cr && cr.createEvent && Mi.dispatchEvent), gr = Ui(Mi.PromiseRejectionEvent),
                            mr = "unhandledrejection", _r = !1, _ = _(nr, function () {
                                var t = Fi(ur)
                                    , e = t !== String(ur);
                                if (!e && 66 === tr)
                                    return !0;
                                if (51 <= tr && /native code/.test(t))
                                    return !1;
                                var n = new ur(function (t) {
                                        t(1)
                                    }
                                )
                                    , t = function (t) {
                                    t(function () {
                                    }, function () {
                                    })
                                };
                                return (n.constructor = {})[er] = t,
                                !(_r = n.then(function () {
                                }) instanceof t) || !e && Yi && !gr
                            }), G = _ || !G(function (t) {
                                ur.all(t)["catch"](function () {
                                })
                            }), yr = function (t) {
                                var e;
                                return !(!$i(t) || !Ui(e = t.then)) && e
                            }, vr = function (t, e) {
                                var n, o, i, r = e.value, a = 1 == e.state, u = a ? t.ok : t.fail, s = t.resolve,
                                    l = t.reject, c = t.domain;
                                try {
                                    u ? (a || (2 === e.rejection && Cr(e),
                                        e.rejection = 1),
                                        !0 === u ? n = r : (c && c.enter(),
                                            n = u(r),
                                        c && (c.exit(),
                                            i = !0)),
                                        n === t.promise ? l(lr("Promise-chain cycle")) : (o = yr(n)) ? Di(o, n, s, l) : s(n)) : l(r)
                                } catch (Pr) {
                                    c && !i && c.exit(),
                                        l(Pr)
                                }
                            }, wr = function (n, o) {
                                n.notified || (n.notified = !0,
                                    zi(function () {
                                        for (var t, e = n.reactions; t = e.get();)
                                            vr(t, n);
                                        n.notified = !1,
                                        o && !n.rejection && kr(n)
                                    }))
                            }, br = function (t, e, n) {
                                var o, i;
                                hr ? ((o = cr.createEvent("Event")).promise = e,
                                    o.reason = n,
                                    o.initEvent(t, !1, !0),
                                    Mi.dispatchEvent(o)) : o = {
                                    "promise": e,
                                    "reason": n
                                },
                                    !gr && (i = Mi["on" + t]) ? i(o) : t === mr && Xi("Unhandled promise rejection", n)
                            }, kr = function (i) {
                                Di(Gi, Mi, function () {
                                    var t, e = i.facade, n = i.value, o = Sr(i);
                                    if (o && (t = Wi(function () {
                                        Zi ? fr.emit("unhandledRejection", n, e) : br(mr, e, n)
                                    }),
                                        i.rejection = Zi || Sr(i) ? 2 : 1,
                                        t.error))
                                        throw t.value
                                })
                            }, Sr = function (t) {
                                return 1 !== t.rejection && !t.parent
                            }, Cr = function (e) {
                                Di(Gi, Mi, function () {
                                    var t = e.facade;
                                    Zi ? fr.emit("rejectionHandled", t) : br("rejectionhandled", t, e.value)
                                })
                            }, Tr = function (e, n, o) {
                                return function (t) {
                                    e(n, t, o)
                                }
                            }, qr = function (t, e, n) {
                                t.done || (t.done = !0,
                                n && (t = n),
                                    t.value = e,
                                    t.state = 2,
                                    wr(t, !0))
                            }, xr = function (e, n, t) {
                                if (!e.done) {
                                    e.done = !0,
                                    t && (e = t);
                                    try {
                                        if (e.facade === n)
                                            throw lr("Promise can't be resolved itself");
                                        var o = yr(n);
                                        o ? zi(function () {
                                            var t = {
                                                "done": !1
                                            };
                                            try {
                                                Di(o, n, Tr(xr, t, e), Tr(qr, t, e))
                                            } catch (Pr) {
                                                qr(t, Pr, e)
                                            }
                                        }) : (e.value = n,
                                            e.state = 1,
                                            wr(e, !1))
                                    } catch (Pr) {
                                        qr({
                                            "done": !1
                                        }, Pr, e)
                                    }
                                }
                            };
                        if (_ && (sr = (ur = function Promise(t) {
                                Bi(this, sr),
                                    Ri(t),
                                    Di(Ni, this);
                                var e = or(this);
                                try {
                                    t(Tr(xr, e), Tr(qr, e))
                                } catch (Pr) {
                                    qr(e, Pr)
                                }
                            }
                        ).prototype,
                            (Ni = function Promise(t) {
                                    ir(this, {
                                        "type": nr,
                                        "done": !1,
                                        "notified": !1,
                                        "parent": !1,
                                        "reactions": new Ki,
                                        "rejection": !1,
                                        "state": 0,
                                        "value": undefined
                                    })
                                }
                            ).prototype = W(sr, {
                                "then": function wi(t, e) {
                                    var n = rr(this)
                                        , o = dr(Vi(this, ur));
                                    return n.parent = !0,
                                        o.ok = !Ui(t) || t,
                                        o.fail = Ui(e) && e,
                                        o.domain = Zi ? fr.domain : undefined,
                                        0 == n.state ? n.reactions.add(o) : zi(function () {
                                            vr(o, n)
                                        }),
                                        o.promise
                                },
                                "catch": function (t) {
                                    return this.then(undefined, t)
                                }
                            }),
                            ji = function () {
                                var t = new Ni
                                    , e = or(t);
                                this.promise = t,
                                    this.resolve = Tr(xr, e),
                                    this.reject = Tr(qr, e)
                            }
                            ,
                            vt.f = dr = function (t) {
                                return t === ur || t === Ii ? new ji : pr(t)
                            }
                            ,
                        Ui(M) && ar !== Object.prototype)) {
                            Ai = ar.then,
                            _r || ($(ar, "then", function wi(t, e) {
                                var n = this;
                                return new ur(function (t, e) {
                                        Di(Ai, n, t, e)
                                    }
                                ).then(t, e)
                            }, {
                                "unsafe": !0
                            }),
                                $(ar, "catch", sr["catch"], {
                                    "unsafe": !0
                                }));
                            try {
                                delete ar.constructor
                            } catch (Pr) {
                            }
                            Qi && Qi(ar, sr)
                        }

                        function Er(t, e, u, s) {
                            return new (u = u || Promise)(function (n, o) {
                                    function i(t) {
                                        try {
                                            a(s.next(t))
                                        } catch (e) {
                                            o(e)
                                        }
                                    }

                                    function r(t) {
                                        try {
                                            a(s["throw"](t))
                                        } catch (e) {
                                            o(e)
                                        }
                                    }

                                    function a(t) {
                                        var e;
                                        t.done ? n(t.value) : ((e = t.value) instanceof u ? e : new u(function (t) {
                                                t(e)
                                            }
                                        )).then(i, r)
                                    }

                                    a((s = s.apply(t, e || [])).next())
                                }
                            )
                        }

                        function Lr() {
                            return new Promise(function (t, e) {
                                    var n = document.querySelector("body")
                                        , o = document.createElement("script");
                                    o.src = "https://qq-web-other.cdn-go.cn/biz-libs/latest/any.ptlogin2.qq.com/fingerprintjs/index.umd.js",
                                        o.type = "text/javascript",
                                        o.defer = !0,
                                        o.onload = function () {
                                            t({
                                                "code": 0,
                                                "message": "success"
                                            })
                                        }
                                        ,
                                        o.onerror = function () {
                                            e({
                                                "code": -1,
                                                "message": "loadScript fails url: ".concat(o.src, " ")
                                            })
                                        }
                                        ,
                                    null != n && n.appendChild(o)
                                }
                            )
                        }

                        U({
                            "global": !0,
                            "wrap": !0,
                            "forced": _
                        }, {
                            "Promise": ur
                        }),
                            i(ur, nr, !1),
                            l(nr),
                            Ii = r(nr),
                            U({
                                "target": nr,
                                "stat": !0,
                                "forced": _
                            }, {
                                "reject": function (t) {
                                    var e = dr(this);
                                    return Di(e.reject, undefined, t),
                                        e.promise
                                }
                            }),
                            U({
                                "target": nr,
                                "stat": !0,
                                "forced": _
                            }, {
                                "resolve": function (t) {
                                    return Ji(this, t)
                                }
                            }),
                            U({
                                "target": nr,
                                "stat": !0,
                                "forced": G
                            }, {
                                "all": function (t) {
                                    var u = this
                                        , e = dr(u)
                                        , s = e.resolve
                                        , l = e.reject
                                        , n = Wi(function () {
                                        var o = Ri(u.resolve)
                                            , i = []
                                            , r = 0
                                            , a = 1;
                                        Hi(t, function (t) {
                                            var e = r++
                                                , n = !1;
                                            a++,
                                                Di(o, u, t).then(function (t) {
                                                    n || (n = !0,
                                                        i[e] = t,
                                                    --a || s(i))
                                                }, l)
                                        }),
                                        --a || s(i)
                                    });
                                    return n.error && l(n.value),
                                        e.promise
                                },
                                "race": function (t) {
                                    var n = this
                                        , o = dr(n)
                                        , i = o.reject
                                        , e = Wi(function () {
                                        var e = Ri(n.resolve);
                                        Hi(t, function (t) {
                                            Di(e, n, t).then(o.resolve, i)
                                        })
                                    });
                                    return e.error && i(e.value),
                                        o.promise
                                }
                            }),
                            t.getDeviceId = function () {
                                return Er(this, void 0, void 0, o.mark(function t() {
                                    var e, n;
                                    return o.wrap(function (t) {
                                        for (; ;)
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                        Lr()["catch"](function (t) {
                                                            console.error("loadScript fails e", t)
                                                        });
                                                case 2:
                                                    if (0 !== (null == (e = t.sent) ? void 0 : e.code))
                                                        return t.abrupt("return", "");
                                                    t.next = 5;
                                                    break;
                                                case 5:
                                                    return t.next = 7,
                                                        window.FingerprintJS.load();
                                                case 7:
                                                    return n = t.sent,
                                                        t.next = 10,
                                                        n.get();
                                                case 10:
                                                    return n = t.sent,
                                                        n = n.visitorId || "",
                                                        t.abrupt("return", n);
                                                case 13:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }, t)
                                }))
                            }
                            ,
                            Object.defineProperty(t, "__esModule", {
                                "value": !0
                            })
                    }
                )(e)
            }
        ).call(this, n(0))
    }
    , , , , , , , , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.ptui_auth_CB = function (t, e) {
                t = parseInt(t, 10);
                2 === t && "0" != C.ptui.pt_3rd_aid && (t = 0);
                switch (t) {
                    case 0:
                        w["default"].authUin = v["default"].cookie.get("superuin").replace(/^o0*/, ""),
                            w["default"].authSubmitUrl = e,
                            b["default"].buildUnifiedQloginList(),
                        w["default"].isMailLogin && w["default"].switchpage(u.LoginState.QLogin);
                        break;
                    case 1:
                        break;
                    case 2:
                        var n = e + "&regmaster=" + C.ptui.regmaster + "&aid=" + C.ptui.appid + "&s_url=" + encodeURIComponent(C.ptui.s_url);
                        "1" == C.ptui.pt_light && (n += "&pt_light=1"),
                            w["default"].redirect(C.ptui.target, n);
                        break;
                    default:
                        C.preload.init()
                }
            }
            ,
            e.ptui_checkVC = function (t, e, n, o, i, r, a) {
                k.logger.log("ret=".concat(t, ", code=").concat(e, ", salt=").concat(n, ", veryfysession=").concat(o, ", isRandSalt=").concat(i, ", ptdrvs=").concat(r, ", sessionID=").concat(a)),
                    clearTimeout(w["default"].checkClock),
                    w["default"].isRandSalt = i,
                    w["default"].salt = n,
                    w["default"].checkRet = t,
                    w["default"].lastCheckAccount = w["default"].account,
                    w["default"].ptdrvs = r || "",
                    w["default"].sessionID = a || "",
                    "2" == t ? w["default"].loginState == u.LoginState.PLogin && w["default"].show_err(C.str.inv_uin) : "3" == t || w["default"].hasSubmit;
                switch (t + "") {
                    case "0":
                    case "2":
                    case "3":
                        k.logger.info("checkVC pass, ret=".concat(t)),
                            w["default"].hideVC(),
                        "1" == C.ptui.pt_vcode_v1 && (w["default"].needShowNewVc = !1),
                            (0,
                                v["default"])("verifycode").value = e || "abcd",
                            w["default"].needVc = !1,
                            v["default"].report.monitor("330321", .05),
                        e || k.logger.info("check no code return");
                        break;
                    case "1":
                        k.logger.info("need to showVC"),
                            w["default"].cap_cd = e,
                            "1" == C.ptui.pt_vcode_v1 ? w["default"].needShowNewVc = !0 : (w["default"].showVC(),
                                v["default"].css.show((0,
                                    v["default"])("vc_tips"))),
                            w["default"].needVc = !0,
                            v["default"].report.monitor("330320", .05)
                }
                1 == C.ptui.pt_vcode_v1 && 1 == t || (w["default"].pt_verifysession = o);
                w["default"].hasCheck(!0),
                    w["default"].checkTime = (new Date).getTime(),
                w["default"].check.cb && (w["default"].check.cb(),
                    k.logger.info("cb called"))
            }
            ,
            e.ptuiCB = function (t, e, n, o, i, r) {
                k.logger.log("ret=".concat(t, " extret=").concat(e, " jumpUrl=xxx redirect=").concat(o, ", Mmsg=").concat(i));
                var a = (0,
                    v["default"])("p")
                    , u = n
                    , s = !(!w["default"].at_account || !a.value && !w["default"].armSafeEdit.safepwd)
                    , l = !1
                    , c = !1;

                function f() {
                    w["default"].is_mibao(u) && (u += "&style=" + C.ptui.style + "&proxy_url=" + encodeURIComponent(C.ptui.proxy_url),
                        u += "#login_href=" + encodeURIComponent(C.ptui.href)),
                        setTimeout(function () {
                            w["default"].redirect(o, u)
                        }, 110)
                }

                clearTimeout(w["default"].loginClock),
                s && (w["default"].lastCheckAccount = "");
                w["default"].hasSubmit = !0;
                var d = !1;
                switch (w["default"].hasVCSuccess = !1,
                    t) {
                    case "-1":
                        k.logger.info("登录失败，请稍后再试。ret=".concat(t)),
                            w["default"].smsIframe ? w["default"].smsIframe.postMessage({
                                "msg": "loginFails"
                            }) : d = !0;
                        break;
                    case "0":
                        var p = function p() {
                            s || w["default"].is_mibao(u) || window.clearInterval(w["default"].qrlogin_clock),
                                f()
                        };
                        return k.logger.info("登录成功, 即将跳转, ptui.pt_3rd_aid=".concat(C.ptui.pt_3rd_aid)),
                            "0" != C.ptui.pt_3rd_aid ? b["default"].reportPCMgr(w["default"].at_account, 0, 0, p) : p(),
                            void (null !== (y = w["default"].smsIframe) && void 0 !== y && y.postMessage({
                                "msg": "loginSuccess"
                            }));
                    case "3":
                        (0,
                            v["default"])("p").value = "",
                            w["default"].domFocus((0,
                                v["default"])("p")),
                            w["default"].passwordErrorNum = w["default"].passwordErrorNum + 1,
                        "101" != e && "102" != e && "103" != e || w["default"].showVC(),
                            k.logger.info("密码错误，check，ret=".concat(t)),
                            w["default"].check();
                        break;
                    case "4":
                        k.logger.info("验证码错误，check，ret=".concat(t)),
                            w["default"].check();
                        break;
                    case "12":
                    case "51":
                        k.logger.info("后台策略，check, ret=".concat(t)),
                            w["default"].check(),
                            d = !0;
                        break;
                    case "65":
                        return k.logger.info("二维码失效"),
                            void (0 != w["default"].onekeyVerifyClock ? w["default"].onekeyVerify("invalid") : w["default"].set_qrlogin_invalid());
                    case "66":
                        return;
                    case "67":
                        return k.logger.info("手机端扫码成功，等待确认"),
                            void w["default"].go_qrlogin_step(2);
                    case "22005":
                    case "68":
                        w["default"].onekeyVerify("hide");
                        break;
                    case "98":
                        l = d = !0,
                            w["default"].go_qrlogin_step(1);
                        break;
                    case "10005":
                    case "10006":
                    case "22009":
                        w["default"].force_qrlogin(),
                        w["default"].isNewStyle && b["default"].buildUnifiedQloginList(10006 == t ? 2 : 1),
                            k.logger.info("rsa 失败，check，ret=".concat(t)),
                            w["default"].check();
                        break;
                    case "10008":
                        return void w["default"].onekeyVerify("normal", e, i);
                    case "10010":
                        w["default"].smsIframe.postMessage({
                            "msg": "smsError"
                        });
                        break;
                    case "10009":
                        if (w["default"].showSmsIframe)
                            return;
                        w["default"].showSmsIframe = !0,
                            v["default"].cookie.set("pt_sms_phone", i, C.ptui.domain, "/", 6e4),
                            w["default"].smsCheck = !0;
                        var h = v["default"].url.getParam("appid")
                            , g = v["default"].cookie.get("pt_loginuin") || document.loginform.u.value
                            , m = v["default"].url.getParam("verify_theme")
                            , _ = "dark" === m ? "#000" : "#FFF"
                            , y = v["default"].iframe();
                        y.init({
                            "name": "verify",
                            "id": "verify",
                            "parentID": "verify_iframe_mask",
                            "parentStyle": "position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,0.1);z-index:9999;",
                            "url": "https://ui.ptlogin2.qq.com/web/verify/iframe?uin=" + g + "&appid=" + h + "&verify_theme=" + m,
                            "iframeStyle": "width:100%;height:100%;margin: 0 auto;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: none;background:" + _,
                            "smsSubmitEvent": w["default"].onSmsSubmit,
                            "closeSms": w["default"].onCloseSms
                        }),
                            w["default"].smsIframe = y;
                        break;
                    case "10015":
                        c = !0,
                            w["default"].hideLoading();
                        break;
                    default:
                        if (w["default"].smsIframe)
                            return k.logger.log("notFoundError, ret=".concat(t)),
                                void w["default"].smsIframe.postMessage({
                                    "msg": "notFoundError"
                                });
                        w["default"].needVc && !w["default"].needShowNewVc ? w["default"].changeVC() : (k.logger.log("走到switch的default, check, ret=".concat(t)),
                            w["default"].check())
                }
                c ? (0,
                    S.showDialog)({
                    "lang": window.pt.ptui.lang
                }) : 0 != t && (s || l) && w["default"].show_err(i, d);
                !w["default"].hasCheck() && s && "1" != C.ptui.pt_vcode_v1 && (w["default"].showVC(),
                    (0,
                        v["default"])("verifycode").focus(),
                    (0,
                        v["default"])("verifycode").select());
                "0" != C.ptui.pt_3rd_aid && b["default"].reportPCMgr(w["default"].at_account, 0, 1)
            }
        ;
        var v = o(n(1))
            , w = o(n(14))
            , b = o(n(17))
            , u = n(18)
            , k = n(2)
            , S = n(62);

        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        var C = window.pt
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.pt_qqprotect_version = v,
            e.pt_request_guid_callback = h,
            e.ptui_action_result_CB = y,
            e.ptui_fetch_dev_uin_CB = function (t) {
                if (!t || 22028 != t.errcode)
                    return;
                for (var e = t.data, n = [], o = 0; o < e.length; o++) {
                    var i = e[o];
                    n.push({
                        "uin": i,
                        "name": a["default"].str.utf8ToUincode(a["default"].cookie.get("ptnick_" + i)) || i,
                        "uinString": i,
                        "type": 0,
                        "nick": a["default"].str.utf8ToUincode(a["default"].cookie.get("ptnick_" + i)) || i,
                        "flag": 0,
                        "loginType": u["default"].OneKeyPush
                    })
                }
                u["default"].setOneKeyList(n),
                    n.length ? u["default"].buildUnifiedQloginList() : l.logger.info("OneKeyList.length===0, 不用重建快速登录列表");
                e.length && r["default"].isMailLogin && r["default"].switchpage(s.LoginState.QLogin)
            }
            ,
            e.ptui_getst_CB = p,
            e.ptui_getuins_CB = d,
            e.ptui_pc_querystatus_CB = g,
            e.ptui_qlogin_CB = f,
            e.ptui_qqprotect_querystatus_CB = m,
            e.ptui_qqprotect_result_CB = _,
            e.ptui_qrcode_CB = function (t) {
                switch (l.logger.log("resp.ec=".concat(t.ec, " resp.em=").concat(t.em)),
                    r["default"].hideLoading(),
                    clearTimeout(u["default"].__onekeyClock),
                t && parseInt(t.ec, 10)) {
                    case 0:
                        r["default"].go_onekey_step(2),
                            r["default"].cancle_qrlogin(),
                        u["default"].__onekeyFirst || r["default"].show_err(t.em),
                            r["default"].qrlogin_clock = window.setInterval("pt.plogin.qrlogin_submit();", 3e3),
                            l.logger.info("已完成手机端消息推送，启动后台轮询授权登录状态");
                        break;
                    case 313:
                        r["default"].go_onekey_step(1),
                        t && r["default"].show_err(t.em),
                            u["default"].fetchOnekeyList();
                        break;
                    default:
                        t && r["default"].show_err(t.em)
                }
            }
            ,
            e.setHeader = function (t) {
                for (var e in t)
                    o.headerCache[e] = t[e],
                    "" != e && o.headerCache.update(e)
            }
        ;
        var r = i(n(14))
            , a = i(n(1))
            , u = i(n(17))
            , s = n(18)
            , o = n(36)
            , l = n(2);

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        var c = window.pt;

        function f(t, e, n) {
            switch (window.clearTimeout(u["default"].__getstClock),
                f.called = !0,
                t) {
                case "0":
                    var o = function o() {
                        r["default"].redirect(c.ptui.target, e)
                    };
                    return void ("0" != c.ptui.pt_3rd_aid ? u["default"].reportPCMgr(r["default"].at_account, 0, 0, o) : o());
                case "10006":
                    r["default"].force_qrlogin(),
                        r["default"].show_err(n, !0);
                    break;
                default:
                    r["default"].switchpage(s.LoginState.PLogin),
                        r["default"].show_err(n, !0)
            }
            "0" != c.ptui.pt_3rd_aid && u["default"].reportPCMgr(r["default"].at_account, 0, 1)
        }

        function d(t) {
            l.logger.info("ptui_getuins_CB, uinlist.length=".concat(t.length));
            var e = r["default"].getLoginParams("jumpuin");
            if (d.called = !0,
            t || e) {
                if (r["default"].hide_err(),
                e && t) {
                    for (var n = 0; n < t.length; ++n)
                        if (e == t[n].uin) {
                            u["default"].pcsvrQloginSubmit(e),
                                u["default"].reportPath(e, 1);
                            break
                        }
                    n === t.length && (window.location.href = u["default"].getSurl())
                }
                for (var o = [], n = 0; n < t.length; n++) {
                    var i = t[n];
                    o.push({
                        "uin": i.uin,
                        "name": i.account,
                        "uinString": i.uin,
                        "type": 0,
                        "face": i.face_index,
                        "nick": i.nickname,
                        "flag": i.uin_flag,
                        "loginType": u["default"].PCSvrQlogin
                    })
                }
                u["default"].setPCSvrQloginList(o),
                o.length && u["default"].buildUnifiedQloginList(),
                t.length && r["default"].isMailLogin && r["default"].switchpage(s.LoginState.QLogin),
                    a["default"].report.monitor(508158, 1),
                navigator.userAgent.match(/\bmac\b/i) && a["default"].report.monitor(2423545, 1),
                window.localStorage && localStorage.setItem("newQQ", !0)
            } else
                l.logger.info("uinlist.length===0 && jumpuin is null")
        }

        function p(t) {
            var e;
            p.called = !0,
            t && (r["default"].hideLoading(),
            p.submitUrl && (e = p.submitUrl.replace("{{hash_clientkey}}", a["default"].str.hash33(a["default"].cookie.get("clientkey"))),
            t.keyindex && (e = e.replace(/keyindex=\d+/, "keyindex=" + t.keyindex),
                a["default"].report.monitor(2423538, 1)),
                u["default"].reportPCMgr(t.uin, 2),
                a["default"].http.loadScript(e)),
                a["default"].report.monitor(508159, 1))
        }

        function h(t) {
            if (h.called = !0,
                !(t && Object.prototype.hasOwnProperty.call(t, "ret") && 1 == t.ret && Object.prototype.hasOwnProperty.call(t, "data") && Object.prototype.hasOwnProperty.call(t, "serverdata") && Object.prototype.hasOwnProperty.call(t, "status") && Object.prototype.hasOwnProperty.call(t, "session")))
                return u["default"].fetchOnekeyListByGUID(),
                    a["default"].report.nlog("pt_request_guid_callback result:" + a["default"].str.json2str(t), 2732842),
                    0;
            switch (parseInt(t.data.serverdata.status, 10)) {
                case 1:
                    Object.prototype.hasOwnProperty.call(t.data.serverdata, "guidsig") ? (u["default"].fetchOnekeyListByGUID(t.data.serverdata.guidsig),
                        u["default"].QQProtectGUID = t.data.serverdata.guidsig,
                        a["default"].report.monitor(2732843)) : (a["default"].report.nlog("pt_request_guid_callback result:" + a["default"].str.json2str(t), 2732842),
                        u["default"].fetchOnekeyListByGUID());
                    break;
                case 2:
                    u["default"].QQProtectSession = t.session,
                        u["default"].callQQProtect({
                            "service": 103,
                            "action": 2,
                            "callbackName": "pt_request_guid_callback",
                            "timeoutCallback": function () {
                                u["default"].fetchOnekeyListByGUID(),
                                    a["default"].report.monitor(2751524)
                            }
                        });
                    break;
                default:
                    u["default"].fetchOnekeyListByGUID(),
                        a["default"].report.nlog("pt_request_guid_callback result:" + a["default"].str.json2str(t), 2732842)
            }
        }

        function g(t) {
            g.called = !0,
            t && (u["default"].PCMgrSession = t.actionString,
                u["default"].processPCMgrStatus(t.qqpcstatus, t.wording, t.bautoCheck))
        }

        function m(t) {
            m.called = !0,
            t && Object.prototype.hasOwnProperty.call(t, "ret") && 1 == t.ret && Object.prototype.hasOwnProperty.call(t, "data") && (u["default"].PCMgrSession || (u["default"].PCMgrSession2 = t.data.actionstring,
                u["default"].processPCMgrStatus(t.data.qqpcstatus, t.data.wording, t.data.bautoCheck)))
        }

        function _() {
            _.called = !0
        }

        function y() {
            y.called = !0
        }

        function v() {
            v.called = !0,
                u["default"].callQQProtect({
                    "service": 103,
                    "action": 1,
                    "callbackName": "pt_request_guid_callback",
                    "timeoutCallback": function () {
                        u["default"].fetchOnekeyListByGUID(),
                            a["default"].report.monitor(2751523)
                    }
                })
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.headerCache = void 0;
        var o = r(n(1))
            , i = r(n(14));

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        var a = {
            "update": function (t) {
                var e = (0,
                    o["default"])("img_" + t);
                e ? a[t] && -1 < a[t].indexOf("sys.getface.qq.com") ? e.src = i["default"].dftImg : e.src = a[t] || i["default"].dftImg : a[t] && -1 < a[t].indexOf("sys.getface.qq.com") ? (0,
                    o["default"])("auth_face").src = i["default"].dftImg : (0,
                    o["default"])("auth_face").src = a[t] || i["default"].dftImg
            }
        };
        e.headerCache = a
    }
    , , , , , , , , , , , , , , , function (t, e, n) {
        n(6),
            n(52),
            n(53),
            n(7),
            n(54),
            n(19),
            n(20),
            t.exports = n(55)
    }
    , function (t, e, n) {
        "use strict";
        Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
                var n, o;
                if (null == this)
                    throw new TypeError(" this is null or not defined");
                var i, r = Object(this), a = r.length >>> 0;
                if ("function" != typeof t)
                    throw new TypeError(t + " is not a function");
                for (1 < arguments.length && (n = e),
                         o = 0; o < a;)
                    o in r && (i = r[o],
                        t.call(n, i, o, r)),
                        o++
            }
        )
    }
    , function (t, e, n) {
        "use strict";
        "function" != typeof Object.create && (Object.create = function (t, e) {
                if ("object" != typeof t && "function" != typeof t)
                    throw new TypeError("Object prototype may only be an Object: " + t);
                if (null === t)
                    throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
                if (void 0 !== e)
                    throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

                function n() {
                }

                return n.prototype = t,
                    new n
            }
        )
    }
    , function (module, exports, __webpack_require__) {
        "use strict";
        "object" != typeof JSON && (JSON = {}),
            function () {
                var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                    rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    gap, indent, meta, rep;

                function f(t) {
                    return t < 10 ? "0" + t : t
                }

                function this_value() {
                    return this.valueOf()
                }

                function quote(t) {
                    return rx_escapable.lastIndex = 0,
                        rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) {
                            var e = meta[t];
                            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + t + '"'
                }

                function str(t, e) {
                    var n, o, i, r, a, u = gap, s = e[t];
                    switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(t)),
                    "function" == typeof rep && (s = rep.call(e, t, s)),
                        typeof s) {
                        case "string":
                            return quote(s);
                        case "number":
                            return isFinite(s) ? String(s) : "null";
                        case "boolean":
                        case "null":
                            return String(s);
                        case "object":
                            if (!s)
                                return "null";
                            if (gap += indent,
                                a = [],
                            "[object Array]" === Object.prototype.toString.apply(s)) {
                                for (r = s.length,
                                         n = 0; n < r; n += 1)
                                    a[n] = str(n, s) || "null";
                                return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + u + "]" : "[" + a.join(",") + "]",
                                    gap = u,
                                    i
                            }
                            if (rep && "object" == typeof rep)
                                for (r = rep.length,
                                         n = 0; n < r; n += 1)
                                    "string" == typeof rep[n] && (i = str(o = rep[n], s)) && a.push(quote(o) + (gap ? ": " : ":") + i);
                            else
                                for (o in s)
                                    Object.prototype.hasOwnProperty.call(s, o) && (i = str(o, s)) && a.push(quote(o) + (gap ? ": " : ":") + i);
                            return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + u + "}" : "{" + a.join(",") + "}",
                                gap = u,
                                i
                    }
                }

                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }
                    ,
                    Boolean.prototype.toJSON = this_value,
                    Number.prototype.toJSON = this_value,
                    String.prototype.toJSON = this_value),
                "function" != typeof JSON.stringify && (meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                        JSON.stringify = function (t, e, n) {
                            var o;
                            if (indent = gap = "",
                            "number" == typeof n)
                                for (o = 0; o < n; o += 1)
                                    indent += " ";
                            else
                                "string" == typeof n && (indent = n);
                            if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                                throw new Error("JSON.stringify");
                            return str("", {
                                "": t
                            })
                        }
                ),
                "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                        var j;

                        function walk(t, e) {
                            var n, o, i = t[e];
                            if (i && "object" == typeof i)
                                for (n in i)
                                    Object.prototype.hasOwnProperty.call(i, n) && ((o = walk(i, n)) !== undefined ? i[n] = o : delete i[n]);
                            return reviver.call(t, e, i)
                        }

                        if (text = String(text),
                            rx_dangerous.lastIndex = 0,
                        rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) {
                            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                        })),
                            rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                            return j = eval("(" + text + ")"),
                                "function" == typeof reviver ? walk({
                                    "": j
                                }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    }
                )
            }()
    }
    , function (t, e, n) {
        "use strict";
        var o = u(n(17))
            , i = u(n(14))
            , r = n(35)
            , a = n(34);

        function u(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        window.c_login_2_inited || (window.pt = window.pt || {},
            window.ptui_auth_CB = a.ptui_auth_CB,
            window.ptui_checkVC = a.ptui_checkVC,
            window.ptuiCB = a.ptuiCB,
            window.pt_qqprotect_version = r.pt_qqprotect_version,
            window.pt_request_guid_callback = r.pt_request_guid_callback,
            window.ptui_action_result_CB = r.ptui_action_result_CB,
            window.ptui_fetch_dev_uin_CB = r.ptui_fetch_dev_uin_CB,
            window.ptui_getst_CB = r.ptui_getst_CB,
            window.ptui_getuins_CB = r.ptui_getuins_CB,
            window.ptui_pc_querystatus_CB = r.ptui_pc_querystatus_CB,
            window.ptui_qlogin_CB = r.ptui_qlogin_CB,
            window.ptui_qqprotect_querystatus_CB = r.ptui_qqprotect_querystatus_CB,
            window.ptui_qqprotect_result_CB = r.ptui_qqprotect_result_CB,
            window.ptui_qrcode_CB = r.ptui_qrcode_CB,
            window.pt.setHeader = r.setHeader,
            window.pt.qlogin = o["default"],
            window.pt.plogin = i["default"],
            i["default"].auth(),
            i["default"].init(),
            window.c_login_2_inited = !0)
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var i = n(26)
            , r = n(8);

        function s(t, e, n, o, i, r, a) {
            try {
                var u = t[r](a)
                    , s = u.value
            } catch (l) {
                return void n(l)
            }
            u.done ? e(s) : Promise.resolve(s).then(o, i)
        }

        function o(u) {
            return function () {
                var t = this
                    , a = arguments;
                return new Promise(function (e, n) {
                        var o = u.apply(t, a);

                        function i(t) {
                            s(o, e, n, i, r, "next", t)
                        }

                        function r(t) {
                            s(o, e, n, i, r, "throw", t)
                        }

                        i(undefined)
                    }
                )
            }
        }

        var a, u = window.pt, n = {
            "getDeviceId": (a = o(regeneratorRuntime.mark(function l() {
                    var e, n, o;
                    return regeneratorRuntime.wrap(function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    if (o = !0,
                                    "100294784" === u.ptui.pt_3rd_aid && (o = !1),
                                        e = window.navigator.userAgent,
                                    -1 < e.indexOf("compatible") && -1 < e.indexOf("MSIE") && (n = /MSIE (\d+\.\d+)/,
                                        n = e.match(n),
                                        n = parseInt(null == n ? void 0 : n[1], 10),
                                        o = 8 < n),
                                        o) {
                                        t.next = 8;
                                        break
                                    }
                                    return (0,
                                        r.report007)({
                                        "app": "qfingerprint-device-id",
                                        "cgi": "device-id/unsupport",
                                        "type": 1
                                    }),
                                        t.abrupt("return", "");
                                case 8:
                                    return t.next = 10,
                                        (0,
                                            i.getDeviceId)();
                                case 10:
                                    return o = t.sent,
                                        (0,
                                            r.report007)({
                                            "app": "qfingerprint-device-id",
                                            "cgi": "device-id/".concat(o || "empty"),
                                            "type": o ? 0 : 1
                                        }),
                                        t.abrupt("return", o || "");
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                    }, l)
                })),
                    function () {
                        return a.apply(this, arguments)
                    }
            )
        };
        e["default"] = n
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.isInPage = void 0;
        var o = n(2);
        var i = function i(t) {
            if (document.body) {
                if (t === document.body)
                    return !1;
                if (e = t,
                    !("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName))
                    return o.logger.info("node 不是一个HTMLElement"),
                        !1;
                var e;
                if (document.body.contains) {
                    t = document.body.contains(t);
                    return o.logger.info("isContain:", t),
                        t
                }
                return !1
            }
            o.logger.warn("document.body 不存在，忽略")
        };
        e.isInPage = i
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.get = e.request = void 0;
        var u = o(n(59))
            , s = n(8)
            , l = o(n(10));

        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        var i = function (t, e, u, s) {
            return new (u = u || Promise)(function (n, o) {
                    function i(t) {
                        try {
                            a(s.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function r(t) {
                        try {
                            a(s["throw"](t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? n(t.value) : ((e = t.value) instanceof u ? e : new u(function (t) {
                                t(e)
                            }
                        )).then(i, r)
                    }

                    a((s = s.apply(t, e || [])).next())
                }
            )
        }
            , r = function (n, o) {
            var i, r, a, u = {
                "label": 0,
                "sent": function () {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                "trys": [],
                "ops": []
            }, t = {
                "next": e(0),
                "throw": e(1),
                "return": e(2)
            };
            return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
                    return this
                }
            ),
                t;

            function e(e) {
                return function (t) {
                    return s([e, t])
                }
            }

            function s(t) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                for (; u;)
                    try {
                        if (i = 1,
                        r && (a = 2 & t[0] ? r["return"] : t[0] ? r["throw"] || ((a = r["return"]) && a.call(r),
                            0) : r.next) && !(a = a.call(r, t[1])).done)
                            return a;
                        switch (r = 0,
                        a && (t = [2 & t[0], a.value]),
                            t[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return u.label++,
                                    {
                                        "value": t[1],
                                        "done": !1
                                    };
                            case 5:
                                u.label++,
                                    r = t[1],
                                    t = [0];
                                continue;
                            case 7:
                                t = u.ops.pop(),
                                    u.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = u.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    u.label = t[1];
                                    break
                                }
                                if (6 === t[0] && u.label < a[1]) {
                                    u.label = a[1],
                                        a = t;
                                    break
                                }
                                if (a && u.label < a[2]) {
                                    u.label = a[2],
                                        u.ops.push(t);
                                    break
                                }
                                a[2] && u.ops.pop(),
                                    u.trys.pop();
                                continue
                        }
                        t = o.call(n, u)
                    } catch (e) {
                        t = [6, e],
                            r = 0
                    } finally {
                        i = a = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    "value": t[0] ? t[1] : void 0,
                    "done": !0
                }
            }
        }
            , c = function c() {
            return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
        }
            , a = 200
            , f = 304
            , d = 1223
            , p = 0
            , h = function h(t) {
            return t === a || t === f || t === d || t === p
        }
            , g = function g(a) {
            return i(this, void 0, void 0, function () {
                return r(this, function (t) {
                    return [2, new Promise(function (n, o) {
                            var i = c()
                                , r = (new Date).getTime();
                            i.open(a.method, a.url),
                                i.onreadystatechange = function () {
                                    if (4 === i.readyState) {
                                        var t = (new Date).getTime();
                                        if (!h(i.status))
                                            return o({
                                                "msg": "服务器返回了一个错误 " + i.status,
                                                "xhr": i
                                            }),
                                                void (0,
                                                    s.report007)({
                                                    "app": "ptlogin",
                                                    "cgi": "/common_monitor" + (0,
                                                        l["default"])(a.url).pathname,
                                                    "type": 1,
                                                    "httpcode": i.status,
                                                    "retcode": s.RET_CODE.MEANINGLESS,
                                                    "cost": t - r
                                                });
                                        if ("json" === a.dataType)
                                            try {
                                                n({
                                                    "data": JSON.parse(i.responseText),
                                                    "xhr": i,
                                                    "msg": "成功"
                                                }),
                                                    (0,
                                                        s.report007)({
                                                        "app": "ptlogin",
                                                        "cgi": "/common_monitor" + (0,
                                                            l["default"])(a.url).pathname,
                                                        "type": 0,
                                                        "httpcode": i.status,
                                                        "retcode": s.RET_CODE.MEANINGLESS,
                                                        "cost": t - r
                                                    })
                                            } catch (e) {
                                                o({
                                                    "msg": "解析JSON时发生错误",
                                                    "xhr": i
                                                }),
                                                    (0,
                                                        s.report007)({
                                                        "app": "ptlogin",
                                                        "cgi": "/common_monitor" + (0,
                                                            l["default"])(a.url).pathname,
                                                        "type": 1,
                                                        "httpcode": i.status,
                                                        "retcode": s.RET_CODE.JSON_PARSE_ERROR,
                                                        "cost": t - r
                                                    })
                                            }
                                        else
                                            n({
                                                "xhr": i,
                                                "data": i.responseText,
                                                "msg": "成功"
                                            }),
                                                i.responseText ? (0,
                                                    s.report007)({
                                                    "app": "ptlogin",
                                                    "cgi": "/common_monitor" + (0,
                                                        l["default"])(a.url).pathname,
                                                    "type": 0,
                                                    "httpcode": i.status,
                                                    "retcode": s.RET_CODE.MEANINGLESS,
                                                    "cost": t - r
                                                }) : (0,
                                                    s.report007)({
                                                    "app": "ptlogin",
                                                    "cgi": "/common_monitor" + (0,
                                                        l["default"])(a.url).pathname,
                                                    "type": 1,
                                                    "httpcode": i.status,
                                                    "retcode": s.RET_CODE.EMPTY_RESPONSE_BODY,
                                                    "cost": t - r
                                                })
                                    }
                                }
                            ;
                            var t = null;
                            "POST" === a.method && a.data && (t = u["default"].stringify(a.data)),
                                i.send(t)
                        }
                    )]
                })
            })
        };
        e.request = g;
        var m = function m(e, n, o) {
            return i(this, void 0, void 0, function () {
                return r(this, function (t) {
                    return [2, g({
                        "url": n ? e + (e.includes("?") ? "&" : "?") + u["default"].stringify(n) : e,
                        "method": "GET",
                        "dataType": (null == o ? void 0 : o.dataType) || "text"
                    })]
                })
            })
        };
        e.get = m
    }
    , function (t, e, n) {
        "use strict";
        e.decode = e.parse = n(60),
            e.encode = e.stringify = n(61)
    }
    , function (t, e, n) {
        "use strict";
        t.exports = function (t, e, n, o) {
            e = e || "&",
                n = n || "=";
            var i = {};
            if ("string" != typeof t || 0 === t.length)
                return i;
            var r = /\+/g;
            t = t.split(e);
            e = 1e3;
            o && "number" == typeof o.maxKeys && (e = o.maxKeys);
            var a = t.length;
            0 < e && e < a && (a = e);
            for (var u = 0; u < a; ++u) {
                var s, l = t[u].replace(r, "%20"), c = l.indexOf(n), f = 0 <= c ? (s = l.substr(0, c),
                    l.substr(c + 1)) : (s = l,
                    ""), d = decodeURIComponent(s), c = decodeURIComponent(f);
                l = i,
                    f = d,
                    Object.prototype.hasOwnProperty.call(l, f) ? p(i[d]) ? i[d].push(c) : i[d] = [i[d], c] : i[d] = c
            }
            return i
        }
        ;
        var p = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    }
    , function (t, e, n) {
        "use strict";
        var r = function (t) {
            switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
            }
        };
        t.exports = function (n, o, i, t) {
            return o = o || "&",
                i = i || "=",
            null === n && (n = undefined),
                "object" == typeof n ? u(s(n), function (t) {
                    var e = encodeURIComponent(r(t)) + i;
                    return a(n[t]) ? u(n[t], function (t) {
                        return e + encodeURIComponent(r(t))
                    }).join(o) : e + encodeURIComponent(r(n[t]))
                }).join(o) : t ? encodeURIComponent(r(t)) + i + encodeURIComponent(r(n)) : ""
        }
        ;
        var a = Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        ;

        function u(t, e) {
            if (t.map)
                return t.map(e);
            for (var n = [], o = 0; o < t.length; o++)
                n.push(e(t[o], o));
            return n
        }

        var s = Object.keys || function (t) {
            var e, n = [];
            for (e in t)
                Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
            return n
        }
    }
    , function (t, e, n) {
        "use strict";

        function o(t) {
            this.wordings = {
                "1028": {
                    "title": "安全提示",
                    "description": '你的帳號未綁定密保手機，存在安全風險，請嘗試掃碼登入，或在<a class="ptui-dialog-wrap__text-link" href="https://im.qq.com/index" target="_blank">手機QQ</a>內完成密保手機綁定後重新登入。',
                    "btnCancel": "取消",
                    "btnConfirm": "確認"
                },
                "1033": {
                    "title": "Safety warning",
                    "description": 'For protecting your QQ account, we need to verify the secure mobile phone. You can try to scan the code to log in, or log in again after binding a secure mobile phone to the account in <a class="ptui-dialog-wrap__text-link" href="https://im.qq.com/index" target="_blank">mobile-QQ</a> APP.',
                    "btnCancel": "Cancel",
                    "btnConfirm": "Confirm"
                },
                "2052": {
                    "title": "安全提示",
                    "description": '你的帐号未绑定密保手机，存在安全风险，请尝试扫码登录，或在<a class="ptui-dialog-wrap__text-link" href="https://im.qq.com/index" target="_blank">手机QQ</a>内完成密保手机绑定后重新登录。',
                    "btnCancel": "取消",
                    "btnConfirm": "确定"
                }
            },
                this.options = t,
                this.lang = this.options.lang || 1028,
                this.dialogElement = document.createElement("div"),
                this.init()
        }

        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.showDialog = function (t) {
                return new o(t)
            }
            ,
            o.prototype = {
                "init": function () {
                    this.dialogElement.innerHTML = this.getDialogTemplate(),
                        document.body.appendChild(this.dialogElement),
                        this.handleBtnClose(),
                        this.handleBtnCancel(),
                        this.handleBtnConfirm()
                },
                "getDialogTemplate": function () {
                    var t = this.wordings[this.lang];
                    return '\n      <div class="ptui-dialog-wrap">\n        <div class="ptui-dialog-wrap__inner">\n          <div class="ptui-dialog-wrap__hd">\n            <i class="ptui-dialog-wrap__icon">\n              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6546 9.51737C12.5486 9.17301 12.4039 8.77144 12.2573 8.38577L11.7222 7.03817C11.7226 7.02249 11.7293 6.75718 11.7293 6.62034C11.7293 4.31581 10.6512 2.00015 8.00001 2C5.3488 2.00015 4.27067 4.31581 4.27067 6.62034C4.27067 6.75718 4.27734 7.02249 4.27775 7.03817L3.74268 8.38577C3.59612 8.77144 3.45138 9.17301 3.34534 9.51737C2.83972 11.1594 3.00356 11.839 3.12825 11.8542C3.39598 11.8868 4.17016 10.618 4.17016 10.618C4.17016 11.3527 4.54499 12.3115 5.35604 13.0038C5.05265 13.0982 4.68089 13.2434 4.44194 13.4214C4.22723 13.5814 4.25399 13.7445 4.29269 13.8104C4.46263 14.0997 7.20779 13.9951 8.00031 13.905C8.79284 13.9951 11.538 14.0997 11.7079 13.8104C11.7466 13.7445 11.7734 13.5814 11.5587 13.4214C11.3196 13.2433 10.9476 13.0981 10.6441 13.0037C11.4551 12.3114 11.8298 11.3527 11.8298 10.618C11.8298 10.618 12.604 11.8868 12.8717 11.8542C12.9965 11.839 13.1603 11.1594 12.6546 9.51737Z" fill="#CCCCCC"/>\n              </svg>\n            </i>\n            <button class="ptui-dialog-wrap__btn-close" title="关闭">\n              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.69478 8L12 11.3058L11.3045 12L8 8.69491L4.69552 12L4.00001 11.3058L7.30522 8L4 4.69418L4.69551 4L8 7.3051L11.3045 4L12 4.69418L8.69478 8Z" fill="#000000"></path>\n              </svg>\n            </button>\n          </div>\n          <div class="ptui-dialog-wrap__bd">\n            <span class="ptui-dialog-wrap__text-title">'.concat(t.title, '</span>\n            <span class="ptui-dialog-wrap__text-content">').concat(t.description, '</span>\n          </div>\n          <div class="ptui-dialog-wrap__ft">\n            <button class="ptui-dialog-wrap__btn ptui-dialog-wrap__btn-cancel">').concat(t.btnCancel, '</button>\n            <button class="ptui-dialog-wrap__btn ptui-dialog-wrap__btn-confirm">').concat(t.btnConfirm, '</button>\n          </div>\n        </div>\n        <div class="ptui-dialog-wrap__mask"></div>\n      </div>\n    ')
                },
                "handleBtnClose": function () {
                    var t = this;
                    this.dialogElement.querySelector(".ptui-dialog-wrap__btn-close").addEventListener("click", function () {
                        t.destroy()
                    }, !1)
                },
                "handleBtnCancel": function () {
                    var t = this;
                    this.dialogElement.querySelector(".ptui-dialog-wrap__btn-cancel").addEventListener("click", function () {
                        t.destroy()
                    }, !1)
                },
                "handleBtnConfirm": function () {
                    var t = this;
                    this.dialogElement.querySelector(".ptui-dialog-wrap__btn-confirm").addEventListener("click", function () {
                        t.destroy()
                    }, !1)
                },
                "destroy": function () {
                    this.dialogElement.parentElement.removeChild(this.dialogElement)
                }
            }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.ToggleManager = void 0;
        var o = (i.prototype.featureEnable = function (t) {
            return !(t !== this.FEATURE_KEYS.QR_LOGIN_XHR || !this.uid || this.uid.slice(-1) !== this.DEFAULT_SUFFIX)
        }
            ,
            i);

        function i(t, e) {
            this.DEFAULT_SUFFIX = "2",
                this.FEATURE_KEYS = {
                    "QR_LOGIN_XHR": "QR_LOGIN_XHR"
                },
                this.uid = t,
                this.userAgent = e
        }

        e.ToggleManager = o
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.jsonp = function (t, e) {
                var o, i, r, n = e.prefix || "__jp", a = e.param || "callback", u = e.timeout || 15e3,
                    s = document.getElementsByTagName("script")[0] || document.head, l = n + f++;
                console.log("jsonp url=" + t + " timeout=" + u);
                var c = function c() {
                    o && o.parentNode && o.parentNode.removeChild(o),
                        window[l] = d,
                    i && clearTimeout(i)
                };
                return {
                    "promise": new Promise(function (n, e) {
                            u && (i = window.setTimeout(function () {
                                console.log("url " + t + " timeout"),
                                    c(),
                                    e(new Error("Timeout"))
                            }, u)),
                                window[l] = function () {
                                    for (var t = [], e = 0; e < arguments.length; e++)
                                        t[e] = arguments[e];
                                    c(),
                                        1 === t.length && "object" == typeof t[0] ? n(t[0]) : n(t)
                                }
                                ,
                                t = (t += (~t.indexOf("?") ? "&" : "?") + a + "=" + encodeURIComponent(l)).replace("?&", "?"),
                                (o = document.createElement("script")).src = t,
                                o.onerror = function (t) {
                                    this.onerror = null,
                                        console.log("script onerror", t),
                                    window[l] && (c(),
                                        e(new Error("Error")))
                                }
                                ,
                                s.parentNode.insertBefore(o, s),
                                r = function r() {
                                    window[l] && (c(),
                                        e(new Error("Canceled")))
                                }
                        }
                    ),
                    "cancel": r
                }
            }
        ;
        var f = 0;

        function d() {
        }
    }
]);


var a = o(getsign(12))
    , u = o(getsign(13))
    , s = o(getsign(5));

function o(t) {
    return t && t.__esModule ? t : {
        "default": t
    }
}

i = 1,
    r = 8,
    f = 32;

function c(t, e) {
    t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
    for (var n = 1732584193, o = -271733879, i = -1732584194, r = 271733878, a = 0; a < t.length; a += 16) {
        var u = n
            , s = o
            , l = i
            , c = r
            , n = p(n, o, i, r, t[a + 0], 7, -680876936)
            , r = p(r, n, o, i, t[a + 1], 12, -389564586)
            , i = p(i, r, n, o, t[a + 2], 17, 606105819)
            , o = p(o, i, r, n, t[a + 3], 22, -1044525330);
        n = p(n, o, i, r, t[a + 4], 7, -176418897),
            r = p(r, n, o, i, t[a + 5], 12, 1200080426),
            i = p(i, r, n, o, t[a + 6], 17, -1473231341),
            o = p(o, i, r, n, t[a + 7], 22, -45705983),
            n = p(n, o, i, r, t[a + 8], 7, 1770035416),
            r = p(r, n, o, i, t[a + 9], 12, -1958414417),
            i = p(i, r, n, o, t[a + 10], 17, -42063),
            o = p(o, i, r, n, t[a + 11], 22, -1990404162),
            n = p(n, o, i, r, t[a + 12], 7, 1804603682),
            r = p(r, n, o, i, t[a + 13], 12, -40341101),
            i = p(i, r, n, o, t[a + 14], 17, -1502002290),
            n = h(n, o = p(o, i, r, n, t[a + 15], 22, 1236535329), i, r, t[a + 1], 5, -165796510),
            r = h(r, n, o, i, t[a + 6], 9, -1069501632),
            i = h(i, r, n, o, t[a + 11], 14, 643717713),
            o = h(o, i, r, n, t[a + 0], 20, -373897302),
            n = h(n, o, i, r, t[a + 5], 5, -701558691),
            r = h(r, n, o, i, t[a + 10], 9, 38016083),
            i = h(i, r, n, o, t[a + 15], 14, -660478335),
            o = h(o, i, r, n, t[a + 4], 20, -405537848),
            n = h(n, o, i, r, t[a + 9], 5, 568446438),
            r = h(r, n, o, i, t[a + 14], 9, -1019803690),
            i = h(i, r, n, o, t[a + 3], 14, -187363961),
            o = h(o, i, r, n, t[a + 8], 20, 1163531501),
            n = h(n, o, i, r, t[a + 13], 5, -1444681467),
            r = h(r, n, o, i, t[a + 2], 9, -51403784),
            i = h(i, r, n, o, t[a + 7], 14, 1735328473),
            n = g(n, o = h(o, i, r, n, t[a + 12], 20, -1926607734), i, r, t[a + 5], 4, -378558),
            r = g(r, n, o, i, t[a + 8], 11, -2022574463),
            i = g(i, r, n, o, t[a + 11], 16, 1839030562),
            o = g(o, i, r, n, t[a + 14], 23, -35309556),
            n = g(n, o, i, r, t[a + 1], 4, -1530992060),
            r = g(r, n, o, i, t[a + 4], 11, 1272893353),
            i = g(i, r, n, o, t[a + 7], 16, -155497632),
            o = g(o, i, r, n, t[a + 10], 23, -1094730640),
            n = g(n, o, i, r, t[a + 13], 4, 681279174),
            r = g(r, n, o, i, t[a + 0], 11, -358537222),
            i = g(i, r, n, o, t[a + 3], 16, -722521979),
            o = g(o, i, r, n, t[a + 6], 23, 76029189),
            n = g(n, o, i, r, t[a + 9], 4, -640364487),
            r = g(r, n, o, i, t[a + 12], 11, -421815835),
            i = g(i, r, n, o, t[a + 15], 16, 530742520),
            n = m(n, o = g(o, i, r, n, t[a + 2], 23, -995338651), i, r, t[a + 0], 6, -198630844),
            r = m(r, n, o, i, t[a + 7], 10, 1126891415),
            i = m(i, r, n, o, t[a + 14], 15, -1416354905),
            o = m(o, i, r, n, t[a + 5], 21, -57434055),
            n = m(n, o, i, r, t[a + 12], 6, 1700485571),
            r = m(r, n, o, i, t[a + 3], 10, -1894986606),
            i = m(i, r, n, o, t[a + 10], 15, -1051523),
            o = m(o, i, r, n, t[a + 1], 21, -2054922799),
            n = m(n, o, i, r, t[a + 8], 6, 1873313359),
            r = m(r, n, o, i, t[a + 15], 10, -30611744),
            i = m(i, r, n, o, t[a + 6], 15, -1560198380),
            o = m(o, i, r, n, t[a + 13], 21, 1309151649),
            n = m(n, o, i, r, t[a + 4], 6, -145523070),
            r = m(r, n, o, i, t[a + 11], 10, -1120210379),
            i = m(i, r, n, o, t[a + 2], 15, 718787259),
            o = m(o, i, r, n, t[a + 9], 21, -343485551),
            n = _(n, u),
            o = _(o, s),
            i = _(i, l),
            r = _(r, c)
    }
    return 16 == f ? Array(o, i) : Array(n, o, i, r)
}

function d(t, e, n, o, i, r) {
    return _((r = _(_(e, t), _(o, r))) << (i = i) | r >>> 32 - i, n)
}

function p(t, e, n, o, i, r, a) {
    return d(e & n | ~e & o, t, e, i, r, a)
}

function h(t, e, n, o, i, r, a) {
    return d(e & o | n & ~o, t, e, i, r, a)
}

function g(t, e, n, o, i, r, a) {
    return d(e ^ n ^ o, t, e, i, r, a)
}

function m(t, e, n, o, i, r, a) {
    return d(n ^ (e | ~o), t, e, i, r, a)
}

function _(t, e) {
    var n = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
}

function y(t) {
    for (var e = Array(), n = (1 << r) - 1, o = 0; o < t.length * r; o += r)
        e[o >> 5] |= (t.charCodeAt(o / r) & n) << o % 32;
    return e
}

function v(t) {
    for (var e = i ? "0123456789ABCDEF" : "0123456789abcdef", n = "", o = 0; o < 4 * t.length; o++)
        n += e.charAt(t[o >> 2] >> o % 4 * 8 + 4 & 15) + e.charAt(t[o >> 2] >> o % 4 * 8 & 15);
    return n
}

function l(t) {
    return v(c(y(t = t), t.length * r))
}

function w(t) {
    for (var e = [], n = 0; n < t.length; n += 2)
        e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)));
    return e.join("")
}

function getEncryption(t, e, n, o) {
    n = n || "",
        t = t || "";
    for (var o = o ? t : l(t), t = l(w(o) + e), n = u["default"].strToBytes(n.toUpperCase(), !0), i = Number(n.length / 2).toString(16); i.length < 4;)
        i = "0" + i;
    u["default"].initkey(t),
        n = u["default"].encrypt(o + u["default"].strToBytes(e) + i + n),
        u["default"].initkey("");
    for (var r = Number(n.length / 2).toString(16); r.length < 4;)
        r = "0" + r;
    return n = a["default"].rsa_encrypt(w(r + n)),
        setTimeout(function () {
            !function (t, e) {
                if (!(Math.random() > (e || 1)))
                    try {
                        var n = location.protocol + "//ui.ptlogin2.qq.com/cgi-bin/report?id=" + t;
                        document.createElement("img").src = n
                    } catch (o) {
                    }
            }(488358, 1)
        }, 0),
        s["default"].encode(w(n)).replace(/[\/\+=]/g, function (t) {
            return {
                "/": "-",
                "+": "*",
                "=": "_"
            }[t]
        })
}

e = '12345'  //密码
salt = '\\x00\\x00\\x00\\x00\\x00\\x01[8'
verifycode = '@FO4'
isSafe = undefined
p = getEncryption(e, salt, verifycode, isSafe)
console.log(p);      //密码加密


//下面还未扣完,其余参数加密
function ppp(t) {
    return t && t.__esModule ? t : {
        "default": t
    }
};
k = ppp(getsign(1))
// console.log(k)
T = {
    "str": {
        "no_uin": "你还没有输入帐号！",
        "no_pwd": "你还没有输入密码！",
        "no_vcode": "你还没有输入验证码！",
        "inv_uin": "请输入正确的帐号！",
        "inv_vcode": "请输入完整的验证码！",
        "qlogin_expire": "你所选择号码对应的QQ已经失效，请检查该号码对应的QQ是否已经被关闭。",
        "other_login": "帐号登录",
        "h_pt_login": "帐号密码登录",
        "otherqq_login": "QQ帐号密码登录",
        "onekey_return": "返回扫码登录"
    },
    "ptui": {
        "s_url": "https://wx.mail.qq.com/list/readtemplate?name=login_jump.html&target=",
        "proxy_url": "https://mail.qq.com/proxy.html",
        "jumpname": "",
        "mibao_css": "",
        "defaultUin": "",
        "lockuin": 0,
        "href": "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?target=self&appid=522005705&daid=4&s_url=https://wx.mail.qq.com/list/readtemplate?name=login_jump.html%26target=&style=25&low_login=1&proxy_url=https://mail.qq.com/proxy.html&need_qr=0&hide_border=1&border_radius=0&self_regurl=http://zc.qq.com/chs/index.html?type=1&app_id=11005?t=regist&pt_feedback_link=http://support.qq.com/discuss/350_1.shtml&css=https://res.mail.qq.com/zh_CN/htmledition/style/ptlogin_input_for_xmail56dc25.css",
        "login_sig": "",
        "clientip": "",
        "serverip": "",
        "version": "202205261307",
        "ptui_version": "22052613",
        "isHttps": false,
        "cssPath": "https://ui.ptlogin2.qq.com/style.ssl/25",
        "domain": "qq.com",
        "fromStyle": null,
        "pt_3rd_aid": "0",
        "appid": "522005705",
        "lang": "2052",
        "style": "25",
        "low_login": "1",
        "daid": "4",
        "regmaster": "",
        "enable_qlogin": "1",
        "noAuth": "0",
        "target": 0,
        "csimc": "0",
        "csnum": "0",
        "authid": "0",
        "auth_mode": "0",
        "pt_qzone_sig": "0",
        "pt_light": "0",
        "pt_vcode_v1": "1",
        "pt_ver_md5": "000D64FF6AF2E4247B21E209EB22A1DBCF002087B988CCCCD4B51233",
        "gzipEnable": "1"
    }
}
regeneratorRuntime={}
regeneratorRuntime.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y,
                        r(t, o, "GeneratorFunction")),
                        t.prototype = Object.create(w),
                        t
                    }
q = {
    "toggleManager": null,
    "deviceId": "",
    "smsCheck": "",
    "needSms": !1,
    "hasVCSuccess": !1,
    "account": "",
    "at_account": "",
    "uin": "",
    "salt": "",
    "checkState": !1,
    "lastCheckAccount": "",
    "needVc": !1,
    "vcFlag": !1,
    "ckNum": {},
    "action": [0, 0],
    "passwordErrorNum": 1,
    "isIpad": !1,
    "seller_id": 703010802,
    "checkUrl": "",
    "loginUrl": "",
    "verifycodeUrl": "",
    "huatuosdk": "https://i.gtimg.cn/huatuo/sdk/huatuoping-sdk.min-0.1.js",
    "needShowNewVc": !1,
    "pt_verifysession": "",
    "checkClock": 0,
    "isCheckTimeout": !1,
    "cntCheckTimeout": 0,
    "qrloginGetTime": 0,
    "qrloginRefreshInterval": 2e3,
    "checkTime": 0,
    "submitTime": 0,
    "defaultTimeoutTime": 5e3,
    "errclock": 0,
    "loginClock": 0,
    "login_param": "target=self&appid=522005705&daid=4&s_url=https://wx.mail.qq.com/list/readtemplate?name=login_jump.html%26target=&style=25&low_login=1&proxy_url=https://mail.qq.com/proxy.html&need_qr=0&hide_border=1&border_radius=0&self_regurl=http://zc.qq.com/chs/index.html?type=1&app_id=11005?t=regist&pt_feedback_link=http://support.qq.com/discuss/350_1.shtml&css=https://res.mail.qq.com/zh_CN/htmledition/style/ptlogin_input_for_xmail56dc25.css",
    "err_m": (0,
        k["default"])("err_m"),
    "low_login_enable": !0,
    "low_login_hour": 720,
    "low_login_isshow": !1,
    "list_index": [-1, 2],
    "keyCode": {
        "UP": 38,
        "DOWN": 40,
        "LEFT": 37,
        "RIGHT": 39,
        "ENTER": 13,
        "TAB": 9,
        "BACK": 8,
        "DEL": 46,
        "F5": 116
    },
    "knownEmail": ['qq.com', 'vip.qq.com', 'foxmail.com'],
    "qrlogin_clock": 0,
    "qrlogin_timeout": 0,
    "qrlogin_timeout_time": 6e5,
    "qrlogin_invalid": !1,
    "isQrLogin": !1,
    "qr_uin": "",
    "qr_nick": "",
    "onekey_verify_timeout": 36e5,
    "onekeyVerifyClock": 0,
    "dftImg": "",
    "need_hide_operate_tips": !0,
    "js_type": 1,
    "xuiState": 1,
    "delayTime": 5e3,
    "delayMonitorId": "294059",
    "hasSubmit": !1,
    "isdTime": {},
    "authUin": "",
    "authSubmitUrl": "",
    "loginState": 1,
    "aqScanLink": function () {
        var t;
        switch ('2052') {
            case "2052":
                t = "立刻扫描";
                break;
            case "1028":
                t = "立即掃描";
                break;
            case "1033":
                t = "Scan now"
        }
        return "<a href='javascript:void(0)'; onclick='pt.plogin.switch_qrlogin()'>".concat(t, "</a>")
    }
    (),
    "isNewQr": !1,
    "hasNoQlogin": !1,
    "checkRet": -1,
    "cap_cd": 0,
    "authTimes": 0,
    "checkErr": {
        "2052": "网络繁忙，请稍后重试。",
        "1028": "網絡繁忙，請稍後重試。",
        "1033": "The network is busy, please try again later."
    },
    "isTenpay": 34 == '25',
    "isMailLogin": 25 == '25' || 30 == T.ptui.style,
    "captcha": null,
    "isPwdFirst": function () {
        if (T.ptui.lockuin)
            return !0;
        if ("0" == k["default"].bom.query("pt_pwd"))
            return !1;
        var t = [/\bqcloud\.com$/, /\bcloud\.tencent\.com$/, /\b110\.qq\.com$/, /\baq\.qq\.com$/, /\breg\.t\.qq\.com$/, /\bb\.qq\.com$/, /\bmail\.qq\.com$/, /\bqmail\.com$/],
            e = (0,
                o["default"])(document.referrer);
        for (n in t)
            if (t[n] && t[n].test && t[n].test(e.hostname))
                return !0;
        if ("1" == k["default"].bom.query("pt_pwd"))
            for (var n in t = [/\bjiazhang.qq.com$/, /\bqidian.qq.com$/])
                if (t[n] && t[n].test && t[n].test(e.hostname))
                    return !0;
        return !1
    },
    "isQcloud": function () {
        return !!(0,
            o["default"])(document.referrer).hostname.match(/\b(qcloud\.com|cloud\.tencent\.com)$/)
    },
    "isNewStyle": 40 <= T.ptui.style,
    "isTim": 41 == T.ptui.style,
    "switchpageCount": 0,
    "isUIStyle": T.ptui.fromStyle,
    "domFocus": function (t) {
        try {
            window.setTimeout(function () {
                t.focus()
            }, 0)
        } catch (e) {
        }
    },
    "formFocus": function () {
        var t = document.loginform;
        try {
            var e = t.u,
                n = t.p,
                o = t.verifycode;
            if ("" == e.value)
                return void e.focus();
            if ("" == n.value)
                return void n.focus();
            "" == o.value && o.focus()
        } catch (i) {
        }
    },
    "getAuthUrl": function () {
        var t = (T.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + T.ptui.domain + "/pt4_auth?daid=" + T.ptui.daid + "&appid=" + T.ptui.appid + "&auth_token=" + k["default"].str.time33(k["default"].cookie.get("supertoken")),
            e = T.ptui.s_url;
        return /^https/.test(e) && (t += "&pt4_shttps=1"),
        "1" == T.ptui.pt_qzone_sig && (t += "&pt_qzone_sig=1"),
            t
    },
    "auth": function () {
        q.authTimes = q.authTimes + 1,
            T.ptui.isHttps = k["default"].check.isHttps();
        var t = q.getAuthUrl(),
            e = k["default"].cookie.get("superuin");
        T.ptui.daid && "1" != T.ptui.noAuth && !q.isTim && "" != e && "" == T.ptui.regmaster && "0" == T.ptui.pt_3rd_aid && k["default"].http.loadScript(t)
    },
    "initAuthInfo": function (t) {
        var e = k["default"].cookie.get("uin").replace(/^o0*/, ""),
            n = k["default"].str.utf8ToUincode(k["default"].cookie.get("ptnick_" + e)) || e;
        (0,
            k["default"])("auth_uin").innerHTML = k["default"].str.encodeHtml(e),
            (0,
                k["default"])("auth_nick").innerHTML = k["default"].str.encodeHtml(n),
            (0,
                k["default"])("auth_area").setAttribute("authUrl", k["default"].str.encodeHtml(t)),
            k["default"].http.loadScript((T.ptui.isHttps ? "https://ssl.ptlogin2." : "http://ptlogin2.") + T.ptui.domain + "/getface?appid=" + T.ptui.appid + "&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + e + "&r=" + Math.random())
    },
    "showAuth": function (t, e) {
        2 == t && k["default"].css.hide((0,
            k["default"])("cancleAuthOuter")),
            q.initAuthInfo(e);
        e = T.ptui.style;
        22 != e && 23 != e || (k["default"].css.hide((0,
            k["default"])("header")),
            k["default"].css.hide((0,
                k["default"])("authHeader"))),
            (0,
                k["default"])("authLogin").style.height = (0,
                k["default"])("login").offsetHeight - (11 == e ? 2 : 4) + "px",
            k["default"].css.show((0,
                k["default"])("authLogin")),
            q.ptui_notifySize("login")
    },
    "cancleAuth": function () {
        var t = T.ptui.style;
        22 != t && 23 != t || (k["default"].css.show((0,
            k["default"])("header")),
            k["default"].css.show((0,
                k["default"])("authHeader"))),
            k["default"].css.hide((0,
                k["default"])("authLogin")),
            q.ptui_notifySize("login")
    },
    "authLogin": function () {
        s["default"].authLoginSubmit()
    },
    "authMouseDowm": function () {
        var t = (0,
            k["default"])("auth_mengban");
        t && (t.className = "face_mengban")
    },
    "authMouseUp": function () {
        var t = (0,
            k["default"])("auth_mengban");
        t && (t.className = "")
    },
    "onQloginSwitch": function (t) {
        t.preventDefault(),
            q.switchpage(C.LoginState.QLogin),
            k["default"].report.monitor("331284", .05)
    },
    "switchpage": function (t, e) {
        switch (S.logger.info("plogin.switchpage()", "flag=".concat(t, " force=").concat(e)),
            q.switchpageCount = q.switchpageCount + 1,
            q.loginState = t,
        e || q.hide_err(),
            t) {
            case 1:
                q.hideQrTips(),
                    k["default"].css.hide((0,
                        k["default"])("bottom_qlogin")),
                    k["default"].css.hide((0,
                        k["default"])("qlogin")),
                    k["default"].css.show((0,
                        k["default"])("web_qr_login")),
                (0,
                    k["default"])("qrswitch") && k["default"].css.show((0,
                    k["default"])("qrswitch")),
                q.isNewStyle || ((0,
                    k["default"])("switcher_plogin").className = "switch_btn_focus",
                    (0,
                        k["default"])("switcher_qlogin").className = "switch_btn"),
                "ff" != k["default"].browser("type") && window.setTimeout(function () {
                    q.formFocus()
                }, 0),
                q.isNewQr && q.cancle_qrlogin(),
                q.armSafeEdit && q.armSafeEdit.everSafe && (q.armSafeEdit.lockToggle(),
                    q.armSafeEdit.everSafe = !1),
                0 != q.onekeyVerifyClock && q.onekeyVerify("normal"),
                    q.hasCheck(!1);
                break;
            case 2:
                k["default"].css.hide((0,
                    k["default"])("web_qr_login")),
                    k["default"].css.show((0,
                        k["default"])("qlogin")),
                q.isNewStyle || ((0,
                    k["default"])("switcher_plogin").className = "switch_btn",
                    (0,
                        k["default"])("switcher_qlogin").className = "switch_btn_focus"),
                (0,
                    k["default"])("qrswitch") && k["default"].css.hide((0,
                    k["default"])("qrswitch")),
                    k["default"].css.show((0,
                        k["default"])("bottom_qlogin")),
                    s["default"].focusHeader(),
                q.armSafeEdit.isSafe && (q.armSafeEdit.lockToggle(),
                    q.armSafeEdit.everSafe = !0),
                    s["default"].buildQloginDom()
        }
        q.ptui_notifySize("login")
    },
    "detectCapsLock": function (t) {
        var e = t.keyCode || t.which,
            t = t.shiftKey || 16 == e || !1;
        return !!(65 <= e && e <= 90 && !t || 97 <= e && e <= 122 && t)
    },
    "generateEmailTips": function (t) {
        for (var e = t.indexOf("@"), n = "", n = -1 == e ? t : t.substring(0, e), o = [], i = 0, r = q.knownEmail.length; i < r; i++)
            o.push(n + "@" + q.knownEmail[i]);
        for (var a = [], u = 0, r = o.length; u < r; u++)
            -1 < o[u].indexOf(t) && a.push(k["default"].str.encodeHtml(o[u]));
        return 19 == T.ptui.style && (a = []),
            a
    },
    "createEmailTips": function (t) {
        var e,
            n = q.generateEmailTips(t),
            o = n.length,
            i = [];
        if (0 == (o = Math.min(o, 4)))
            return q.list_index[0] = -1,
                void q.hideEmailTips();
        for (var r = 0; r < o; r++) {
            if (t == n[r])
                return void q.hideEmailTips();
            e = "emailTips_" + r,
                0 == r ? i.push("<li id=" + e + " class='hover' >" + n[r] + "</li>") : i.push("<li id=" + e + ">" + n[r] + "</li>")
        }
        (0,
            k["default"])("email_list").innerHTML = i.join(" "),
            q.list_index[0] = 0
    },
    "showEmailTips": function () {
        k["default"].css.show((0,
            k["default"])("email_list")),
            q.__isShowEmailTips = !0
    },
    "hideEmailTips": function () {
        k["default"].css.hide((0,
            k["default"])("email_list")),
            q.__isShowEmailTips = !1
    },
    "setUrl": function () {
        var t = T.ptui.domain,
            e = k["default"].check.isHttps() && k["default"].check.isSsl();
        q.checkUrl = (T.ptui.isHttps ? "https://ssl." : "http://check.") + "ptlogin2." + t + "/check",
            q.loginUrl = (T.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + t + "/",
            q.verifycodeUrl = (T.ptui.isHttps ? "https://ssl." : "http://") + "captcha." + t + "/getimage",
        e && "qq.com" != t && "tenpay.com" != t && (q.verifycodeUrl = "https://ssl.ptlogin2." + t + "/ptgetimage"),
            q.dftImg = T.ptui.isHttps ? "https://ui.ptlogin2.qq.com/style/0/images/1.gif" : "http://imgcache.qq.com/ptlogin/v4/style/0/images/1.gif"
    },
    "VCCallback": function (t) {
        setTimeout(function () {
            0 == t.ret ? q.vcodeMessage(t) : q.hideVC()
        }, 0)
    },
    "init": (m = g(regeneratorRuntime.mark(function v() {
        return regeneratorRuntime.wrap(function (t) {
            for (; ;)
                switch (t.prev = t.next) {
                    case 0:
                        return q.toggleManager = new f.ToggleManager(window.g_aegisUid, window.navigator.userAgent),
                            T.ptui.login_sig = T.ptui.login_sig || k["default"].cookie.get("pt_login_sig"),
                            q.setLowloginCheckbox(),
                            q.isNewQr = !(25 != T.ptui.style && 32 != T.ptui.style && 33 != T.ptui.style && !q.isNewStyle && !q.isTenpay),
                            T.ptui.isHttps = k["default"].check.isHttps(),
                            q.setUrl(),
                            q.bindEvent(),
                        (0,
                            k["default"])("login_button") && ((0,
                            k["default"])("login_button").disabled = !1),
                            q.set_default_uin(T.ptui.defaultUin),
                        q.isTenpay && T.ptui.defaultUin && (T.ptui.lockuin = 1),
                        k["default"].check.is_weibo_appid(T.ptui.appid) && (0,
                            k["default"])("u") && ((0,
                            k["default"])("u").style.imeMode = "auto"),
                        T.ptui.isHttps && (q.delayTime = 7e3,
                            q.delayMonitorId = "294060"),
                            q.hideVipLink(),
                        "0" != T.ptui.pt_3rd_aid && s["default"].detectPCMgr(),
                            T.ptui.lockuin ? q.doLockuin() : (s["default"].fetchOnekeyList(),
                                s["default"].fetchQloginList()),
                        !(q.isTenpay && 1093 <= k["default"].sso_ver) || q.isWin8() && k["default"].suportActive() || q.armSafeEdit(),
                            s["default"].buildUnifiedQloginList(),
                            t.next = 19,
                            i["default"].getDeviceId();
                    case 19:
                        q.deviceId = t.sent,
                            window.setTimeout(function () {
                                q.domLoad(),
                                    S.logger.info("plogin.init()", "domLoaded, pt.ptui=".concat(k["default"].str.json2str(T.ptui, null, 4)))
                            }, 100);
                    case 21:
                    case "end":
                        return t.stop()
                }
        }, v)
    })),
        function () {
            return m.apply(this, arguments)
        }),
    "isWin8": function () {
        var t = navigator.userAgent.toLowerCase();
        return -1 < t.indexOf("windows nt 6.2") || -1 < t.indexOf("windows nt 6.3")
    },
    "aq_patch": function () {
        Math.random() < .05 && !T.ptui.isHttps && k["default"].http.loadScript("http://mat1.gtimg.com/www/js/common_v2.js", function () {
            if ("function" == typeof checkNonTxDomain)
                try {
                    checkNonTxDomain(1, 5)
                } catch (t) {
                }
        })
    },
    "hideVipLink": function () {
        var t = (0,
                k["default"])("vip_link2"),
            e = (0,
                k["default"])("vip_dot");
        !t || !e || k["default"].check.needVip(T.ptui.appid) && "2052" == T.ptui.lang || (k["default"].css.addClass(t, "hide"),
            k["default"].css.addClass(e, "hide"))
    },
    "set_default_uin": function (t) {
        "0" != t && (t || (t = k["default"].cookie.get("ptui_loginuin"),
        k["default"].check.is_weibo_appid(T.ptui.appid) || !k["default"].check.isNick(t) && !k["default"].check.isName(t) || (t = 0 == (t = +k["default"].cookie.get("pt2gguin").replace(/^o/, "")) ? "" : t)),
        ((0,
            k["default"])("u").value = t) && (k["default"].css.hide((0,
            k["default"])("uin_tips")),
        (0,
            k["default"])("uin_del") && k["default"].css.show((0,
            k["default"])("uin_del")),
            q.set_account()))
    },
    "doLockuin": function () {
        q.switchpage(C.LoginState.PLogin, !0),
            (0,
                k["default"])("u").readOnly = !0,
        (0,
            k["default"])("qlogin_entry") && ((0,
            k["default"])("qlogin_entry").style.display = "none");
        var t = (0,
            k["default"])("uinArea");
        k["default"].css.hasClass(t, "default") || k["default"].css.addClass(t, "default");
        t = (0,
            k["default"])("uin_del");
        t && t.parentNode.removeChild(t),
            k["default"].e.remove((0,
                k["default"])("switcher_qlogin"), "click", q.onQloginSwitch),
            (0,
                k["default"])("switcher_qlogin").className = "switch_btn_disabled",
            (0,
                k["default"])("p").focus()
    },
    "set_account": function () {
        var t = k["default"].str.trim((0,
                k["default"])("u").value),
            e = T.ptui.appid;
        if (q.account = t,
            q.at_account = t,
            k["default"].check.isQiyeQQ800(t))
            return q.at_account = "@" + t,
                !0;
        if (k["default"].check.is_weibo_appid(e)) {
            if (k["default"].check.isQQ(t) || k["default"].check.isMail(t))
                return !0;
            if (k["default"].check.isNick(t) || k["default"].check.isName(t))
                return q.at_account = "@" + t,
                    !0;
            if (k["default"].check.isPhone(t))
                return q.at_account = "@" + t.replace(/^(86|886)/, ""),
                    !0;
            if (k["default"].check.isSeaPhone(t))
                return q.at_account = "@00" + t.replace(/^(00)/, ""),
                /^(@0088609)/.test(q.at_account) && (q.at_account = q.at_account.replace(/^(@0088609)/, "@008869")),
                    !0
        } else {
            if (k["default"].check.isQQ(t) || k["default"].check.isMail(t))
                return !0;
            if (k["default"].check.isPhone(t))
                return q.at_account = "@" + t.replace(/^(86|886)/, ""),
                    !0;
            if (k["default"].check.isNick(t))
                return (0,
                    k["default"])("u").value = t + "@qq.com",
                    q.account = t + "@qq.com",
                    q.at_account = t + "@qq.com",
                    !0
        }
        return k["default"].check.isForeignPhone(t) && (q.at_account = "@" + t),
            !0
    },
    "adjustErrTips": function () {
        var t,
            e,
            n;
        q.isNewStyle && (t = (0,
            k["default"])("error_tips"),
            e = (0,
                k["default"])("loading_tips"),
        "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin_tips_0")).display && "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin")).display && (n = (0,
            k["default"])("qlogin_tips_0")),
        "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin_tips_1")).display && "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin")).display && (n = (0,
            k["default"])("qlogin_tips_1")),
        "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin_tips_2")).display && "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin")).display && (n = (0,
            k["default"])("qlogin_tips_2")),
        "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin_tips_3")).display && "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin")).display && (n = (0,
            k["default"])("qlogin_tips_3")),
        (0,
            k["default"])("qlogin_tips_4") && "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin_tips_4")).display && "block" == k["default"].css.getComputedStyle((0,
            k["default"])("qlogin")).display && (n = (0,
            k["default"])("qlogin_tips_4")),
        "block" == k["default"].css.getComputedStyle((0,
            k["default"])("tips")).display && "block" == k["default"].css.getComputedStyle((0,
            k["default"])("web_qr_login")).display && (n = (0,
            k["default"])("tips")),
            t.style.top = k["default"].css.getOffsetPosition(n).top + parseInt(k["default"].css.getCurrentPixelStyle(n, "height"), 10) + "px",
            e.style.top = k["default"].css.getOffsetPosition(n).top + parseInt(k["default"].css.getCurrentPixelStyle(n, "height"), 10) + "px")
    },
    "show_err": function (t, e) {
        var n;
        t ? q.smsCheck || ((n = (0,
            k["default"])("onekey_step2")) && "block" == k["default"].css.getComputedStyle(n).display ? (0,
            k["default"])("onekey_tips").innerHTML = t : (q.hideLoading(),
            q.adjustErrTips(),
            k["default"].css.show((0,
                k["default"])("error_tips")),
            q.err_m.innerHTML = t),
            clearTimeout(q.errclock),
        e || (q.errclock = setTimeout("pt.plogin.hide_err()", 5e3))) : q.hideLoading()
    },
    "hide_err": function () {
        var t = (0,
            k["default"])("onekey_step2");
        t && "block" == k["default"].css.getComputedStyle(t).display ? (0,
            k["default"])("onekey_tips").innerHTML = "" : (k["default"].css.hide((0,
            k["default"])("error_tips")),
            q.err_m.innerHTML = "")
    },
    "showAssistant": function (t) {
        if ("2052" == T.ptui.lang) {
            q.hideLoading(),
                q.adjustErrTips(),
                k["default"].css.show((0,
                    k["default"])("error_tips"));
            var e = "";
            switch (t) {
                case 0:
                    e = "快速登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                        k["default"].report.monitor("315785");
                    break;
                case 1:
                    e = "快速登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                        k["default"].report.monitor("315786");
                    break;
                case 2:
                    e = "登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                        k["default"].report.monitor("315787");
                    break;
                case 3:
                    e = "快速登录异常，试试 {http://im.qq.com/qq/2013/,升级QQ,onclick='$.report.monitor(326049);'} 修复",
                        k["default"].report.monitor("326046");
                    break;
                case 4:
                    e = "快速登录异常，试试 {http://im.qq.com/macqq/index.shtml#im.qqformac.plusdown,安装插件,} 并重启浏览器"
            }
            q.err_m.innerHTML = e.replace(/{([^,]+?),([^,]+?),(.*?)}/, "<a class='tips_link' style='color: #29B1F1' href='$1' target='_blank' $3>$2</a>")
        }
    },
    "showGuanjiaTips": function () {
        k["default"].initGuanjiaPlugin(),
            k["default"].guanjiaPlugin ? (k["default"].guanjiaPlugin.QMStartUp(16, '/traytip=3 /tipProblemid=1401 /tipSource=18 /tipType=0 /tipIdParam=0 /tipIconUrl="http://dldir2.qq.com/invc/xfspeed/qqpcmgr/clinic/image/tipsicon_qq.png" /tipTitle="QQ快速登录异常?" /tipDesc="不能用已登录的QQ号快速登录，只能手动输入账号密码，建议用电脑诊所一键修复。"'),
                k["default"].report.monitor("316548")) : k["default"].report.monitor("316549")
    },
    "showLoading": function (t) {
        q.isNewStyle ? q.adjustErrTips() : (t = q.loginState == C.LoginState.QLogin ? 10 : 20,
            (0,
                k["default"])("loading_tips").style.top = t + "px"),
            q.hide_err(),
            k["default"].css.show((0,
                k["default"])("loading_tips"))
    },
    "hideLoading": function () {
        k["default"].css.hide((0,
            k["default"])("loading_tips"))
    },
    "showLowList": function () {
        var t = (0,
            k["default"])("combox_list");
        t && (k["default"].css.show(t),
            q.low_login_isshow = !0)
    },
    "hideLowList": function () {
        var t = (0,
            k["default"])("combox_list");
        t && (k["default"].css.hide(t),
            q.low_login_isshow = !1)
    },
    "u_focus": function () {
        "" == (0,
            k["default"])("u").value && (k["default"].css.show((0,
            k["default"])("uin_tips")),
            (0,
                k["default"])("uin_tips").className = "input_tips_focus"),
            (0,
                k["default"])("u").parentNode.className = "inputOuter_focus"
    },
    "u_blur": function () {
        var t,
            e;
        q.__isShowEmailTips || (/^\+/.test(this.value) && (this.value = this.value.replace(/^\+/, ""),
        /^00/.test(this.value) || (this.value = "00" + this.value)),
            "" == (t = (0,
                k["default"])("u")).value ? (e = (0,
                k["default"])("uin_tips"),
                k["default"].css.show(e),
                e.className = "input_tips") : (q.set_account(),
                q.check()),
            t.parentNode.className = "inputOuter")
    },
    "u_mouseover": function () {
        "inputOuter_focus" == (0,
            k["default"])("u").parentNode.className || ((0,
            k["default"])("u").parentNode.className = "inputOuter_hover")
    },
    "u_mouseout": function () {
        "inputOuter_focus" == (0,
            k["default"])("u").parentNode.className || ((0,
            k["default"])("u").parentNode.className = "inputOuter")
    },
    "window_blur": function () {
        q.lastCheckAccount = ""
    },
    "u_refresh_dom": function () {
        "" == (0,
            k["default"])("u").value ? (k["default"].css.show((0,
            k["default"])("uin_tips")),
            (0,
                k["default"])("uin_tips").className = "input_tips_focus",
        (0,
            k["default"])("uin_del") && k["default"].css.hide((0,
            k["default"])("uin_del"))) : (k["default"].css.hide((0,
            k["default"])("uin_tips")),
        (0,
            k["default"])("uin_del") && k["default"].css.show((0,
            k["default"])("uin_del")))
    },
    "u_change": function () {
        q.set_account(),
            q.passwordErrorNum = 1,
            q.hasCheck(!1),
            q.hasSubmit = !1
    },
    "list_keydown": function (t, e) {
        var n = (0,
                k["default"])("email_list"),
            o = (0,
                k["default"])("u");
        1 == e && (n = (0,
            k["default"])("combox_list"));
        var i = n.getElementsByTagName("li"),
            r = i.length;
        switch (t.keyCode) {
            case q.keyCode.UP:
                i[q.list_index[e]].className = "",
                    q.list_index[e] = (q.list_index[e] - 1 + r) % r,
                    i[q.list_index[e]].className = "hover";
                break;
            case q.keyCode.DOWN:
                i[q.list_index[e]].className = "",
                    q.list_index[e] = (q.list_index[e] + 1) % r,
                    i[q.list_index[e]].className = "hover";
                break;
            case q.keyCode.ENTER:
                var a = i[q.list_index[e]].innerHTML;
                0 == e && (o.value = k["default"].str.decodeHtml(a)),
                    q.hideEmailTips(),
                    q.hideLowList(),
                    t.preventDefault();
                break;
            case q.keyCode.TAB:
                q.hideEmailTips(),
                    q.hideLowList()
        }
        1 == e && ((0,
            k["default"])("combox_box").innerHTML = i[q.list_index[e]].innerHTML,
            (0,
                k["default"])("low_login_hour").value = i[q.list_index[e]].getAttribute("value"))
    },
    "u_keydown": function (t) {
        k["default"].css.hide((0,
            k["default"])("uin_tips")),
        -1 != q.list_index[0] && q.list_keydown(t, 0)
    },
    "u_keyup": function (t) {
        "" == this.value ? (k["default"].css.show((0,
            k["default"])("uin_tips")),
            (0,
                k["default"])("uin_tips").className = "input_tips_focus",
        (0,
            k["default"])("uin_del") && k["default"].css.hide((0,
            k["default"])("uin_del"))) : (0,
            k["default"])("uin_del") && k["default"].css.show((0,
            k["default"])("uin_del"));
        t = t.keyCode;
        t != q.keyCode.UP && t != q.keyCode.DOWN && t != q.keyCode.ENTER && t != q.keyCode.TAB && t != q.keyCode.F5 && (-1 < (0,
            k["default"])("u").value.indexOf("@") ? (q.showEmailTips(),
            q.createEmailTips((0,
                k["default"])("u").value)) : q.hideEmailTips())
    },
    "email_mousemove": function (t) {
        var e,
            n = t.target;
        "li" == n.tagName.toLowerCase() && ((e = (0,
            k["default"])("emailTips_" + q.list_index[0])) && (e.className = ""),
            n.className = "hover",
            q.list_index[0] = parseInt(n.getAttribute("id").substring(10), 10),
            t.stopPropagation())
    },
    "email_click": function (t) {
        var e;
        "li" == t.target.tagName.toLowerCase() && ((e = (0,
            k["default"])("emailTips_" + q.list_index[0])) && ((0,
            k["default"])("u").value = k["default"].str.decodeHtml(e.innerHTML),
            q.set_account(),
            q.check()),
            q.hideEmailTips(),
            t.stopPropagation())
    },
    "p_focus": function () {
        "" == this.value && (k["default"].css.show((0,
            k["default"])("pwd_tips")),
            (0,
                k["default"])("pwd_tips").className = "input_tips_focus"),
            this.parentNode.className = "inputOuter_focus",
            q.check()
    },
    "p_blur": function () {
        "" == this.value && (k["default"].css.show((0,
            k["default"])("pwd_tips")),
            (0,
                k["default"])("pwd_tips").className = "input_tips"),
            k["default"].css.hide((0,
                k["default"])("caps_lock_tips")),
            this.parentNode.className = "inputOuter"
    },
    "p_mouseover": function () {
        "inputOuter_focus" == (0,
            k["default"])("p").parentNode.className || ((0,
            k["default"])("p").parentNode.className = "inputOuter_hover")
    },
    "p_mouseout": function () {
        "inputOuter_focus" == (0,
            k["default"])("p").parentNode.className || ((0,
            k["default"])("p").parentNode.className = "inputOuter")
    },
    "p_keydown": function () {
        k["default"].css.hide((0,
            k["default"])("pwd_tips"))
    },
    "p_keyup": function () {
        "" == this.value && k["default"].css.show((0,
            k["default"])("pwd_tips"))
    },
    "p_keypress": function (t) {
        q.detectCapsLock(t) ? k["default"].css.show((0,
            k["default"])("caps_lock_tips")) : k["default"].css.hide((0,
            k["default"])("caps_lock_tips"))
    },
    "p_refresh_dom": function () {
        "" == (0,
            k["default"])("p").value ? (k["default"].css.show((0,
            k["default"])("pwd_tips")),
            (0,
                k["default"])("pwd_tips").className = "input_tips_focus") : k["default"].css.hide((0,
            k["default"])("pwd_tips"))
    },
    "vc_focus": function () {
        "" == this.value && (k["default"].css.show((0,
            k["default"])("vc_tips")),
            (0,
                k["default"])("vc_tips").className = "input_tips_focus"),
            this.parentNode.className = "inputOuter_focus"
    },
    "vc_blur": function () {
        "" == this.value && (k["default"].css.show((0,
            k["default"])("vc_tips")),
            (0,
                k["default"])("vc_tips").className = "input_tips"),
            this.parentNode.className = "inputOuter"
    },
    "vc_keydown": function () {
        k["default"].css.hide((0,
            k["default"])("vc_tips"))
    },
    "vc_keyup": function () {
        "" == this.value && k["default"].css.show((0,
            k["default"])("vc_tips"))
    },
    "document_click": function () {
        q.action[0] = q.action[0] + 1,
            q.hideEmailTips(),
            q.hideLowList()
    },
    "document_keydown": function () {
        q.action[1] = q.action[1] + 1
    },
    "setLowloginCheckbox": function () {
        q.isMailLogin && (q.low_login_enable = !1),
        1 == T.ptui.low_login && (q.low_login_enable ? ((0,
            k["default"])("q_low_login_enable").className = "checked",
            (0,
                k["default"])("p_low_login_enable").className = "checked",
            (0,
                k["default"])("auth_low_login_enable").className = "checked") : ((0,
            k["default"])("q_low_login_enable").className = "uncheck",
            (0,
                k["default"])("p_low_login_enable").className = "uncheck",
            (0,
                k["default"])("auth_low_login_enable").className = "uncheck"))
    },
    "checkbox_click": function () {
        q.low_login_enable ? ((0,
            k["default"])("q_low_login_enable").className = "uncheck",
            (0,
                k["default"])("p_low_login_enable").className = "uncheck",
            (0,
                k["default"])("auth_low_login_enable").className = "uncheck") : ((0,
            k["default"])("q_low_login_enable").className = "checked",
            (0,
                k["default"])("p_low_login_enable").className = "checked",
            (0,
                k["default"])("auth_low_login_enable").className = "checked"),
            q.low_login_enable = !q.low_login_enable
    },
    "feedback": function () {
        window.open("https://support.qq.com/products/14800")
    },
    "bind_account": function () {
        k["default"].css.hide((0,
            k["default"])("operate_tips")),
            q.need_hide_operate_tips = !0,
            window.open("https://id.qq.com/index.html#account"),
            k["default"].report.monitor("234964")
    },
    "combox_click": function (t) {
        q.low_login_isshow ? q.hideLowList() : q.showLowList(),
            t.stopPropagation()
    },
    "delUin": function (t) {
        t && k["default"].css.hide(t.target),
            (0,
                k["default"])("u").value = "",
            q.domFocus((0,
                k["default"])("u")),
            q.hasCheck(!1)
    },
    "check_cdn_img": function () {
        var e;
        window.g_cdn_js_fail && !T.ptui.isHttps && ((e = new Image).onload = function () {
            e.onload = null,
                e.onerror = null
        },
            e.onerror = function () {
                e.onload = null;
                var t = (t = (e.onerror = null,
                    k["default"])("main_css").innerHTML).replace(new RegExp("https://imgcache.qq.com/ptlogin/v4/style/", "g"), "https://ui.ptlogin2.qq.com/style/");
                q.insertInlineCss(t),
                    k["default"].report.monitor(312520)
            },
            e.src = "https://imgcache.qq.com/ptlogin/v4/style/20/images/c_icon_1.png")
    },
    "insertInlineCss": function (t) {
        var e;
        document.createStyleSheet ? document.createStyleSheet("").cssText = t : ((e = document.createElement("style")).type = "text/css",
            e.textContent = t,
            document.getElementsByTagName("head")[0].appendChild(e))
    },
    "createLink": function (t) {
        var e = document.createElement("link");
        e.setAttribute("type", "text/css"),
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", t),
            document.getElementsByTagName("head")[0].appendChild(e)
    },
    "checkInputLable": function () {
        try {
            (0,
                k["default"])("u").value && k["default"].css.hide((0,
                k["default"])("uin_tips")),
                window.setTimeout(function () {
                    (0,
                        k["default"])("p").value && k["default"].css.hide((0,
                        k["default"])("pwd_tips"))
                }, 1e3)
        } catch (t) {
        }
    },
    "domLoad": function () {
        if (!q.hasDomLoad) {
            var t,
                e;
            q.hasDomLoad = !0,
            q.isPwdFirst() || q.switchpage(C.LoginState.QLogin),
            "1" == k["default"].bom.query("pt_disable_pwd") && (q.switchpage(C.LoginState.QLogin),
                t = (0,
                    k["default"])("switcher_plogin"),
                e = (0,
                    k["default"])("docs_dotted"),
            t && k["default"].css.hide(t),
            e && k["default"].css.hide(e)),
            "1" == k["default"].bom.query("pt_isdocs") && (o = (0,
                k["default"])("login"),
                k["default"].css.addClass(o, "docsqq")),
                q.checkInputLable(),
                q.checkNPLoad(),
                q.loadQrTipsPic();
            var n,
                o = (0,
                    k["default"])("loading_img");
            o && o.setAttribute("src", o.getAttribute("place_src")),
                q.check_cdn_img(),
                q.ptui_notifySize("login"),
                k["default"].report.monitor("373507&union=256042", .05),
            navigator.cookieEnabled || (k["default"].report.monitor(408084),
            k["default"].cookie.get("ptcz") && k["default"].report.monitor(408085)),
            q.isTenpay && (1093 <= k["default"].sso_ver ? k["default"].report.monitor("451205") : k["default"].report.monitor("451206")),
                q.dottedShow(),
                q.webLoginReport(),
                q.monitorQQNum(),
                q.aq_patch(),
                q.gzipReport(),
                setTimeout(function () {
                    q.isNewStyle && s["default"].hasNoQlogin() && !q.isPwdFirst() && q.showQrTips()
                }, 1e3),
            q.isNewStyle && setTimeout("window.scrollTo(0, 0)", 100),
            !q.isTim || (n = (0,
                k["default"])("bottom_qlogin")) && k["default"].css.hide(n),
            !T.plogin.isOnlyQQLogin() || (n = (0,
                k["default"])("uin_tips")) && (n.innerHTML = k["default"].str.encodeHtml(n.getAttribute("data-onlyqq")));
            var i = (0,
                k["default"])("qr_tips_pic");
            if (i)
                switch (parseInt(T.ptui.lang, 10)) {
                    case 1033:
                        i.style.background = "url(//imgcache.qq.com/ptlogin/v4/style/40/images/scanQRcode.png)";
                        break;
                    case 1028:
                        i.style.background = "url(//imgcache.qq.com/ptlogin/v4/style/40/images/scanQRcode_cht.png)"
                }
            q.isTim || k["default"].http.loadScript("https://ssl.captcha.qq.com/TCaptcha.js", function () {
                q.initNewVerifyCodeUI(),
                    q.formFocus()
            })
        }
    },
    "dottedShow": function () {
        try {
            var t = (0,
                k["default"])("bottom_qlogin");
            if (!t)
                return;
            t = t.getElementsByTagName("span");
            if (!t || 0 == t.length)
                return;
            for (var t = t[t.length - 1], e = t, n = !1; e;) {
                if ("a" == (e.tagName && e.tagName.toLowerCase())) {
                    n = !0;
                    break
                }
                e = e.nextSibling
            }
            n || (t.style.display = "none")
        } catch (o) {
            k["default"].report.nlog("dotted show " + o.message)
        }
    },
    "isOnlyQQLogin": function () {
        return T.plogin.isQcloud() || 527 == T.ptui.daid || "358" === T.ptui.daid
    },
    "checkNPLoad": function () {
        navigator.mimeTypes["application/nptxsso"] && !k["default"].sso_loadComplete && k["default"].checkNPPlugin()
    },
    "gzipReport": function () {
        var n,
            t;
        "1" == T.ptui.gzipEnable || T.ptui.isHttps || q.isUIStyle || (k["default"].report.monitor("455847"),
        (n = k["default"].http.getXHR()) && (t = "/cgi-bin/xver?t=" + Math.random(),
            n.open("get", t),
            n.onreadystatechange = function () {
                if (4 == n.readyState)
                    if (200 <= n.status && n.status < 300 || 304 === n.status || 1223 === n.status || 0 === n.status) {
                        try {
                            var t = document.createElement("script");
                            t.innerHTML = n.responseText,
                                document.getElementsByTagName("head")[0].appendChild(t)
                        } catch (e) {
                        }
                        window._gz || k["default"].report.nlog("gzip探测异常，返回内容：" + n.responseText + "返回码：" + n.status + "uin=" + k["default"].cookie.get("pt2gguin"), "462348")
                    } else
                        k["default"].report.nlog("gzip探测异常，返回内容：" + n.responseText + "返回码：" + n.status + "uin=" + k["default"].cookie.get("pt2gguin"), "462348")
            },
            n.send()))
    },
    "monitorQQNum": function () {
        switch (k["default"].loginQQnum) {
            case 0:
                k["default"].report.monitor("330314", .05);
                break;
            case 1:
                k["default"].report.monitor("330315", .05);
                break;
            case 2:
                k["default"].report.monitor("330316", .05);
                break;
            case 3:
                k["default"].report.monitor("330317", .05);
                break;
            case 4:
                k["default"].report.monitor("330318", .05);
                break;
            default:
                k["default"].report.monitor("330319", .05)
        }
    },
    "noscript_err": function () {
        k["default"].report.nlog("noscript_err", 316648),
            (0,
                k["default"])("noscript_area").style.display = "none"
    },
    "bindEvent": function () {
        var t = (0,
                k["default"])("u"),
            e = (0,
                k["default"])("p"),
            n = (0,
                k["default"])("verifycode"),
            o = (0,
                k["default"])("verifyimgArea"),
            i = (0,
                k["default"])("login_button"),
            r = (0,
                k["default"])("p_low_login_box"),
            a = (0,
                k["default"])("q_low_login_box"),
            u = (0,
                k["default"])("auth_low_login_box"),
            s = (0,
                k["default"])("email_list"),
            l = (0,
                k["default"])("close"),
            c = (0,
                k["default"])("switcher_qlogin"),
            f = (0,
                k["default"])("switcher_plogin"),
            d = (0,
                k["default"])("uin_del"),
            p = (0,
                k["default"])("bind_account"),
            h = (0,
                k["default"])("cancleAuth"),
            g = (0,
                k["default"])("authClose"),
            m = (0,
                k["default"])("auth_area"),
            _ = ((0,
                k["default"])("qr_invalid"),
                (0,
                    k["default"])("goBack")),
            y = (0,
                k["default"])("qr_img_box"),
            v = (0,
                k["default"])("qrlogin_img"),
            w = (0,
                k["default"])("qr_info_link"),
            b = (0,
                k["default"])("qrswitch_logo");
        b && k["default"].e.add(b, "click", q.switch_qrlogin),
        w && k["default"].e.add(v, "click", function () {
            k["default"].report.monitor("331287", .05)
        }),
        y && (k["default"].e.add(y, "mouseover", q.showQrTips),
            k["default"].e.add(y, "mouseout", q.hideQrTips)),
        _ && k["default"].e.add(_, "click", function (t) {
            t.preventDefault(),
                q.go_qrlogin_step(1),
                k["default"].report.monitor("331288", .05)
        }),
        m && (k["default"].e.add(m, "click", q.authLogin),
            k["default"].e.add(m, "mousedown", q.authMouseDowm),
            k["default"].e.add(m, "mouseup", q.authMouseUp)),
        h && k["default"].e.add(h, "click", q.cancleAuth),
        g && k["default"].e.add(g, "click", q.ptui_notifyClose),
        c && k["default"].e.add(c, "click", q.onQloginSwitch),
        f && k["default"].e.add(f, "click", function (t) {
            t.preventDefault(),
                q.switchpage(C.LoginState.PLogin),
                k["default"].report.monitor("331285", .05)
        }),
        p && (k["default"].e.add(p, "click", q.bind_account),
            k["default"].e.add(p, "mouseover", function () {
                q.need_hide_operate_tips = !1
            }),
            k["default"].e.add(p, "mouseout", function () {
                q.need_hide_operate_tips = !0
            })),
        l && k["default"].e.add(l, "click", q.ptui_notifyClose),
        1 == T.ptui.low_login && r && a && (k["default"].e.add(r, "click", q.checkbox_click),
            k["default"].e.add(a, "click", q.checkbox_click)),
        1 == T.ptui.low_login && u && k["default"].e.add(u, "click", q.checkbox_click),
            k["default"].e.add(t, "focus", q.u_focus),
            k["default"].e.add(t, "blur", q.u_blur),
            k["default"].e.add(t, "change", q.u_change),
            k["default"].e.add(t, "keydown", q.u_keydown),
            k["default"].e.add(t, "paste", function () {
                setTimeout(q.u_refresh_dom, 0)
            }),
            k["default"].e.add(t, "keyup", q.u_keyup),
            k["default"].e.add(d, "click", q.delUin),
            k["default"].e.add(e, "focus", q.p_focus),
            k["default"].e.add(e, "blur", q.p_blur),
            k["default"].e.add(e, "keydown", q.p_keydown),
            k["default"].e.add(e, "keyup", q.p_keyup),
            k["default"].e.add(e, "keypress", q.p_keypress),
            k["default"].e.add(e, "paste", function () {
                setTimeout(q.p_refresh_dom, 0)
            }),
            k["default"].e.add(i, "click", function (t) {
                var e;
                S.logger.log("$login_btn.onClick()"),
                t && t.preventDefault(),
                    1 != q.needShowNewVc || q.hasVCSuccess ? 1 == q.needShowNewVc && q.hasVCSuccess ? (e = q.checkUrl.replace(/^https?:\/\//gi, "").split("/")[0],
                        q.show_err('网络遇到点问题，请稍后刷新页面重试。<a target="_blank" href="https://ping.huatuo.qq.com/' + e + '">点击排查。</a>', !0),
                        S.logger.info("$login_btn.onClick()", "plogin.cntCheckTimeout=".concat(q.cntCheckTimeout))) : q.submit(t) : (q.showVC(),
                        S.logger.info("$login_btn.onClick()", "showVC"))
            }),
            k["default"].e.add(o, "click", q.changeVC),
            k["default"].e.add(s, "mousemove", q.email_mousemove),
            k["default"].e.add(s, "click", q.email_click),
            k["default"].e.add(document, "click", q.document_click),
            k["default"].e.add(document, "keydown", q.document_keydown),
            k["default"].e.add(n, "focus", q.vc_focus),
            k["default"].e.add(n, "blur", q.vc_blur),
            k["default"].e.add(n, "keydown", q.vc_keydown),
            k["default"].e.add(n, "keyup", q.vc_keyup),
            k["default"].e.add(window, "load", q.domLoad);
        n = (0,
            k["default"])("noscript_img");
        n && (k["default"].e.add(n, "load", q.noscript_err),
            k["default"].e.add(n, "error", q.noscript_err));
        n = (0,
            k["default"])("vip_link2");
        n && k["default"].e.add(n, "click", function (t) {
            window.open("https://pay.qq.com/qqvip/index.shtml?aid=vip.gongneng.other.red.dengluweb_wording2_open"),
                t.preventDefault(),
                k["default"].report.monitor("263482")
        }),
        q.isNewQr && k["default"].e.add(document, "visibilitychange", function () {
            var t = (0,
                k["default"])("onekey_step2");
            if (!t || "block" != k["default"].css.getComputedStyle(t).display)
                switch (document.visibilityState) {
                    case "hidden":
                        q.cancle_qrlogin();
                        break;
                    case "visible":
                        q.loginState == C.LoginState.QLogin && q.qrlogin_invalid && q.begin_qrlogin()
                }
        })
    },
    "vcodeMessage": function (t) {
        t.randstr && t.ticket || k["default"].report.nlog("vcode postMessage error：" + t),
            (0,
                k["default"])("verifycode").value = t.randstr,
            S.logger.info("vcodeMessage set verifycode to", t.randstr),
            q.pt_verifysession = t.ticket,
            q.hasVCSuccess = !0,
            q.hideVC(),
            q.submit()
    },
    "onSmsSubmit": function () {
        S.logger.info("plogin.onSmsSubmit()");
        var t = q.smsLoginUrl;
        t && (k["default"].cookie.get("pt_sms") && (t += "&pt_sms_code=" + k["default"].cookie.get("pt_sms")),
            k["default"].http.loadScript(t),
            S.logger.info("plogin.onSmsSubmit", "url: ".concat(t, ", pt_sms=").concat(k["default"].cookie.get("pt_sms"))))
    },
    "onCloseSms": function () {
        var t = (0,
            k["default"])("verify_iframe_mask");
        t && document.body.removeChild(t)
    },
    "newVCFirst": !0,
    "showNewVC": function () {
        var t = "dark" === k["default"].url.getParam("verify_theme"),
            e = (0,
                k["default"])(y);
        e.style.cssText = "background: none #FFFFFF; position: absolute; top: 0; width: 100%; z-index:9999;",
            e.style.height = (0,
                k["default"])("login").offsetHeight - (21 == T.ptui.style ? 2 : 4) + "px",
        t && (e.style.background = "#000",
            e.style.color = "#FFF"),
            k["default"].css.show(e),
            q.captcha = new TencentCaptcha(document.getElementById(_), T.ptui.appid, q.VCCallback, {
                "sid": q.sessionID,
                "type": "embed",
                "enableDarkMode": t && "force"
            }),
            q.captcha.show()
    },
    "hideNewVC": function () {
        (0,
            k["default"])(y) && k["default"].css.hide((0,
            k["default"])(y)),
        window.TencentCaptcha && q.captcha instanceof TencentCaptcha && q.captcha.destroy(),
            q.captcha = null
    },
    "changeNewVC": function () {
        q.showNewVC()
    },
    "initNewVerifyCodeUI": function () {
        var t = (0,
                k["default"])(y),
            e = document.createElement("div"),
            n = document.createElement("div");
        n.id = _,
            q.isQcloud() ? (e.innerHTML = '<div style=" width: 300px; left:50%; margin-left:-150px; position: relative"><div style="position: relative; margin-left: 10px"><a href="javascript:pt.plogin.hideVC();" style="color: #007aff; text-decoration: none;">返回</a></div></div>',
                n.style.cssText = "background: none #FFFFFF; position: relative; width: 300px; left:50%; margin-left:-150px; z-index:9999;",
                t.appendChild(n),
                t.appendChild(e)) : (e.innerHTML = '<div style="border-bottom: 1px solid #d7d7d7;"><div style="position: absolute; margin-left: 10px"><a href="javascript:pt.plogin.hideVC();" style="color: #007aff; text-decoration: none;">返回</a></div><div style="width: 100%; text-align: center; font-size: 16px; font-weight: bold">安全验证</div></div>',
                n.style.cssText = "background: none #FFFFFF; position: absolute; width: 300px; left:50%; margin-left:-150px; z-index:9999;",
                t.appendChild(e),
                t.appendChild(n)),
            e.style.cssText = "margin: 0px; padding: 0px; line-height: 40px"
    },
    "showVC": function () {
        q.vcFlag = !0,
            "1" == T.ptui.pt_vcode_v1 ? q.showNewVC() : (k["default"].css.show((0,
                k["default"])("verifyArea")),
                ((0,
                    k["default"])("verifycode").value = "",
                    k["default"])("verifyimg").src = q.getVCUrl(),
                console.log("showVC set verifycode to empty")),
            q.ptui_notifySize("login")
    },
    "hideVC": function () {
        q.vcFlag = !1,
            "1" == T.ptui.pt_vcode_v1 ? q.hideNewVC() : k["default"].css.hide((0,
                k["default"])("verifyArea")),
            q.ptui_notifySize("login")
    },
    "changeVC": function (t) {
        t && t.preventDefault(),
            "1" == T.ptui.pt_vcode_v1 ? q.changeNewVC() : (0,
                k["default"])("verifyimg").src = q.getVCUrl(),
        t && k["default"].report.monitor("330322", .05)
    },
    "getVCUrl": function () {
        var t = q.at_account,
            e = T.ptui.appid,
            n = q.sessionID || "";
        return q.verifycodeUrl + "?uin=" + t + "&aid=" + e + "&cap_cd=" + q.cap_cd + (n ? "&sessionID=" + n : "") + "&" + Math.random()
    },
    "checkValidate": function (t) {
        try {
            var e = t.u,
                n = t.p,
                o = t.verifycode,
                i = (0,
                    k["default"])("safe_edit");
            if ("" == k["default"].str.trim(e.value))
                return q.show_err(T.str.no_uin),
                    q.domFocus(e),
                    !1;
            if (k["default"].check.isNullQQ(e.value))
                return q.show_err(T.str.inv_uin),
                    q.domFocus(e),
                    !1;
            e = n.value;
            if (q.armSafeEdit.isSafe && i && ("D41D8CD98F00B204E9800998ECF8427E" == (e = i.GetPwdHash()) && (e = ""),
                q.armSafeEdit.safepwd = e),
                !e)
                return q.show_err(T.str.no_pwd),
                    q.domFocus(n),
                    !1;
            if ("" == o.value)
                return q.needVc || q.vcFlag ? (q.show_err(T.str.no_vcode),
                    q.domFocus(o)) : (q.checkResultReport(14),
                    clearTimeout(q.checkClock),
                    q.showVC()),
                    !1;
            if (o.value.length < 4)
                return q.show_err(T.str.inv_vcode),
                    q.domFocus(o),
                    o.select(),
                    !1
        } catch (r) {
        }
        return !0
    },
    "checkTimeout": function () {
        var t = k["default"].str.trim((0,
            k["default"])("u").value);
        (k["default"].check.isQQ(t) || k["default"].check.isQQMail(t)) && (q.cap_cd = 0,
            q.salt = k["default"].str.uin2hex(t.replace("@qq.com", "")),
            q.needVc = !0,
            "1" == T.ptui.pt_vcode_v1 ? q.needShowNewVc = !0 : q.showVC(),
            q.isCheckTimeout = !0,
            q.checkRet = 1,
            q.cntCheckTimeout = q.cntCheckTimeout + 1),
            k["default"].report.monitor(216082),
            S.logger.info("plogin.checkTimeout()", "uin=".concat(t))
    },
    "loginTimeout": function () {
        q.showAssistant(2),
            console.warn("login Timeout")
    },
    "hasCheck": function (t) {
        if (void 0 === t)
            return q.checkState;
        q.checkState = t
    },
    "check": function (t) {
        var e;
        {
            if (S.logger.log("check start, caller=".concat((0,
                S.getCallerName)(3))),
                !q.smsCheck)
                return 0 === q.checkState ? (S.logger.info("checking, holding"),
                    q.check.cb = t) : (q.account || q.set_account(),
                    k["default"].check.isNullQQ(q.account) ? (q.show_err(T.str.inv_uin),
                        !1) : void (q.account != q.lastCheckAccount && "" != q.account ? (q.hasCheck(0),
                        e = T.ptui.appid,
                        e = q.getCheckUrl(q.at_account, e),
                        q.isCheckTimeout = !1,
                        clearTimeout(q.checkClock),
                        q.checkClock = setTimeout("pt.plogin.checkTimeout();", 5e3),
                        k["default"].http.loadScript(e),
                        q.check.cb = t,
                        S.logger.info("start to req check api")) : S.logger.info("need not to check, plogin.account=".concat(q.account, " plogin.lastCheckAccount=").concat(q.lastCheckAccount))));
            S.logger.info("sms need not to check")
        }
    },
    "getCheckUrl": function (t, e) {
        var n = q.checkUrl + "?regmaster=" + T.ptui.regmaster + "&pt_tea=2&pt_vcode=" + T.ptui.pt_vcode_v1 + "&";
        return n += "uin=" + t + "&appid=" + e + "&js_ver=" + T.ptui.ptui_version + "&js_type=" + q.js_type + "&login_sig=" + T.ptui.login_sig + "&u1=" + encodeURIComponent(T.ptui.s_url) + "&r=" + Math.random() + "&pt_uistyle=" + T.ptui.style + "&daid=" + T.ptui.daid + "&pt_3rd_aid=" + T.ptui.pt_3rd_aid + "&o1vId=" + q.deviceId,
        window.TDC && window.TDC.getInfo && window.TDC.getInfo().tokenid && (n += "&pt_jstoken=" + window.TDC.getInfo().tokenid),
            n
    },
    "getSubmitUrl": function (t) {
        var e,
            n,
            o = q.loginUrl + t + "?",
            i = {};
        if ("pt_susp_repush" == t)
            return o + ("appid=" + T.ptui.appid + "&daid=" + T.ptui.daid);
        for (n in "login" == t && (i.u = encodeURIComponent(q.at_account),
            i.verifycode = (0,
                k["default"])("verifycode").value,
            S.logger.info("getSubmitUrl setParams verifycode", (0,
                k["default"])("verifycode").value),
            q.needShowNewVc ? i.pt_vcode_v1 = 1 : i.pt_vcode_v1 = 0,
            i.pt_verifysession_v1 = q.pt_verifysession || k["default"].cookie.get("verifysession"),
            console.log(i.pt_verifysession_v1),
            e = (0,
                k["default"])("p").value,
        q.armSafeEdit.isSafe && (e = q.armSafeEdit.safepwd),
            i.p = r["default"].getEncryption(e, q.salt, i.verifycode, q.armSafeEdit.isSafe),
            i.pt_randsalt = q.isRandSalt || 0,
        window.TDC && window.TDC.getInfo && window.TDC.getInfo().tokenid && (i.pt_jstoken = window.TDC.getInfo().tokenid),
            S.logger.log("getSubmitUrl loginName == login branch finished")),
          'https://wx.mail.qq.com/list/readtemplate?name=login_jump.html&target=',
        "ptqrlogin" == t && (i.ptqrtoken = k["default"].str.hash33(k["default"].cookie.get("qrsig"))),
        "pt_susp_poll" == t && (i.pt_susp_poll_token = k["default"].str.hash33(k["default"].cookie.get("pt_susp_sig"))),

            i.ptredirect = T.ptui.target,
            i.h = 1,
            i.t = 1,
            i.g = 1,
            i.from_ui = 1,
            i.ptlang = T.ptui.lang,
            i.action = q.action.join("-") + "-" + +new Date,
            i.js_ver = T.ptui.ptui_version,
            i.js_type = q.js_type,
            i.login_sig = T.ptui.login_sig,
            i.pt_uistyle = T.ptui.style,
        1 == T.ptui.low_login && q.low_login_enable && !q.isMailLogin && (i.low_login_enable = 1,
            i.low_login_hour = q.low_login_hour),
        "0" != T.ptui.csimc && (i.csimc = T.ptui.csimc,
            i.csnum = T.ptui.csnum,
            i.authid = T.ptui.authid),
            i.aid = T.ptui.appid,
        T.ptui.daid && (i.daid = T.ptui.daid),
        "0" != T.ptui.pt_3rd_aid && (i.pt_3rd_aid = T.ptui.pt_3rd_aid),
        T.ptui.regmaster && (i.regmaster = T.ptui.regmaster),
        T.ptui.mibao_css && (i.mibao_css = T.ptui.mibao_css),
        "1" == T.ptui.pt_qzone_sig && (i.pt_qzone_sig = 1),
        "1" == T.ptui.pt_light && (i.pt_light = 1),
        q.ptdrvs && (i.ptdrvs = q.ptdrvs),
        q.sessionID && (i.sid = q.sessionID),
            i)
            o += n + "=" + i[n] + "&";
        return q.isTim && (o += "tim=1&"),
        s["default"].hasOneKeyList() && (o += "has_onekey=1&"),
        s["default"].QQProtectGUID && (o += "&pt_guid_sig=" + s["default"].QQProtectGUID),
            o += "&o1vId=" + q.deviceId
    },
    "submit": function (t) {
        if (S.logger.log("submit() caller=".concat((0,
            S.getCallerName)(3))),
        2 <= q.cntCheckTimeout)
            return q.show_err(q.checkErr[T.ptui.lang]),
                q.needVc = !1,
                q.needShowNewVc = !1,
                void S.logger.warn("check超时2次，提示网络错误");
        if (q.submitTime = (new Date).getTime(),
        t && t.preventDefault(),
        q.lastCheckAccount != q.account && !q.hasCheck())
            return S.logger.info("start check, plogin.lastCheckAccount=".concat(q.lastCheckAccount, " plogin.account=").concat(q.account, " plogin.hasCheck()=").concat(q.hasCheck())),
                void q.check(q.submit);
        if (!q.ptui_onLogin(document.loginform))
            return S.logger.info("表单合法性检查不通过，中止submit"),
                !1;
        if (k["default"].cookie.set("ptui_loginuin", escape(document.loginform.u.value), T.ptui.domain, "/", 720),
        -1 == q.checkRet || 3 == q.checkRet)
            return q.show_err(q.checkErr[T.ptui.lang]),
                q.lastCheckAccount = "",
                q.domFocus((0,
                    k["default"])("p")),
                S.logger.info("retry check, plogin.checkRet=".concat(q.checkRet)),
                void q.check();
        clearTimeout(q.loginClock),
            q.loginClock = setTimeout("pt.plogin.loginTimeout();", 5e3);
        t = q.getSubmitUrl("login");
        return q.smsLoginUrl = t,
            k["default"].winName.set("login_href", encodeURIComponent(T.ptui.href)),
            q.showLoading(),
            q.isVCSessionTimeOut() && !q.needVc ? (q.lastCheckAccount = "",
                q.check(q.submit),
                S.logger.info("start check, vcsession timeout")) : (s["default"].reportPCMgr(q.at_account, 1),
                s["default"].reportPath(q.at_account, 0),
                S.logger.info("start to req login api, loginuin=".concat(document.loginform.u.value)),
                k["default"].http.loadScript(t),
                q.isdTime["7808-7-2-0"] = (new Date).getTime()),
            !1
    },
    "isVCSessionTimeOut": function () {
        return q.checkTime = q.checkTime || (new Date).getTime(),
        12e5 < q.submitTime - q.checkTime && (k["default"].report.monitor(330323, .05),
            !0)
    },
    "webLoginReport": function () {
    },
    "ptui_speedReport": function () {
    },
    "resultReport": function () {
    },
    "crossMessage": function (t) {
        if (q.isUIStyle && q.uistyleCM(t),
        "undefined" != typeof window.postMessage)
            window.parent.postMessage(k["default"].str.json2str(t), "*");
        else if (T.ptui.proxy_url) {
            var e,
                n = T.ptui.proxy_url + "#";
            for (e in t)
                n += e + "=" + t[e] + "&";
            (0,
                k["default"])("proxy") && ((0,
                k["default"])("proxy").innerHTML = '<iframe src="' + encodeURI(n) + '"></iframe>')
        } else
            try {
                navigator.ptlogin_callback && navigator.ptlogin_callback(k["default"].str.json2str(t))
            } catch (o) {
                k["default"].report.nlog("ptlogin_callback " + o.message)
            }
    },
    "uistyleCM": function (t) {
        var e = encodeURIComponent(k["default"].str.json2str(t)),
            t = document.location.protocol + "//ui.ptlogin2." + T.ptui.domain + "/cross_proxy.html#" + e,
            e = (0,
                k["default"])("proxy");
        e && (e.innerHTML = '<iframe  allowtransparency="true" scrolling="no" frameborder="0" width="1" height="1" src="' + t + '">')
    },
    "ptui_notifyClose": function (t) {
        t && t.preventDefault();
        t = {
            "action": "close"
        };
        q.crossMessage(t),
            q.cancle_qrlogin()
    },
    "ptui_notifySize": function (t) {
        q.loginState == C.LoginState.PLogin && ((0,
            k["default"])("bottom_web") && k["default"].css.hide((0,
            k["default"])("bottom_web")),
            q.adjustLoginsize(),
        (0,
            k["default"])("bottom_web") && k["default"].css.show((0,
            k["default"])("bottom_web")));
        var e = (0,
                k["default"])(t),
            t = {};
        q.isNewStyle && (e.style.height = "100%"),
            t.action = "resize",
            t.width = e.offsetWidth || 1,
            t.height = e.offsetHeight || 1,
        q.isNewStyle && (t.height -= k["default"].css.getCurrentPixelStyle(e, "border-top-width") + k["default"].css.getCurrentPixelStyle(e, "border-bottom-width"),
            e.style.height = t.height - k["default"].css.getCurrentPixelStyle(e, "border-top-width") - k["default"].css.getCurrentPixelStyle(e, "border-bottom-width") + "px"),
            q.crossMessage(t)
    },
    "ptui_onLogin": function (t) {
        return q.checkValidate(t)
    },
    "ptui_uin": function () {
    },
    "is_mibao": function (t) {
        return /^http(s)?:\/\/(ssl\.)?ui.ptlogin2.(\S)+\/cgi-bin\/mibao_vry/.test(t)
    },
    "__get_polling_url": function (t) {
        t = (T.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + T.ptui.domain + "/" + t + "?";
        return t += "appid=" + T.ptui.appid + "&e=2&l=M&s=3&d=72&v=4&t=" + Math.random(),
        T.ptui.regmaster && (t += "&regmaster=" + T.ptui.regmaster),
        T.ptui.daid && (t += "&daid=" + T.ptui.daid),
        q.isTim && (t += "&tim=1"),
        T.ptui.pt_3rd_aid && (t += "&pt_3rd_aid=" + T.ptui.pt_3rd_aid),
            t
    },
    "get_qrlogin_pic": function () {
        return q.__get_polling_url("ptqrshow")
    },
    "go_qrlogin_step": function (t) {
        switch (t) {
            case 1:
                q.begin_qrlogin(),
                q.isNewQr || k["default"].css.show((0,
                    k["default"])("qrlogin_step1")),
                    k["default"].css.hide((0,
                        k["default"])("qrlogin_step2"));
                break;
            case 2:
                q.isNewQr ? ((0,
                    k["default"])("qrlogin_step2").style.height = (0,
                    k["default"])("login").offsetHeight - 8 + "px",
                    k["default"].css.show((0,
                        k["default"])("qrlogin_step2"))) : (k["default"].css.show((0,
                    k["default"])("qrlogin_step2")),
                    k["default"].css.hide((0,
                        k["default"])("qrlogin_step1")))
        }
    },
    "go_onekey_step": function (t) {
        var e = (0,
            k["default"])("onekey_step2");
        switch (t) {
            case 1:
                k["default"].css.hide(e),
                    q.begin_qrlogin();
                break;
            case 2:
                k["default"].css.show(e),
                    q.showLoading(),
                    q.hideLoading()
        }
    },
    "begin_qrlogin": function () {
        if (S.logger.log("开始拉取qrlogin，caller=".concat((0,
            S.getCallerName)(3))),
            T.ptui.lockuin)
            S.logger.info("固定UIN，不需要qrlogin，pt.ptui.lockuin=".concat(T.ptui.lockuin));
        else {
            var e,
                t = (0,
                    k["default"])("qr_invalid"),
                n = (0,
                    k["default"])("qrlogin_img");
            if (t && (S.logger.info("隐藏QRCode不可用的遮罩"),
                k["default"].css.hide(t)),
                n) {
                if (e = setTimeout(function () {
                    S.logger.warn("拉取二维码超时"),
                        k["default"].report.monitor("33902489")
                }, q.defaultTimeoutTime),
                    n.onload = function () {
                        try {
                            if (S.logger.log("qrloginImg.onload timer=".concat(e)),
                                clearTimeout(e),
                                !(0,
                                    a.isInPage)(this))
                                return void S.logger.info("当前图片元素已经从dom树上移除，忽略");
                            S.logger.log("parentNode=", this.parentNode),
                                S.logger.log("parentNode.childNodes=", this.parentNode.childNodes),
                                ((0,
                                    k["default"])("qrlogin_img").onload = null,
                                    k["default"])("qrlogin_img").onerror = null,
                                q.cancle_qrlogin(),
                                q.qrlogin_clock = window.setInterval("pt.plogin.qrlogin_submit();", 3e3),
                                q.qrlogin_timeout = window.setTimeout(function () {
                                    S.logger.info("将QR登录设置为不可用 timer=".concat(e)),
                                        q.set_qrlogin_invalid()
                                }, q.qrlogin_timeout_time),
                                S.logger.info("拉取二维码成功")
                        } catch (t) {
                            S.logger.warn("qrloginImg.onload 遇到错误", t)
                        }
                    },
                    n.onerror = function () {
                        try {
                            if (S.logger.log("qrloginImg.onerror timer=".concat(e)),
                                clearTimeout(e),
                                !(0,
                                    a.isInPage)(this))
                                return void S.logger.info("当前图片元素已经从dom树上移除，忽略");
                            S.logger.log("parentNode=", this.parentNode),
                                S.logger.log("parentNode.childNodes=", this.parentNode.childNodes),
                                ((0,
                                    k["default"])("qrlogin_img").onload = null,
                                    k["default"])("qrlogin_img").onerror = null,
                                q.set_qrlogin_invalid(),
                                S.logger.warn("拉取二维码失败 处理完成")
                        } catch (t) {
                            S.logger.warn("qrloginImg.onerror 遇到错误", t)
                        }
                    },
                    S.logger.log("begin_qrlogin timer=".concat(e)),
                q.qrloginGetTime && new Date - q.qrloginGetTime < q.qrloginRefreshInterval)
                    return clearTimeout(e),
                    !q.qrlogin_clock && q.qrlogin_invalid && (0,
                        k["default"])("qr_invalid") && (S.logger.info("显示二维码不可用遮罩 timer=".concat(e)),
                        k["default"].css.show((0,
                            k["default"])("qr_invalid"))),
                        void S.logger.info("距离上次拉取时间太短, plogin.qrloginGetTime = ".concat(q.qrloginGetTime, " timer=").concat(e, " qrlogin_invalid=").concat(q.qrlogin_invalid));
                S.logger.info("开始拉取二维码 timer=".concat(e)),
                    q.qrlogin_invalid = !1,
                    q.qrloginGetTime = (new Date).getTime(),
                    setTimeout(function () {
                        try {
                            (0,
                                k["default"])("qrlogin_img").src = q.get_qrlogin_pic()
                        } catch (t) {
                            q.qrloginGetTime = 0,
                                S.logger.warn("拉取二维码遇到异常,timer=".concat(e, " :"), t)
                        }
                    }, 0)
            } else
                S.logger.warn("qrloginImg 元素不存在")
        }
    },
    "cancle_qrlogin": function () {
        S.logger.log("cancle_qrlogin caller=".concat((0,
            S.getCallerName)())),
            window.clearInterval(q.qrlogin_clock),
            window.clearTimeout(q.qrlogin_timeout),
            q.qrlogin_clock = 0,
            q.qrlogin_invalid = !0
    },
    "set_qrlogin_invalid": function () {
        S.logger.log("set_qrlogin_invalid caller=".concat((0,
            S.getCallerName)())),
            q.cancle_qrlogin(),
            q.switch_qrlogin(),
        (0,
            k["default"])("qr_invalid") && (S.logger.info("显示QRCode不可用的遮罩"),
            k["default"].css.show((0,
                k["default"])("qr_invalid"))),
            q.hideQrTips()
    },
    "loadQrTipsPic": function () {
        if (q.isNewQr) {
            var t = (0,
                    k["default"])("qr_tips_pic"),
                e = "chs";
            switch (T.ptui.lang + "") {
                case "2052":
                    e = "chs";
                    break;
                case "1033":
                    e = "en";
                    break;
                case "1028":
                    e = "cht"
            }
            k["default"].css.addClass(t, "qr_tips_pic_" + e)
        } else {
            t = T.ptui.cssPath + "/c_qr_login.css";
            (0,
                k["default"])("qrswitch_logo") && q.createLink(t)
        }
    },
    "showQrTips": function () {
        var t,
            e,
            n,
            o;
        q.inTipsAnimate || q.isTim || 2 === q.loginState && (t = {},
            e = k["default"].css.getOffsetPosition("qrlogin_img"),
            n = k["default"].css.getOffsetPosition("login"),
            t.left = e.left - n.left,
            t.right = (0,
                k["default"])("login").offsetWidth - (0,
                k["default"])("qrlogin_img").offsetWidth - t.left,
            t.left = t.left - 92 - 6,
            (0,
                k["default"])("qr_tips").style.left = t.left + "px",
            o = function o() {
                t.left < 0 || (k["default"].css.show((0,
                    k["default"])("qr_tips")),
                    ((0,
                        k["default"])("qr_tips_pic").style.opacity = 0,
                        k["default"])("qr_tips_pic").style.filter = "alpha(opacity=0)",
                    (0,
                        k["default"])("qr_tips_menban").className = "qr_tips_menban",
                    k["default"].animate.fade("qr_tips_pic", 100, 10, 10, function () {
                        q.inTipsAnimate = !1
                    }))
            },
            q.inTipsAnimate = !0,
            o(),
            q.hideQrTipsClock = window.setTimeout("pt.plogin.hideQrTips()", 5e3),
            k["default"].report.monitor("331286", .05))
    },
    "hideQrTips": function () {
        q.isTim || q.isNewQr && (q.inTipsAnimate = !0,
            window.clearTimeout(q.hideQrTipsClock),
            (0,
                k["default"])("qr_tips_menban").className = "",
            k["default"].animate.fade("qr_tips_pic", 0, 10, 10, function () {
                s["default"].hasNoQlogin() ? (k["default"].css.hide((0,
                    k["default"])("qr_tips")),
                    k["default"].animate.animate("qrlogin_img", {
                        "left": 12
                    }, 10, 10, function () {
                        q.inTipsAnimate = !1
                    })) : (k["default"].css.hide((0,
                    k["default"])("qr_tips")),
                    q.inTipsAnimate = !1)
            }))
    },
    "resetQrTips": function () {
        q.isTim || q.isNewQr && ((0,
            k["default"])("qrlogin_img") && ((0,
            k["default"])("qrlogin_img").style.cssText = ""),
        (0,
            k["default"])("qr_tips") && k["default"].css.hide((0,
            k["default"])("qr_tips")))
    },
    "qr_load": function () {
    },
    "qr_error": function () {
    },
    "switch_qrlogin_animate": function () {
        var t = q.isQrLogin,
            e = (0,
                k["default"])("web_qr_login_show"),
            n = 0;
        t ? (q.isNewStyle || (n = -(0,
            k["default"])("web_login").offsetHeight,
            (0,
                k["default"])("web_qr_login").style.height = ((0,
                k["default"])("qrlogin").offsetHeight || 265) + "px"),
            (0,
                k["default"])("qrlogin").style.visibility = "visible",
            (0,
                k["default"])("web_login").style.visibility = "hidden") : (q.isNewStyle || ((n = 0,
            k["default"])("web_qr_login").style.height = (0,
            k["default"])("web_login").offsetHeight + "px"),
            (0,
                k["default"])("web_login").style.visibility = "visible",
            (0,
                k["default"])("qrlogin").style.visibility = "hidden"),
            k["default"].animate.animate(e, {
                "top": n
            }, 30, 20)
    },
    "switch_qrlogin": function (t) {
        q.isNewQr || (t && t.preventDefault(),
            q.hide_err(),
            q.isQrLogin ? ((0,
                k["default"])("qrlogin").style.visibility = "hidden",
                q.cancle_qrlogin(),
                (0,
                    k["default"])("qrswitch_logo").title = "二维码登录",
                (0,
                    k["default"])("qrswitch_logo").className = "qrswitch_logo",
                k["default"].report.monitor("273368", .05)) : ((0,
                k["default"])("qrlogin").style.visibility = "visible",
                q.go_qrlogin_step(1),
                (0,
                    k["default"])("qrswitch_logo").title = "返回",
                (0,
                    k["default"])("qrswitch_logo").className = "qrswitch_logo_qr",
                q.begin_qrlogin(),
                k["default"].report.monitor("273367", .05)),
            q.isQrLogin = !q.isQrLogin,
            q.switch_qrlogin_animate(),
            q.ptui_notifySize("login"))
    },
    "adjustLoginsize": function () {
        var t;
        q.isNewStyle || (t = q.isQrLogin,
            (0,
                k["default"])("web_qr_login").style.height = t ? ((0,
                k["default"])("qrlogin").offsetHeight || 265) + "px" : (0,
                k["default"])("web_login").offsetHeight + "px")
    },
    "qrlogin_submit": function () {
        S.logger.log("qr_loginsubmit caller=".concat((0,
            S.getCallerName)(3)));
        var t = q.getSubmitUrl("ptqrlogin");
        k["default"].winName.set("login_href", encodeURIComponent(T.ptui.href)),
            "qq.com" === T.ptui.domain && q.toggleManager.featureEnable(q.toggleManager.FEATURE_KEYS.QR_LOGIN_XHR) ? u.get((0,
                l.getProxyUrl)(t)).then(function (t) {
                var e;
                try {
                    e = JSON.parse(t.data.replace(/'/g, '"').replace("ptuiCB(", "[").replace(/\)$/, "]"))
                } catch (n) {
                    throw S.logger.warn("error occured when parse ptuiCB params", n),
                        n
                }
                c.ptuiCB.apply(window, e)
            })["catch"](function (t) {
                S.logger.warn("error occured when request qrlogin:", t)
            }) : k["default"].http.loadScript(t)
    },
    "force_qrlogin": function () {
        if (!T.ptui.lockuin)
            switch (parseInt(T.ptui.style, 10)) {
                case 21:
                case 22:
                case 23:
                    q.switch_qrlogin();
                    break;
                default:
                    q.switchpage(C.LoginState.QLogin)
            }
    },
    "redirect": function (t, e) {
        switch (t + "") {
            case "0":
                location.replace(e);
                break;
            case "1":
                top.location.replace(e);
                break;
            case "2":
                parent.location.replace(e);
                break;
            default:
                top.location.replace(e)
        }
    },
    "armSafeEdit": function () {
        var n = (0,
                k["default"])("pwdArea"),
            o = (0,
                k["default"])("p"),
            i = n.style.height;
        o.style.width = "208px";
        var r = document.createElement("a");
        r.tabIndex = 1,
            r.id = "safe_lock",
            r.title = "安全控件登录开关";
        var t = {
            "background": "url(https://ui.ptlogin2.qq.com/style/34/images/icon_5.png) no-repeat -130px -130px",
            "width": "13px",
            "height": "20px",
            "display": "block",
            "margin": "-29px 20px 0 0",
            "cursor": "pointer",
            "webkitUserSelect": "none",
            "outline": "none",
            "marginLeft": "220px"
        };
        for (e in "6.0" == k["default"].browser("version") && (t.background = t.background.replace("icon_5.png", "icon_5_8.png")),
            t)
            r.style[e] = t[e];
        r.style.style = "right",
            q.armSafeEdit.isSafe = !1,
            n.appendChild(r);
        var e,
            a = document.createElement("div");
        for (e in t = {
            "position": "absolute",
            "top": "2px",
            "left": "1px"
        })
            a.style[e] = t[e];

        function u() {
            if (q.armSafeEdit.isSafe)
                o.style.display = "block",
                    o.value = "",
                    setTimeout(function () {
                        try {
                            o.focus()
                        } catch (t) {
                        }
                    }, 0),
                    n.removeChild(a),
                    r.style.backgroundPosition = "-130px -130px",
                    q.armSafeEdit.isSafe = !1;
            else {
                var t = (0,
                    k["default"])("safe_edit");
                t ? a.style.display = "block" : (a.innerHTML = (k["default"].suportActive() ? '<object id="safe_edit" classid="CLSID:EAAED308-7322-4b9b-965E-171933ADD473" width="208" height="38">                    <param name="bkColor" value="16777215"/>                    <param name="fontColor" value="0"/>                    <param name="fontHeight" value="0.25" />                    <param name="caretHeight" value="0.2" />                    <param name="borderType" value="2" />                    <param name="borderColor" value="16777215" />                </object>' : '<embed id="safe_edit" type="application/nptxsso"     width="208" height="38" bkcolor="16777215" fontcolor="0"     fontheight="0.25" caretheight="0.8" bordertype="2" bordercolor="16777215" />') + '<div class="safe-edit-tips"     style="color: #2C9E62; height: 28px; line-height: 34px; width: 208px;">    当前为安全登录模式，使用密码控件</div>',
                    n.appendChild(a),
                    t = (0,
                        k["default"])("safe_edit"),
                    k["default"].e.add(t, "focus", q.check));
                try {
                    t.CreateSafeEdit(),
                        t.ClearAllInput(),
                        setTimeout(function () {
                            t.focus()
                        }, 200),
                        o.style.display = "none",
                        r.style.backgroundPosition = "-117px -130px",
                        q.armSafeEdit.isSafe = !0
                } catch (e) {
                    q.show_err("安全控件加载失败"),
                        o.focus(),
                        q.armSafeEdit.isSafe = !1,
                        a.style.display = "none",
                        n.removeChild(a),
                        k["default"].report.monitor("456099")
                }
                k["default"].report.monitor("456098")
            }
            return q.armSafeEdit.isSafe ? n.style.height = "74px" : n.style.height = i,
                q.ptui_notifySize("login"),
                !1
        }

        k["default"].e.add(r, "click", u),
            q.armSafeEdit.lockToggle = u
    },
    "onekeyVerify": function (t, e, n) {
        var o = (0,
                k["default"])("onekey_verify"),
            i = (0,
                k["default"])("ov_retry_wrap"),
            r = (0,
                k["default"])("ov_retry"),
            a = (0,
                k["default"])("ov_back"),
            u = (0,
                k["default"])("p"),
            s = document.loginform,
            l = e,
            c = n;
        if (o) {
            clearInterval(q.onekeyVerifyClock),
                l = parseInt(l, 10) || q.onekeyVerify.__style || 1,
                q.onekeyVerify.__style = l;
            for (var f = o.getElementsByTagName("span"), d = ["占位"], p = 0; p < f.length; p++)
                -1 < f[p].className.indexOf("ov-tips") && d.push(f[p]);
            r.onclick = function () {
                k["default"].http.loadScript(q.getSubmitUrl("pt_susp_repush"))
            },
                "hide" == t ? (q.onekeyVerifyClock = 0,
                    q.hide_err(),
                    k["default"].css.hide(o),
                    k["default"].css.show(s),
                    setTimeout(function () {
                        u.value = "",
                            q.domFocus(u)
                    }, 0)) : ("invalid" == t ? (q.onekeyVerifyClock = 0,
                    k["default"].css.addClass(o, "invalid"),
                    q.hide_err(),
                    k["default"].e.add(a, "click", function () {
                        q.onekeyVerify("hide")
                    })) : (k["default"].css.setClass(o, "ov-" + l),
                d[l] && d[l].appendChild(i),
                    c = c || q.onekeyVerify.__tips || "你的帐号千金难求。为确保安全，请务必对手机收到的登录请求进行确认。",
                    q.onekeyVerify.__tips = c,
                    q.show_err(c, !0),
                    q.onekeyVerifyClock = setInterval(function () {
                        k["default"].http.loadScript(q.getSubmitUrl("pt_susp_poll"))
                    }, 3e3),
                    setTimeout(function () {
                        clearInterval(q.onekeyVerifyClock),
                            q.onekeyVerify("invalid")
                    }, q.onekey_verify_timeout)),
                    k["default"].css.show(o),
                    k["default"].css.hide(s))
        }
    },
    "getLoginParams": function (t) {
        if (q.login_param)
            for (var e = q.login_param.split("&"), n = 0; n < e.length; n++) {
                var o = e[n].split("=");
                if (o[0] === t)
                    return o[1]
            }
        return null
    }
};
console.log(q.getSubmitUrl())

