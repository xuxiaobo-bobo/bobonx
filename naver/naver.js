// nclk.js, Version 0.4.2
// Log-data 2018.11.23.
var window=global;
location={
    protocol:"https:"
};

navigator={
appVersion:'\'5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.40 Safari/537.36\''
,userAgent:'\'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.40 Safari/537.36\''
}
document={
    getElementById:function (){return null}
}
;;(function(nclkExports) {

/* Global variable */
// Function Name : nclk
// Argument : e - `event` or `element` where event occured object, a - click area,  i - gdID or cid, r - rank in area, opt - forced mode setting, g - extra variable, pid(option) - page id: 없는 경우 g_pid 또는 lcs_get_lpid 참조
// Description : When users click link, this function is called. It request to the server, then the server log data.
var nclk = function (e, a, i, r, opt, g, pid) {
    var m, l, tU, sc;

    // Some browsers like Firefox doesn't support window.event.
    var evt = e;
    var o = e;

    if ('nodeType' in e && e.nodeType >= 1) { // e가 element 이면 (기존 this)
	evt = window.event || e;
    } else if (e) {
	var target = e.srcElement || e.currentTarget || e.target;

	if (target) {
	    o = nclk.findLink(target);
	}
    }

    if (!g) g = "";

    // In here we get and calculates position that click happens.l
    sc = nclk.gcp(o, evt); // global click position
    tU = nclk.gl(a, i, r, sc, "", 0, nclk.st, g, pid); // make request url
    l = nclk.l(o, tU); // append target url

    nclk.sd(l); // send log

    return true;
};
var ccsrv = nclkExports.ccsrv || "cc.naver.com"; // collect server
var nsc = nclkExports.nsc || "decide.me";

nclk.vs = "0.4.2"; // version
nclk.md = "cc"; // module
nclk.pt = (window.location.protocol=="https:")?"https:":"http:";
nclk.ct = 0; // muti-call count in page
nclk.ec = encodeURIComponent;
nclk.st = 1; // nsc or ssc mode

// if (window.g_ssc != undefined && window.g_query !=undefined) {
    // nclk.st = 1;
// } else {
    // nclk.st = 0;
// }

//Function Name : nclk_proxy
//Argument : o - owner of event occurence object, a - click area,  i - gdID or cid, r - rank in area, opt - forced mode setting, g - extra variable
//Description : Do the same thing with nclk() except for redirecting target URL to proxy server.
function nclk_proxy(o, a, i, r, opt, g) {
    var g_nclk_proxy = nclkExports.g_nclk_proxy || ""; // proxy server

    if (g_nclk_proxy && o.href){
	o.href = g_nclk_proxy + nclk.ec(o.href);
    }

    return nclk(o, a, i, r, opt, g);
}

// Function Name : nclk_v2
// Argument : e - `event` or `element` where event occured object, a - click area,  i - gdID or cid, r - rank in area, g - extra variable, pid(option) - page id: 없는 경우 g_pid 또는 lcs_get_lpid 참조
// Description : When users click link, this function is called. It request to the server, then the server log data.
function nclk_v2(e, a, i, r, g, pid) {
    var m, l, tU, sc;

    // Some browsers like Firefox doesn't support window.event.
    var evt = e;
    var o = e;

    if ('nodeType' in e && e.nodeType >= 1) { // e가 element 이면 (기존 this)
	evt = window.event || e;
    } else if (e) {
	var target = e.srcElement || e.currentTarget || e.target;

	if (target) {
	    o = nclk.findLink(target);
	}
    }

    if (!g) g = "";

    // In here we get and calculates position that click happens.l
    sc = nclk.gcp(o, evt);	// global click position
    tU = nclk.gl(a, i, r, sc, "", 0, nclk.st, g, pid);	// make request url
    l = nclk.l(o, tU);	// append target url

    nclk.sd(l);     // send log

    return true;
}

// 2018-12-20 구 nclks_select 를 동일하게 처리하기 위해 customizing 함. by nullism
// nclk_v2_select(this.value,'log.lankr',{'ko_KR':'log.lankr','en_US':'log.lanen','zh-Hans_CN':'log.lancn','zh-Hant_TW':'log.lantw'},this,event) 형태로 사용함.
function nclks_select(key, defaultName, nclicksMapJson, obj, event) {
	try {
		var cr = (nclicksMapJson || {})[key] || defaultName;
		nclk_v2(event, cr, '', '', '');
	} catch(e) {
	}
}
function nclks_clsnm(id, className, name, elseName, obj, event) {
	try {
		tmpObj = document.getElementById(id);
		if (tmpObj.className == className) {
			nclk_v2(event, name, '', '', '');
		} else {
			nclk_v2(event, elseName, '', '', '');
		}
	} catch(e) {
	}
}
function nclks_chk(id, name, elseName, obj, event) {
	try {
		tmpObj = document.getElementById(id);
		if (tmpObj.checked) {
			nclk_v2(event, name, '', '', '');
		} else {
			nclk_v2(event, elseName, '', '', '');
		}
	} catch(e) {
	}
}
function nclks(name, obj, event){
	nclk_v2(event, name, '', '', '');
}

nclk.findLink = function(_el) {
    var el = _el;

    while (el && el.tagName !== "BODY" && el.tagName !== "HTML") {
	if (el.tagName === "A") {
	    break;
	}

	el = el.parentNode;
    }

    if (el.tagName !== "A") {
	el = _el;
    }

    return el;
}

// Function Name : nclk.l
// Argument : o - owner of event occurence object, tU - request URL
// Description : append target url at request URL
nclk.l = function (o, tU) {
    var l, tN, tH;
    if (o && o.href) {
	tN = o.tagName.toLowerCase();
	tH = o.href.toLowerCase();
	if (tH && tH.indexOf(nclk.pt+"//"+ccsrv) == 0) {	// href is cc.naver.com ...
	    l = o.href;
	} else if (tH && tH.indexOf(nclk.pt+"//"+ccsrv) != 0 && tN && tN != "img") {
	    l = tU + "&u="+nclk.ec(o.href);	// append target url
	}
	return l;
    }
    return tU + "&u=about%3Ablank";		// no tareget url - default
};

// Function Name : nclk.sd
// Argument : l - request url, func - callback funciton
// Description : send log and go page
nclk.sd = function(l, func) {
    var f = 0;
    var timer;
    if (nclk.ct > 0) {
	var t = new Date().getTime();
	l += "&nt="+ t;		// Aviod image cache
    }
    if (typeof func == 'function') {
	f = 1;
    }
    var o = new Image();
    o.src = l;	// send log
    o.onload = function () {
	if (timer) clearTimeout(timer);	// clear timer
	if (f) func();
	o.onload = null;
	return;
    }
    o.onerror = function () {
	if (timer) clearTimeout(timer);  // clear timer
	if (f) func();
	o.onerror = null;
	return;
    }

    if (f) {
	timer = setTimeout(function(){func()}, 5000);	// if we don't receive image response in 5s, absolutly go page
    }
    nclk.ct++;	// multi-call count
};

// Function Name : nclk.gl
// Argument : a - click area,  i - gdID or cid, r - rank in area, u- target url, m- action mode, s- nsc or nsc, g - extra variable
// Description : make request url
nclk.gl = function(a, i, r, sc, u, m, s, g, pid) {
    var g_ssc = nclkExports.g_ssc || "";
    var g_query = nclkExports.g_query || "";
    var lcs_get_lpid = nclkExports.lcs_get_lpid || null;
    var g_pid = nclkExports.g_pid || ""; // page id
    var g_sid = nclkExports.g_sid || ""; // session id

    if (m == undefined){
	m = 1;
    }

    if (s == undefined) {
	s = 1;
    }

    var l = nclk.pt+"//" + ccsrv + "/"+ nclk.md + "?a=" + a + "&r=" + r + "&i=" + i + "&m=" + m;

    if (s == 1) {	// SSC 관련 값 추가
	if (g_ssc) {
	    l += "&ssc=" + g_ssc;
	}

	if (g_query) {
	    l += "&q=" + nclk.ec(g_query);
	}

	if (g_sid) {
	    l += "&s=" + g_sid;
	}

	// pid
	if (pid) {
	    l += "&p=" + pid;
	} else if(g_pid) {
	    l += "&p=" + g_pid;
	} else if (lcs_get_lpid) {	// lcs에서 참조
	    // lpid: 같은 pageview에서 lcs 로그 데이터와 nclicks 로그 데이터를 연결하기 위한 공통 키 값
	    // lcs에서 id를 생성 (lcs_do할 때마다 업데이트)
	    // (페이지 로드 전 (lcs_do 이전) lpid를 참조하는 경우 lpid를 동적으로 생성한 다음, 처음 lcs_do에서는 생성된 값을 사용. 이후는 마찬가지로 업데이트)
	    l += "&p=" + lcs_get_lpid();
	} else {
	    console.warn("'g_pid / lcs_get_lpid' is not exist.");
	}
    } else {
	l += "&nsc=" + nsc;
	console.warn("[DEPRECATED] NSC mode");
    }

    if (g) {
	l += "&g=" + g;
    }

    if (u) {
	l += "&u="+nclk.ec(u);
    }

    if (sc){
	l += sc
    }

    return l;
};

// Function Name : nclk.al
// Argument : sType- event type, fn - callback function
// Description : event listener
nclk.al = function(sType, fn) {
    var w = window;
    if(w.addEventListener) {
	w.addEventListener(sType, fn, false);
    } else if(w.attachEvent) {	// support to IE
	w.attachEvent("on" + sType, fn);
    }
};

nclk.oo = "";
nclk.of = "";
// When page occur back button, assign saved function
if ("onpageshow" in window) { nclk.al("pageshow", function() { nclk.oo.onclick=nclk.of; }); }

//Function Name : nclk.gsbw
//Return : scrollbar width
//Description : Get scrollbar width in order to calculate browser size of Opera.
nclk.gsbw = function() {
    var inner = document.createElement('p');
    inner.style.width = '200px';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild (inner);

    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;

    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);

    return (w1 - w2);
};

//Function Name : nclk.fp
//Parameter : obj - owner of event occurence object
//Return : object position
//Description : Get offsetLeft, offsetTop
nclk.fp = function(obj) {
    var curleft = curtop = 0;

    try {
	if (obj.offsetParent) {
	    do {
		curleft += obj.offsetLeft;
		curtop += obj.offsetTop;
	    } while (obj = obj.offsetParent);
	}
	else if (obj.x || obj.y)			// for safari of old version
	{
	    if (obj.x) curleft += obj.x;
	    if (obj.y) curtop += obj.y;
	}
    } catch(e) {
    }
    return [curleft, curtop];
};


//Function Name : nclk.ws
//Paramenter : win -  window object
//Return : window width
//Description : Calculates inner width of browser window.
nclk.ws = function(win) {
    if (!win) win = window;
    var winWidth = 0;
    if (win.innerWidth) {
	// most non-IE
	winWidth = win.innerWidth;
	// including scroll bar !!
	if ( typeof(win.innerWidth) == 'number') {
	    var scrollbarWidth = nclk.gsbw();
	    winWidth = win.innerWidth - scrollbarWidth; // Opera includes scrollbar width at innerWidth
	}
    } else if (document.documentElement && document.documentElement.clientWidth) {
	//IE 6+ in 'standards compliant mode'
	winWidth = document.documentElement.clientWidth;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	//IE 4 compatible
	winWidth = document.body.clientWidth;
    }
    return winWidth;
};

//Function Name : nclk.ci
//Parameter : obj - owner of event occurence object
//Return Value : iframe ID or false
//Description : Check whether it is clicked in iframe or not
nclk.ci = function(obj) {
    var oriURL = document.URL;
    var p = obj.parentNode;
    var docObj;
    var ifrId;
    var l;

    if (p == null || p == undefined) {
	return false;
    }

    while (1) {
	if (p.nodeName.toLowerCase() == "#document") {
	    if (p.parentWindow) {		// IE, Opera
		docObj = p.parentWindow;
	    } else {	// Firefox, Safari
		docObj = p.defaultView;
	    }
	    try {
		if (docObj.frameElement != null && docObj.frameElement != undefined ) {
		    if (docObj.frameElement.nodeName.toLowerCase() == "iframe") {
			ifrId = docObj.frameElement.id;	// Get iframe id
			if (!ifrId) return false;
			return ifrId;
		    } else {
			return false;
		    }
		} else {
		    return false;
		}
	    } catch (e) {
		return false;
	    }
	} else {
	    p = p.parentNode;
	    if (p == null || p == undefined) return false;
	}
    }
};

nclk.gcp = function(obj, e) {
    var sx=-1;
    var sy=-1;
    var px=-1;
    var py=-1;
    var dBody, dElement, ifrId;
    var l=""
    var theEvent = window.event ? window.event : obj;

    if (e) {
	theEvent = e || window.event;
    }

    try {
	bw = nclk.ws(window);	// size of window
	ifrId = nclk.ci(obj);	// check whether it is clicked in iframe or not
	if (ifrId) {	// click object in iframe
	    var ifrOffset = nclk.fp(document.getElementById(ifrId));	// Get position of iframe
	    if (theEvent.clientX  && theEvent.clientX != undefined) {
		dBody = document.body;
		if (dBody.clientLeft && dBody.clientTop) {
		    ifrSx = theEvent.clientX - dBody.clientLeft;		//  relative position in iframe
		    ifrSy = theEvent.clientY - dBody.clientTop;
		} else { // firefox bug - clientLeft, clientTop don't work in firefox. It is OK in firefox 3.0
		    ifrSx = theEvent.clientX;
		    ifrSy = theEvent.clientY;
		}
	    }
	    // postion of iframe + relative position in iframe
	    px = ifrOffset[0] + ifrSx;
	    py = ifrOffset[1] + ifrSy;

	    // relative position in window
	    if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
		dBody = document.body;
		sx = px - dBody.scrollLeft;
		sy = py - dBody.scrollTop;
	    } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
		dElement = document.documentElement;
		sx = px - dElement.scrollLeft;
		sy = py - dElement.scrollTop;
	    } else {
		sx = px;
		sy = py;
	    }
	} else {	// normal click object
	    if (theEvent.clientX  && theEvent.clientX != undefined) {
		dBody = document.body;
		if (dBody.clientLeft && dBody.clientTop) {
		    sx = theEvent.clientX - dBody.clientLeft;		// relative position in window
		    sy = theEvent.clientY - dBody.clientTop;
		} else { // firefox bug - clientLeft, clientTop don't work in firefox. It is OK in firefox 3.0
		    sx = theEvent.clientX;
		    sy = theEvent.clientY;
		}
	    }

	    // IE calculates (clientX,clientY) relativ to window, not content.
	    if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
		px = document.body.scrollLeft + (sx < 0 ? 0: sx);
		py = document.body.scrollTop + (sy < 0 ? 0: sy);
	    } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
		dElement = document.documentElement;
		if (dElement.scrollLeft !=undefined) px = dElement.scrollLeft + (sx < 0 ? 0: sx);
		if (dElement.scrollTop !=undefined) py = dElement.scrollTop + (sy < 0 ? 0: sy);
	    } else {
		px = (sx < 0 ? 0: sx);
		py = (sy < 0 ? 0: sy);
	    }

	    if (theEvent.pageX) { px = theEvent.pageX; }
	    if (theEvent.pageY) { py = theEvent.pageY; }
	}
    } catch (e) {
    }

    if ((px != -1) &&  (py != -1)){
	l+= "&px=" + px + "&py=" + py;
    }

    if ((sx != -1) &&  (sy != -1)){
	l+= "&sx=" + sx + "&sy=" + sy;
    }

    return l;
}

nclkExports.nclk_proxy = nclk_proxy;
nclkExports.nclk = nclk;
nclkExports.nclk_v2 = nclk_v2;
nclkExports.nclks_select = nclks_select;
nclkExports.nclks_clsnm = nclks_clsnm;
nclkExports.nclks_chk = nclks_chk;
nclkExports.nclks = nclks;

})(window);

/**
 * lcslog.js  v0.7.1
 * Last Updated: 2018-11-13
 * Author : Log-Data
 * Copyright 2018 NHN Corp. All rights Reserved.
 * NHN PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * This code includes some part of the
 * "Flash Player Detection Kit Revision 1.5" by Michael Williams
 * & Copyright 2005-2007 Adobe Macromedia Softward.LLC. All rights reserved.
 */
(function(exportTarget) {
  var lcs_options = {
    nnb: true // nnb 쿠키 관련 처리
  };

  var lcs_version = "v0.7.1";

  var lcs_add = {}; // additional infomation
  var lcs_bc = {}; // browser capacity
  var lcs_perf = {};

  var lcs_do_count = 0;

  var lcs_waiting_pageshow = false;

  // PUBLIC
  function lcs_do(etc) {
    if (lcs_waiting_pageshow) {
      return;
    }

    if (document.readyState !== "complete") { // not loaded
      var eventName = "onpageshow" in window ? "pageshow" : "load";
      var retry = function(__etc) {
	return function() {
	  window.setTimeout(function() {
	    lcs_waiting_pageshow = false;
	    lcs_do(__etc);
	  }, 10);
	}
      }(etc);

      if (document.addEventListener) {
	window.addEventListener(eventName, retry, false);
      } else {
	window.attachEvent("on"+ eventName, retry);
      }

      lcs_waiting_pageshow = true;

      return;
    }

    // {pid: }
    // TODO : check lcs server name!!
    if (!window.lcs_SerName) {
      window.lcs_SerName = "lcs.naver.com";
    }

    var rs = "";
    var index;
    var itarVal;
    var doc = document;
    var wlt = window.location;
    var lcsServerAddr;

    // lcs 서버 주소 생성
    try {
      lcsServerAddr =
	(wlt.protocol ? wlt.protocol : "http:") +
	"//" +
	window.lcs_SerName +
	"/m?";
    } catch (e) {
      return;
    }

    // href / referrer 정보 추가
    try {
      rs =
	lcsServerAddr +
	"u=" +
	encodeURIComponent(wlt.href) +
	"&e=" +
	(doc.referrer ? encodeURIComponent(doc.referrer) : "");
    } catch (e) {}

    try {
      if (typeof lcs_add.i == "undefined") lcs_add.i = "";

      if (lcs_do_count < 1) {
	// lcs_do가 처음 불러지는 경우
	// 페이지 로드 이후 변하지 않는 값
	lcs_setBrowserCapa();

	if (lcs_options.nnb) {
	  lcs_setNNB();
	}

	lcs_add["ct"] = lcs_getConnectType();
	lcs_setNavigationTiming();
	lcs_setPaintTiming();
	lcs_setNavigationType();
      }

      // URL 생성
      for (index in lcs_bc) {
	if (typeof lcs_bc[index] !== "function")
	  rs += "&" + index + "=" + encodeURIComponent(lcs_bc[index]);
      }

      for (index in lcs_add) {
	itarVal = lcs_add[index];

	if (itarVal !== undefined && typeof itarVal !== "function") {
	  rs += "&" + index + "=" + encodeURIComponent(itarVal);
	}
      }

      if (lcs_do_count < 1) {
	for (index in lcs_perf) {
	  itarVal = lcs_perf[index];

	  if (itarVal) {
	    // except 0 for message size;
	    rs += "&" + index + "=" + encodeURIComponent(itarVal);
	  }
	}
      }

      for (index in etc) {
	if (
	  (index.length >= 3 && typeof etc[index] !== "function") ||
	  index === "qy"
	) {
	  rs += "&" + index + "=" + encodeURIComponent(etc[index]);
	}
      }

      // pid가 없는 경우 예외 처리
      if (!!etc === false || !!etc.pid === false) {
	// lcs_do 인자로 pid를 전달 받지 못한 경우 - 내부에서 생성
	var pidFallback;

	if (window.g_pid) {
	  pidFallback = g_pid;
	} else {
	  // lpid 관련 처리
	  // pid 생성
	  pidFallback = lcs_get_lpid(); // lcs_do 이전에 참조하여 생성될 수 있는 경우 고려
	}
	// pid
	rs += "&pid=" + encodeURIComponent(pidFallback);
      }

      // From 2016.7.20, we decided to put timestamp in every lcs log's request URI.
      // The reason for this is to prevent some browser XHR(XML HTTP Request) request cache.
      // Here is the browser list doing cache like this.
      // 1. Chrome mobile
      var timeStr = new Date().getTime();
      rs += "&ts=" + timeStr;

      rs += "&EOU";

      // SEND
      var obj = document.createElement("img");
      obj.src = rs;
      obj.onload = function() {
	obj.onload = null;
	return;
      };

      lcs_do_count++;
    } catch (e) {
      return;
    }
  }

  // PUBLIC
  function lcs_do_gdid(gdid, etc) {
    try {
      if (gdid) {
	lcs_add["i"] = gdid;

	if (etc) {
	  lcs_do(etc);
	} else {
	  lcs_do();
	}
      }
    } catch (e) {}
  }

  // NNB
  function lcs_setNNB() {
    try {
      var lsg = window.localStorage;
      if (lsg) {
	if (lsg.ls) {
	  // localStorage 우선으로 cookie가 갱신되는 경우 값이 일치하지 않을 수 있음.
	  var lc = lsg.ls;
	  if (lc.length == 13) {
	    lcs_add["ls"] = lc;
	    return;
	  }
	}

	var nnb = lcs_getNNBfromCookie();
	if (nnb != null && nnb != "") {
	  lsg.ls = nnb;
	  lcs_add["ls"] = nnb;
	}
      }
    } catch (e) {}
  }

  // pageView 관련 정보 수집
  function lcs_setBrowserCapa() {
    lcs_bc["os"] = lcs_getOS();

    lcs_bc["ln"] = lcs_getlanguage();

    lcs_bc["sr"] = lcs_getScreen();
    lcs_bc["pr"] = window.devicePixelRatio || 1;

    var windowSize = lcs_getWindowSize();
    lcs_bc["bw"] = windowSize["bw"];
    lcs_bc["bh"] = windowSize["bh"];

    lcs_bc["c"] = lcs_getColorDepth();

    lcs_bc["j"] = lcs_getJavaEnabled();

    lcs_bc["k"] = lcs_getCookieEnabled();
  }

  function lcs_getOS() {
    var lcs_os = "";
    try {
      navigator.platform ? (lcs_os = navigator.platform) : "";
    } catch (e) {}
    return lcs_os;
  }

  function lcs_getlanguage() {
    var lcs_ln = "";
    try {
      navigator.userLanguage
	? (lcs_ln = navigator.userLanguage)
	: navigator.language
	  ? (lcs_ln = navigator.language)
	  : "";
    } catch (e) {}

    return lcs_ln;
  }

  function lcs_getScreen() {
    var lcs_sr = "";

    try {
      if (window.screen && screen.width && screen.height) {
	lcs_sr = screen.width + "x" + screen.height;
      } else if (window.java || self.java) {
	var sr = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
	lcs_sr = sr.width + "x" + sr.height;
      }
    } catch (e) {
      lcs_sr = "";
    }

    return lcs_sr;
  }

  function lcs_getWindowSize() {
    var doc = document;

    var size = {
      bw: "",
      bh: ""
    };

    try {
      size["bw"] = doc.documentElement.clientWidth
	? doc.documentElement.clientWidth
	: doc.body.clientWidth;
      size["bh"] = doc.documentElement.clientHeight
	? doc.documentElement.clientHeight
	: doc.body.clientHeight;
    } catch (e) {}

    return size;
  }

  function lcs_getColorDepth() {
    var colorDepth = "";
    try {
      if (window.screen) {
	colorDepth = screen.colorDepth ? screen.colorDepth : screen.pixelDepth;
      } else if (window.java || self.java) {
	var c = java.awt.Toolkit.getDefaultToolkit()
	  .getColorModel()
	  .getPixelSize();
	colorDepth = c;
      }
    } catch (e) {
      colorDepth = "";
    }

    return colorDepth;
  }

  function lcs_getJavaEnabled() {
    var jsEnable = "";
    try {
      jsEnable = navigator.javaEnabled() ? "Y" : "N";
    } catch (e) {}

    return jsEnable;
  }

  function lcs_getCookieEnabled() {
    var cookieEnable = "";
    try {
      cookieEnable = navigator.cookieEnabled ? "Y" : "N";
    } catch (e) {}

    return cookieEnable;
  }

  function lcs_getNNBfromCookie() {
    try {
      var ck = document.cookie;
      var k,
	v,
	i,
	ArrCookies = ck.split(";");
      for (i = 0; i < ArrCookies.length; i++) {
	k = ArrCookies[i].substr(0, ArrCookies[i].indexOf("="));
	v = ArrCookies[i].substr(ArrCookies[i].indexOf("=") + 1);
	k = k.replace(/^\s+|\s+$/g, "");
	if (k == "NNB") {
	  return unescape(v);
	}
      }
    } catch (e) {}
  }

  function lcs_getConnectType() {
    var ct = "";

    try {
      var conn =
	navigator.connection ||
	navigator.mozConnection ||
	navigator.webkitConnection;

      if (conn && typeof conn.type != "undefined") {
	switch (conn.type) {
	  case conn.CELL_2G:
	    ct = "2g";
	    break;
	  case conn.CELL_3G:
	    ct = "3g";
	    break;
	  case conn.CELL_4G:
	    ct = "4g";
	    break;
	  case conn.WIFI:
	    ct = "wifi";
	    break;
	  case conn.ETHERNET:
	    ct = "eth";
	    break;
	  case conn.UNKNOWN:
	    ct = "unknown";
	    break;
	  case conn.NONE:
	    ct = "none";
	    break;
	  default:
	    ct = "";
	}
      } else if (
	typeof blackberry != "undefined" &&
	typeof blackberry.network != "undefined"
      ) {
	var bnet = blackberry.network;
	if (bnet == "Wi-Fi") {
	  ct = "wifi";
	} else if (bnet == "3G") {
	  ct = "3g";
	} else {
	  ct = bnet;
	}
      } else {
	var lcs_isie = navigator.appName == "Microsoft Internet Explorer";
	var lcs_ismac = navigator.userAgent.indexOf("MAC") >= 0;

	if (lcs_isie && !lcs_ismac && bd && bd.addBehavior) {
	  // IE10 이하인 경우
	  var bd = document.body;
	  var lcs_ct = "";

	  var obj = bd.addBehavior("#default#clientCaps"); // MSDN: https://msdn.microsoft.com/en-us/windows/ms535922(v=vs.71)
	  ct = bd.connectionType;
	  bd.removeBehavior(obj);
	}
      }
    } catch (e) {
      console.warn(e);
    }

    return ct;
  }

  // MDN: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
  function lcs_setNavigationTiming() {
    var performance = window.performance || {};

    if (performance.timing) {
      var pt = performance.timing;

      for (var key in pt) {
	var value = pt[key];

	if (typeof value === "number") {
	  // toJSON 함수도 포함 되는 문제 + 다른 타겟 요소가 hasOwnProperty === false
	  lcs_perf[key] = value;
	}
      }
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming
  function lcs_setPaintTiming() {
    var performance = window.performance || {};

    try {
      if (performance.getEntriesByType) {
	var performanceEntries = performance.getEntriesByType("paint");

	performanceEntries.forEach(function(performanceEntry, i, entries) {
	  var name = performanceEntry.name;

	  switch (name) {
	    case "first-paint":
	    case "first-contentful-paint":
	      lcs_perf[name] = performanceEntry.startTime;
	      break;
	    default:
	      break;
	  }
	});
      } else {
	// console.log('Performance timing isn\'t supported.');
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function lcs_setNavigationType() {
    var ngt = getNavigationType();

    if (ngt !== undefined) {
      lcs_perf["ngt"] = ngt;
    }
  }

  function getNavigationType() {
    var performance = window.performance || {};

    if (performance.navigation) {
      return performance.navigation.type;
    }

    return;
  }

  // 같은 페이지에서 nclicks와 lcs 로그를 합산하여 분석할 수 있도록 pageView별로 공통 ID를 추가하여 제공
  // lcs 전송과정에서 lpid 파라메터로 이 값이 업데이트 되어 전달 된다.
  var lpid = null; // lcs pid (pageview 관련)

  function lcs_create_lpid() {
    // 유저 간 구별
    var uaID;
    var nnb = window.localStorage ? window.localStorage.ls : null;

    if (nnb) {
      uaID = nnb;
    } else {
      var nnbFallback; // UA + random

      nnbFallback = navigator.userAgent + Math.random();
      uaID = nnbFallback;
    }

    // 페이지 간 구별
    var performance = window.performance || {};
    var pageURL = location.href;
    var currentTime;
    if (performance.now) {
      currentTime = performance.now();
    } else {
      currentTime = new Date().getTime();
    }

    lpid = hashFunction.md5(uaID + pageURL + currentTime);

    return lpid;
  }

  function lcs_get_lpid() {
    if (lpid === null) {
      lpid = lcs_create_lpid();
    }

    return lpid;
  }

  function lcs_update_lpid() {
    lpid = lcs_create_lpid();

    return lpid;
  }

  // 외부 라이브러리 (TODO: bundle 개발 환경 구축 필요)
  // MD5 hashfunction
  var hashFunction = {};

  (function(exportTarget) {
    /*
	 * JavaScript MD5
	 * https://github.com/blueimp/JavaScript-MD5
	 *
	 * Copyright 2011, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * https://opensource.org/licenses/MIT
	 *
	 * Based on
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */
    /*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
    function safeAdd(x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xffff);
    }

    /*
	 * Bitwise rotate a 32-bit number to the left.
	 */
    function bitRotateLeft(num, cnt) {
      return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
	 * These functions implement the four basic operations the algorithm uses.
	 */
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(
	bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s),
	b
      );
    }

    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn((b & c) | (~b & d), a, b, x, s, t);
    }

    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
    }

    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    /*
	 * Calculate the MD5 of an array of little-endian words, and a bit length.
	 */
    function binlMD5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << len % 32;
      x[(((len + 64) >>> 9) << 4) + 14] = len;

      var i;
      var olda;
      var oldb;
      var oldc;
      var oldd;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (i = 0; i < x.length; i += 16) {
	olda = a;
	oldb = b;
	oldc = c;
	oldd = d;

	a = md5ff(a, b, c, d, x[i], 7, -680876936);
	d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
	c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
	b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
	a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
	d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
	c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
	b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
	a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
	d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
	c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
	b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
	a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
	d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
	c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
	b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

	a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
	d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
	c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
	b = md5gg(b, c, d, a, x[i], 20, -373897302);
	a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
	d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
	c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
	b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
	a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
	d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
	c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
	b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
	a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
	d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
	c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
	b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

	a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
	d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
	c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
	b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
	a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
	d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
	c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
	b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
	a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
	d = md5hh(d, a, b, c, x[i], 11, -358537222);
	c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
	b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
	a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
	d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
	c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
	b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

	a = md5ii(a, b, c, d, x[i], 6, -198630844);
	d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
	c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
	b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
	a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
	d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
	c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
	b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
	a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
	d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
	c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
	b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
	a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
	d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
	c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
	b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

	a = safeAdd(a, olda);
	b = safeAdd(b, oldb);
	c = safeAdd(c, oldc);
	d = safeAdd(d, oldd);
      }
      return [a, b, c, d];
    }

    /*
	 * Convert an array of little-endian words to a string
	 */
    function binl2rstr(input) {
      var i;
      var output = "";
      var length32 = input.length * 32;
      for (i = 0; i < length32; i += 8) {
	output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
      }
      return output;
    }

    /*
	 * Convert a raw string to an array of little-endian words
	 * Characters >255 have their high-byte silently ignored.
	 */
    function rstr2binl(input) {
      var i;
      var output = [];
      output[(input.length >> 2) - 1] = undefined;
      for (i = 0; i < output.length; i += 1) {
	output[i] = 0;
      }
      var length8 = input.length * 8;
      for (i = 0; i < length8; i += 8) {
	output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
      }
      return output;
    }

    /*
	 * Calculate the MD5 of a raw string
	 */
    function rstrMD5(s) {
      return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
    }

    /*
	 * Calculate the HMAC-MD5, of a key and some data (raw strings)
	 */
    function rstrHMACMD5(key, data) {
      var i;
      var bkey = rstr2binl(key);
      var ipad = [];
      var opad = [];
      var hash;
      ipad[15] = opad[15] = undefined;
      if (bkey.length > 16) {
	bkey = binlMD5(bkey, key.length * 8);
      }
      for (i = 0; i < 16; i += 1) {
	ipad[i] = bkey[i] ^ 0x36363636;
	opad[i] = bkey[i] ^ 0x5c5c5c5c;
      }
      hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
      return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
    }

    /*
	 * Convert a raw string to a hex string
	 */
    function rstr2hex(input) {
      var hexTab = "0123456789abcdef";
      var output = "";
      var x;
      var i;
      for (i = 0; i < input.length; i += 1) {
	x = input.charCodeAt(i);
	output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
      }
      return output;
    }

    /*
	 * Encode a string as utf-8
	 */
    function str2rstrUTF8(input) {
      return unescape(encodeURIComponent(input));
    }

    /*
	 * Take string arguments and return either raw or hex encoded strings
	 */
    function rawMD5(s) {
      return rstrMD5(str2rstrUTF8(s));
    }

    function hexMD5(s) {
      return rstr2hex(rawMD5(s));
    }

    function rawHMACMD5(k, d) {
      return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
    }

    function hexHMACMD5(k, d) {
      return rstr2hex(rawHMACMD5(k, d));
    }

    function md5(string, key, raw) {
      if (!key) {
	if (!raw) {
	  return hexMD5(string);
	}
	return rawMD5(string);
      }
      if (!raw) {
	return hexHMACMD5(key, string);
      }
      return rawHMACMD5(key, string);
    }

    exportTarget.md5 = md5;
  })(hashFunction);

  // PUBLIC: global export
  exportTarget.lcs_do = lcs_do;
  exportTarget.lcs_do_gdid = lcs_do_gdid;
  exportTarget.lcs_get_lpid = lcs_get_lpid; // nclick에서 참조
  exportTarget.lcs_update_lpid = lcs_update_lpid;
  exportTarget.lcs_version = lcs_version;
})(window);

function BigInteger(a, b, c) {
    if (a != null) if ("number" == typeof a) this.fromNumber(a, b, c);
    else if (b == null && "string" != typeof a) this.fromString(a, 256);
    else this.fromString(a, b)
}
function nbi() {
    return new BigInteger(null)
}
function am1(a, b, c, d, e, f) {
    while (--f >= 0) {
	var g = b * this[a++] + c[d] + e;
	e = Math.floor(g / 67108864);
	c[d++] = g & 67108863
    }
    return e
}
function am2(a, b, c, d, e, f) {
    var g = b & 32767,
	h = b >> 15;
    while (--f >= 0) {
	var i = this[a] & 32767;
	var j = this[a++] >> 15;
	var k = h * i + j * g;
	i = g * i + ((k & 32767) << 15) + c[d] + (e & 1073741823);
	e = (i >>> 30) + (k >>> 15) + h * j + (e >>> 30);
	c[d++] = i & 1073741823
    }
    return e
}
function am3(a, b, c, d, e, f) {
    var g = b & 16383,
	h = b >> 14;
    while (--f >= 0) {
	var i = this[a] & 16383;
	var j = this[a++] >> 14;
	var k = h * i + j * g;
	i = g * i + ((k & 16383) << 14) + c[d] + e;
	e = (i >> 28) + (k >> 14) + h * j;
	c[d++] = i & 268435455
    }
    return e
}
function int2char(a) {
    return BI_RM.charAt(a)
}
function intAt(a, b) {
    var c = BI_RC[a.charCodeAt(b)];
    return c == null ? -1 : c
}
function bnpCopyTo(a) {
    for (var b = this.t - 1; b >= 0; --b) a[b] = this[b];
    a.t = this.t;
    a.s = this.s
}
function bnpFromInt(a) {
    this.t = 1;
    this.s = a < 0 ? -1 : 0;
    if (a > 0) this[0] = a;
    else if (a < -1) this[0] = a + DV;
    else this.t = 0
}
function nbv(a) {
    var b = nbi();
    b.fromInt(a);
    return b
}
function bnpFromString(a, b) {
    var c;
    if (b == 16) c = 4;
    else if (b == 8) c = 3;
    else if (b == 256) c = 8;
    else if (b == 2) c = 1;
    else if (b == 32) c = 5;
    else if (b == 4) c = 2;
    else {
	this.fromRadix(a, b);
	return
    }
    this.t = 0;
    this.s = 0;
    var d = a.length,
	e = false,
	f = 0;
    while (--d >= 0) {
	var g = c == 8 ? a[d] & 255 : intAt(a, d);
	if (g < 0) {
	    if (a.charAt(d) == "-") e = true;
	    continue
	}
	e = false;
	if (f == 0) this[this.t++] = g;
	else if (f + c > this.DB) {
	    this[this.t - 1] |= (g & (1 << this.DB - f) - 1) << f;
	    this[this.t++] = g >> this.DB - f
	} else this[this.t - 1] |= g << f;
	f += c;
	if (f >= this.DB) f -= this.DB
    }
    if (c == 8 && (a[0] & 128) != 0) {
	this.s = -1;
	if (f > 0) this[this.t - 1] |= (1 << this.DB - f) - 1 << f
    }
    this.clamp();
    if (e) BigInteger.ZERO.subTo(this, this)
}
function bnpClamp() {
    var a = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == a)--this.t
}
function bnToString(a) {
    if (this.s < 0) return "-" + this.negate().toString(a);
    var b;
    if (a == 16) b = 4;
    else if (a == 8) b = 3;
    else if (a == 2) b = 1;
    else if (a == 32) b = 5;
    else if (a == 4) b = 2;
    else return this.toRadix(a);
    var c = (1 << b) - 1,
	d, e = false,
	f = "",
	g = this.t;
    var h = this.DB - g * this.DB % b;
    if (g-- > 0) {
	if (h < this.DB && (d = this[g] >> h) > 0) {
	    e = true;
	    f = int2char(d)
	}
	while (g >= 0) {
	    if (h < b) {
		d = (this[g] & (1 << h) - 1) << b - h;
		d |= this[--g] >> (h += this.DB - b)
	    } else {
		d = this[g] >> (h -= b) & c;
		if (h <= 0) {
		    h += this.DB;
		    --g
		}
	    }
	    if (d > 0) e = true;
	    if (e) f += int2char(d)
	}
    }
    return e ? f : "0"
}
function bnNegate() {
    var a = nbi();
    BigInteger.ZERO.subTo(this, a);
    return a
}
function bnAbs() {
    return this.s < 0 ? this.negate() : this
}
function bnCompareTo(a) {
    var b = this.s - a.s;
    if (b != 0) return b;
    var c = this.t;
    b = c - a.t;
    if (b != 0) return b;
    while (--c >= 0) if ((b = this[c] - a[c]) != 0) return b;
    return 0
}
function nbits(a) {
    var b = 1,
	c;
    if ((c = a >>> 16) != 0) {
	a = c;
	b += 16
    }
    if ((c = a >> 8) != 0) {
	a = c;
	b += 8
    }
    if ((c = a >> 4) != 0) {
	a = c;
	b += 4
    }
    if ((c = a >> 2) != 0) {
	a = c;
	b += 2
    }
    if ((c = a >> 1) != 0) {
	a = c;
	b += 1
    }
    return b
}
function bnBitLength() {
    if (this.t <= 0) return 0;
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}
function bnpDLShiftTo(a, b) {
    var c;
    for (c = this.t - 1; c >= 0; --c) b[c + a] = this[c];
    for (c = a - 1; c >= 0; --c) b[c] = 0;
    b.t = this.t + a;
    b.s = this.s
}
function bnpDRShiftTo(a, b) {
    for (var c = a; c < this.t; ++c) b[c - a] = this[c];
    b.t = Math.max(this.t - a, 0);
    b.s = this.s
}
function bnpLShiftTo(a, b) {
    var c = a % this.DB;
    var d = this.DB - c;
    var e = (1 << d) - 1;
    var f = Math.floor(a / this.DB),
	g = this.s << c & this.DM,
	h;
    for (h = this.t - 1; h >= 0; --h) {
	b[h + f + 1] = this[h] >> d | g;
	g = (this[h] & e) << c
    }
    for (h = f - 1; h >= 0; --h) b[h] = 0;
    b[f] = g;
    b.t = this.t + f + 1;
    b.s = this.s;
    b.clamp()
}
function bnpRShiftTo(a, b) {
    b.s = this.s;
    var c = Math.floor(a / this.DB);
    if (c >= this.t) {
	b.t = 0;
	return
    }
    var d = a % this.DB;
    var e = this.DB - d;
    var f = (1 << d) - 1;
    b[0] = this[c] >> d;
    for (var g = c + 1; g < this.t; ++g) {
	b[g - c - 1] |= (this[g] & f) << e;
	b[g - c] = this[g] >> d
    }
    if (d > 0) b[this.t - c - 1] |= (this.s & f) << e;
    b.t = this.t - c;
    b.clamp()
}
function bnpSubTo(a, b) {
    var c = 0,
	d = 0,
	e = Math.min(a.t, this.t);
    while (c < e) {
	d += this[c] - a[c];
	b[c++] = d & this.DM;
	d >>= this.DB
    }
    if (a.t < this.t) {
	d -= a.s;
	while (c < this.t) {
	    d += this[c];
	    b[c++] = d & this.DM;
	    d >>= this.DB
	}
	d += this.s
    } else {
	d += this.s;
	while (c < a.t) {
	    d -= a[c];
	    b[c++] = d & this.DM;
	    d >>= this.DB
	}
	d -= a.s
    }
    b.s = d < 0 ? -1 : 0;
    if (d < -1) b[c++] = this.DV + d;
    else if (d > 0) b[c++] = d;
    b.t = c;
    b.clamp()
}
function bnpMultiplyTo(a, b) {
    var c = this.abs(),
	d = a.abs();
    var e = c.t;
    b.t = e + d.t;
    while (--e >= 0) b[e] = 0;
    for (e = 0; e < d.t; ++e) b[e + c.t] = c.am(0, d[e], b, e, 0, c.t);
    b.s = 0;
    b.clamp();
    if (this.s != a.s) BigInteger.ZERO.subTo(b, b)
}
function bnpSquareTo(a) {
    var b = this.abs();
    var c = a.t = 2 * b.t;
    while (--c >= 0) a[c] = 0;
    for (c = 0; c < b.t - 1; ++c) {
	var d = b.am(c, b[c], a, 2 * c, 0, 1);
	if ((a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV) {
	    a[c + b.t] -= b.DV;
	    a[c + b.t + 1] = 1
	}
    }
    if (a.t > 0) a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1);
    a.s = 0;
    a.clamp()
}
function bnpDivRemTo(a, b, c) {
    var d = a.abs();
    if (d.t <= 0) return;
    var e = this.abs();
    if (e.t < d.t) {
	if (b != null) b.fromInt(0);
	if (c != null) this.copyTo(c);
	return
    }
    if (c == null) c = nbi();
    var f = nbi(),
	g = this.s,
	h = a.s;
    var i = this.DB - nbits(d[d.t - 1]);
    if (i > 0) {
	d.lShiftTo(i, f);
	e.lShiftTo(i, c)
    } else {
	d.copyTo(f);
	e.copyTo(c)
    }
    var j = f.t;
    var k = f[j - 1];
    if (k == 0) return;
    var l = k * (1 << this.F1) + (j > 1 ? f[j - 2] >> this.F2 : 0);
    var m = this.FV / l,
	n = (1 << this.F1) / l,
	o = 1 << this.F2;
    var p = c.t,
	q = p - j,
	r = b == null ? nbi() : b;
    f.dlShiftTo(q, r);
    if (c.compareTo(r) >= 0) {
	c[c.t++] = 1;
	c.subTo(r, c)
    }
    BigInteger.ONE.dlShiftTo(j, r);
    r.subTo(f, f);
    while (f.t < j) f[f.t++] = 0;
    while (--q >= 0) {
	var s = c[--p] == k ? this.DM : Math.floor(c[p] * m + (c[p - 1] + o) * n);
	if ((c[p] += f.am(0, s, c, q, 0, j)) < s) {
	    f.dlShiftTo(q, r);
	    c.subTo(r, c);
	    while (c[p] < --s) c.subTo(r, c)
	}
    }
    if (b != null) {
	c.drShiftTo(j, b);
	if (g != h) BigInteger.ZERO.subTo(b, b)
    }
    c.t = j;
    c.clamp();
    if (i > 0) c.rShiftTo(i, c);
    if (g < 0) BigInteger.ZERO.subTo(c, c)
}
function bnMod(a) {
    var b = nbi();
    this.abs().divRemTo(a, null, b);
    if (this.s < 0 && b.compareTo(BigInteger.ZERO) > 0) a.subTo(b, b);
    return b
}
function Classic(a) {
    this.m = a
}
function cConvert(a) {
    if (a.s < 0 || a.compareTo(this.m) >= 0) return a.mod(this.m);
    else return a
}
function cRevert(a) {
    return a
}
function cReduce(a) {
    a.divRemTo(this.m, null, a)
}
function cMulTo(a, b, c) {
    a.multiplyTo(b, c);
    this.reduce(c)
}
function cSqrTo(a, b) {
    a.squareTo(b);
    this.reduce(b)
}
function bnpInvDigit() {
    if (this.t < 1) return 0;
    var a = this[0];
    if ((a & 1) == 0) return 0;
    var b = a & 3;
    b = b * (2 - (a & 15) * b) & 15;
    b = b * (2 - (a & 255) * b) & 255;
    b = b * (2 - ((a & 65535) * b & 65535)) & 65535;
    b = b * (2 - a * b % this.DV) % this.DV;
    return b > 0 ? this.DV - b : -b
}
function Montgomery(a) {
    this.m = a;
    this.mp = a.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << a.DB - 15) - 1;
    this.mt2 = 2 * a.t
}
function montConvert(a) {
    var b = nbi();
    a.abs().dlShiftTo(this.m.t, b);
    b.divRemTo(this.m, null, b);
    if (a.s < 0 && b.compareTo(BigInteger.ZERO) > 0) this.m.subTo(b, b);
    return b
}
function montRevert(a) {
    var b = nbi();
    a.copyTo(b);
    this.reduce(b);
    return b
}
function montReduce(a) {
    while (a.t <= this.mt2) a[a.t++] = 0;
    for (var b = 0; b < this.m.t; ++b) {
	var c = a[b] & 32767;
	var d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
	c = b + this.m.t;
	a[c] += this.m.am(0, d, a, b, 0, this.m.t);
	while (a[c] >= a.DV) {
	    a[c] -= a.DV;
	    a[++c]++
	}
    }
    a.clamp();
    a.drShiftTo(this.m.t, a);
    if (a.compareTo(this.m) >= 0) a.subTo(this.m, a)
}
function montSqrTo(a, b) {
    a.squareTo(b);
    this.reduce(b)
}
function montMulTo(a, b, c) {
    a.multiplyTo(b, c);
    this.reduce(c)
}
function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0
}
function bnpExp(a, b) {
    if (a > 4294967295 || a < 1) return BigInteger.ONE;
    var c = nbi(),
	d = nbi(),
	e = b.convert(this),
	f = nbits(a) - 1;
    e.copyTo(c);
    while (--f >= 0) {
	b.sqrTo(c, d);
	if ((a & 1 << f) > 0) b.mulTo(d, e, c);
	else {
	    var g = c;
	    c = d;
	    d = g
	}
    }
    return b.revert(c)
}
function bnModPowInt(a, b) {
    var c;
    if (a < 256 || b.isEven()) c = new Classic(b);
    else c = new Montgomery(b);
    return this.exp(a, c)
}
function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = new Array
}
function ARC4init(a) {
    var b, c, d;
    for (b = 0; b < 256; ++b) this.S[b] = b;
    c = 0;
    for (b = 0; b < 256; ++b) {
	c = c + this.S[b] + a[b % a.length] & 255;
	d = this.S[b];
	this.S[b] = this.S[c];
	this.S[c] = d
    }
    this.i = 0;
    this.j = 0
}
function ARC4next() {
    var a;
    this.i = this.i + 1 & 255;
    this.j = this.j + this.S[this.i] & 255;
    a = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = a;
    return this.S[a + this.S[this.i] & 255]
}
function prng_newstate() {
    return new Arcfour
}
function rng_seed_int(a) {
    rng_pool[rng_pptr++] ^= a & 255;
    rng_pool[rng_pptr++] ^= a >> 8 & 255;
    rng_pool[rng_pptr++] ^= a >> 16 & 255;
    rng_pool[rng_pptr++] ^= a >> 24 & 255;
    if (rng_pptr >= rng_psize) rng_pptr -= rng_psize
}
function rng_seed_time() {
    rng_seed_int((new Date).getTime())
}
function rng_get_byte() {
    if (rng_state == null) {
	rng_seed_time();
	rng_state = prng_newstate();
	rng_state.init(rng_pool);
	for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) rng_pool[rng_pptr] = 0;
	rng_pptr = 0
    }
    return rng_state.next()
}
function rng_get_bytes(a) {
    var b;
    for (b = 0; b < a.length; ++b) a[b] = rng_get_byte()
}
function SecureRandom() {}
function parseBigInt(a, b) {
    return new BigInteger(a, b)
}
function linebrk(a, b) {
    var c = "";
    var d = 0;
    while (d + b < a.length) {
	c += a.substring(d, d + b) + "\n";
	d += b
    }
    return c + a.substring(d, a.length)
}
function byte2Hex(a) {
    if (a < 16) return "0" + a.toString(16);
    else return a.toString(16)
}
function pkcs1pad2(a, b) {
    if (b < a.length + 11) {
	alert("Message too long for RSA");
	return null
    }
    var c = new Array;
    var d = a.length - 1;
    while (d >= 0 && b > 0) c[--b] = a.charCodeAt(d--);
    c[--b] = 0;
    var e = new SecureRandom;
    var f = new Array;
    while (b > 2) {
	f[0] = 0;
	while (f[0] == 0) e.nextBytes(f);
	c[--b] = f[0]
    }
    c[--b] = 2;
    c[--b] = 0;
    return new BigInteger(c)
}
function RSAKey() {
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null
}
function RSASetPublic(a, b) {
    if (a != null && b != null && a.length > 0 && b.length > 0) {
	this.n = parseBigInt(a, 16);
	this.e = parseInt(b, 16)
    } else alert("Invalid RSA public key")
}
function RSADoPublic(a) {
    return a.modPowInt(this.e, this.n)
}
function RSAEncrypt(a) {
    var b = pkcs1pad2(a, this.n.bitLength() + 7 >> 3);
    if (b == null) return null;
    var c = this.doPublic(b);
    if (c == null) return null;
    var d = c.toString(16);
    var e = (this.n.bitLength() + 7 >> 3 << 1) - d.length;
    while (e-- > 0) d = "0" + d;
    return d
}
function hex2b64(a) {
    var b;
    var c;
    var d = "";
    for (b = 0; b + 3 <= a.length; b += 3) {
	c = parseInt(a.substring(b, b + 3), 16);
	d += b64map.charAt(c >> 6) + b64map.charAt(c & 63)
    }
    if (b + 1 == a.length) {
	c = parseInt(a.substring(b, b + 1), 16);
	d += b64map.charAt(c << 2)
    } else if (b + 2 == a.length) {
	c = parseInt(a.substring(b, b + 2), 16);
	d += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4)
    }
    while ((d.length & 3) > 0) d += b64pad;
    return d
}
function b64tohex(a) {
    var b = "";
    var c;
    var d = 0;
    var e;
    for (c = 0; c < a.length; ++c) {
	if (a.charAt(c) == b64pad) break;
	v = b64map.indexOf(a.charAt(c));
	if (v < 0) continue;
	if (d == 0) {
	    b += int2char(v >> 2);
	    e = v & 3;
	    d = 1
	} else if (d == 1) {
	    b += int2char(e << 2 | v >> 4);
	    e = v & 15;
	    d = 2
	} else if (d == 2) {
	    b += int2char(e);
	    b += int2char(v >> 2);
	    e = v & 3;
	    d = 3
	} else {
	    b += int2char(e << 2 | v >> 4);
	    b += int2char(v & 15);
	    d = 0
	}
    }
    if (d == 1) b += int2char(e << 2);
    return b
}
function b64toBA(a) {
    var b = b64tohex(a);
    var c;
    var d = new Array;
    for (c = 0; 2 * c < b.length; ++c) {
	d[c] = parseInt(b.substring(2 * c, 2 * c + 2), 16)
    }
    return d
}

var isIE = navigator.appVersion.indexOf("MSIE") != -1 ? true : false;
var isWin = navigator.appVersion.toLowerCase().indexOf("win") != -1 ? true : false;
var isOpera = navigator.userAgent.indexOf("Opera") != -1 ? true : false;
var dbits;
var canary = 0xdeadbeefcafe;
var j_lm = (canary & 16777215) == 15715070;
if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30
} else if (j_lm && navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;
    dbits = 26
} else {
    BigInteger.prototype.am = am3;
    dbits = 28
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
if (rng_pool == null) {
    rng_pool = new Array;
    rng_pptr = 0;
    var t;
    if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto && (typeof window.crypto.random === 'function')) {
	var z = window.crypto.random(32);
	for (t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = z.charCodeAt(t) & 255
    }
    while (rng_pptr < rng_psize) {
	t = Math.floor(65536 * Math.random());
	rng_pool[rng_pptr++] = t >>> 8;
	rng_pool[rng_pptr++] = t & 255
    }
    rng_pptr = 0;
    rng_seed_time()
}
SecureRandom.prototype.nextBytes = rng_get_bytes;
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;

function $() {
    var a = [];
    for (var b = 0; b < arguments.length; b++) {
	if (typeof arguments[b] == "string") {
	    a[a.length] = document.getElementById(arguments[b]);
	} else {
	    a[a.length] = arguments[b];
	}
    }
    return a[1] ? a : a[0];
}
function resizePopup(w,h) {
	try {
		document.body.style.overflow='hidden';
		var clintAgent = navigator.userAgent;

		if ( clintAgent.indexOf("MSIE") != -1 ) {
			addheight = 50;
			if ( clintAgent.indexOf("MSIE 7") != -1 ) {
				addheight = 70;
			} else if ( clintAgent.indexOf("MSIE 8") != -1 ) {
				addheight = 80;
			} else if ( clintAgent.indexOf("MSIE 9") != -1 ) {
			}
			window.resizeTo(w, h+addheight);
		}
		else if(clintAgent.indexOf("Chrome") != -1 )
		{
			window.resizeTo(w, h+60);
		}
		else
		{
			window.resizeBy(w-window.innerWidth, h-window.innerHeight);
		}
	} catch (e) {
	}
}
function viewKeyboard()
{
	var e = $('view_keyboard');
	if(e.className.indexOf(" btn_key_up") == -1) {
		e.className = "sp btn_key_up";
		e.innerHTML = pc_keyboard_close;
		show('keyboard_img');
	} else {
		e.className = "sp btn_key_down";
		hide('keyboard_img');
		e.innerHTML = pc_keyboard_open;
	}
}
function switchkeyboard()
{
	var e = $('keyboard_img');
	var f = $('keyboard_switch');
	if(e.className.indexOf(" key_symbol") == -1) {
		e.className = "key key_symbol";
		f.className = "sp btn_symbol";
		f.innerHTML = view_char;
	} else {
		e.className = "key key_char";
		f.className = "sp btn_char";
		f.innerHTML = view_symbol;
	}
}
function switchlocale()
{
	try {
	$("encpw").value="";
	$("encnm").value="";
	$("id").value="";
	$("pw").value="";
	}catch (e){}
	try {
	$("otp").value="";
	}catch (e){}
	$('locale').value = $('locale_switch').value;
	$('localechange').value = "true";
	$("frmNIDLogin").submit();
}
function normal()
{
	var urlWithParam="";
	if (isObjExist("url")) {
		urlWithParam="url="+encodeURIComponent($("url").value);
	}
	if (isObjExist("surl")) {
		urlWithParam=urlWithParam+"&surl="+encodeURIComponent($("surl").value);
	}
	if (isObjExist("locale")) {
		urlWithParam=urlWithParam+"&locale="+$("locale").value;
	}
	if (isObjExist("a_version")) {
		urlWithParam=urlWithParam+"&a_version="+$("a_version").value;
	}
	if (isObjExist("viewtype")) {
		urlWithParam=urlWithParam+"&viewtype="+$("viewtype").value;
	}
	if (isObjExist("svctype")) {
		urlWithParam=urlWithParam+"&svctype="+$("svctype").value;
	}
	if (isObjExist("client_id")) {
		urlWithParam=urlWithParam+"&client_id="+$("client_id").value;
	}
	if (isObjExist("postDataKey")) {
		urlWithParam=urlWithParam+"&postDataKey="+$("postDataKey").value;
	}
	if (isObjExist("post_charset")) {
		urlWithParam=urlWithParam+"&post_charset="+$("post_charset").value;
	}
	if (isObjExist("logintp")) {
		urlWithParam=urlWithParam+"&logintp="+$("logintp").value;
	}
	if (isObjExist("disposable")) {
		urlWithParam=urlWithParam+"&disposable=";
	}

	if ($("frmNIDLogin").action.indexOf("?")!=-1){
		urlWithParam=$("frmNIDLogin").action+"&mode=form&"+urlWithParam
	} else {
		urlWithParam=$("frmNIDLogin").action+"?mode=form&"+urlWithParam
	}
	location.href=urlWithParam;
}
function show(id) {
	var e = $(id);
	if (e != null) {
		e.style.display = "block";
	}
}
function hide(id) {
	var e = $(id);
	if (e != null) {
		e.style.display = "none";
	}
}

function msieblur(a)
{
 	if (navigator.userAgent.indexOf("MSIE") != -1) {
 		try{
 			a.blur();
 		}catch(e){}
 	}
}
function borderOn(inputId,id) {
	var e = $(id);
	if (e.className.indexOf(" focus") == -1) {
		e.className = e.className + " focus";
	}
	try{
	hide('label_'+id);
	}catch(e){}
}
function borderOff(inputId,id) {
	var e = $(id);
	var f = $(inputId);
	e.className = e.className.replace(" focus", "");
	try{
	if (f.value.length==0){
		show('label_'+id);
	}
	}catch(e){}
}
function confirmSubmit() {
	var id = $("id");
	var pw = $("pw");
	var encpw = $("encpw");

	if(id.value == "") {
		show("err_empty_id");
		hide("err_empty_pw");
		hide("err_common");
		id.focus();
		return false;
	} else if(pw.value == "") {
		hide("err_empty_id");
		show("err_empty_pw");
		hide("err_common");
		pw.focus();
		return false;
	}
	try{
		$("ls").value = localStorage.getItem("nid_t");
	}catch(e){}

	return encryptIdPw();
}
function encryptIdPw() {
	var id = $("id");
	var pw = $("pw");
	var encpw = $("encpw");
	var rsa = new RSAKey;

	if (keySplit(session_keys)) {
		rsa.setPublic(evalue, nvalue);
		try{
			encpw.value = rsa.encrypt(
				getLenChar(sessionkey) + sessionkey +
				getLenChar(id.value) + id.value +
				getLenChar(pw.value) + pw.value);
		} catch(e) {
			return false;
		}
		$('enctp').value = 1;
		id.value = "";
		pw.value = "";
		return true;
	}
	else
	{
		getKeyByRuntimeInclude();
		return false;
	}

	return false;
}
function getKeyByRuntimeInclude() {
	try {
		var keyjs  = document.createElement('script');
		keyjs.type = 'text/javascript';
		keyjs.src = '/dynamicKeyJs/'+getObjValue("dynamicKey");
		document.getElementsByTagName('head')[0].appendChild(keyjs);
	} catch (e) {
	}
}
function clearErrorLayers() {
  var errors = new Array('err_empty_captcha', 'err_autologin', 'err_network_delay',
		'err_unsupport_browser', 'err_empty_id', 'err_empty_pw', 'err_idpw_incorrect', 'err_grpidpw_incorrect');

	for (var error in errors) {
		e = $(error);
		if (e != null) {
			e.style.display = "none";
		}
	}
}
function keySplit(a) {
	keys = a.split(",");
	if (!a || !keys[0] || !keys[1] || !keys[2] || !keys[3]) {
		return false;
	}
	sessionkey = keys[0];
	keyname = keys[1];
	evalue = keys[2];
	nvalue = keys[3];
	$("encnm").value = keyname;
	return true
}
function getLenChar(a) {
    a = a + "";
    return String.fromCharCode(a.length)
}
function respSelect()
{
	var chk = $("login_chk");
	if (chk == null) {
		return;
	}

	if( chk.checked == true ) {
		$("resp").value = "";
	} else {
		$("resp").value = "8";
	}
}
var getkeyurl = '/dynamicKey/';
var curtimecheck = 0;
function getKeysv2() {
	var curtimes = new Date();
	if (curtimecheck == 0) {
		getAjaxResult(getkeyurl+getObjValue("dynamicKey"));
		curtimecheck = curtimes.getTime();
	} else if (curtimes.getTime() - curtimecheck > 60000) {
		curtimecheck = curtimes.getTime();
		getAjaxResult(getkeyurl+getObjValue("dynamicKey"));
	}
}
function getAjaxResult(urls) {
	try {
		var xmlhttp = getXmlHttp();
		xmlhttp.open("GET", urls);
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				session_keys = xmlhttp.responseText
			}
		}
		xmlhttp.send(null);
	} catch (e) {
		if (window.bridgeGotTime) {
			throw e;
		} else {
			// page reload?
		}
	}
}
function getXmlHttp() {
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
function getCookie(a) {
    var b = a + "=";
    var c = b.length;
    var d = document.cookie.length;
    var e = 0;
    while (e < d) {
	var f = e + c;
	if (document.cookie.substring(e, f) == b) {
	    var g = document.cookie.indexOf(";", f);
	    if (g == -1) g = document.cookie.length;
	    return unescape(document.cookie.substring(f, g))
	}
	e = document.cookie.indexOf(" ", e) + 1;
	if (e == 0) break
    }
    return null
}
function savedLong(a) {
	var nvlong = $("keep");
	if (a.checked == true) {
		nvlong.value='on';
		ipCheckOff();
	}
	else
	{
		nvlong.value='off';
	}
}
function ipCheckOff() {
	$("switch_blind").innerHTML="off";
	$("switch").checked = false;
	setSmartLevel(-1);
}
function ipCheckOn(level) {
	$("switch_blind").innerHTML="on";
	$("switch").checked = true;
	setSmartLevel(level);
}
function setSmartLevel(level) {
	try {
	$('smart_LEVEL').value = level;
	} catch(e) {}
	try {
	$('smart_LEVEL').value = level;
	} catch(e) {}
	var today = new Date();
	var expire = new Date(today.getTime() + 60 * 60 * 24 * 365 * 1000);
	var curCookie = "nid_slevel=" + escape(level) + "; expires="
			+ expire.toGMTString() + "; path=/; domain=.nid.naver.com;";
	document.cookie = curCookie;
}
function initSmartLevel()
{
	smart_level = getCookie("nid_slevel") ? getCookie("nid_slevel") : 1;
	try{
	$('smart_level').value = smart_level;
	}catch (e){}
	try{
	$('smart_LEVEL').value = smart_level;
	}catch (e){}
	try{
	if (smart_level > 0) {
		ipCheckOn(smart_level);
	} else {
		ipCheckOff();
	}
	}catch(e){}
}
function ipCheck(a,e) {
	if (a.checked == true) {
		try{
		ipCheckOn(1);
		}catch(e){}
	} else {
		try{
		ipCheckOff();
		}catch(e){}
	}
}
var isshift = false;
var userStrokes = false;
function checkShiftUp(e) {
	if (e.which && e.which == 16) {
		isshift = false;
	}
}
function checkShiftDown(e) {
	var down_keyCode=0;
	if (e.which && e.which == 16) {
		isshift = true;
	}
	if (window.event) {
		down_keyCode = e.keyCode;
	}
	else if (e.which) {
		down_keyCode = e.which;
	}

	if (down_keyCode && down_keyCode == 20) {
		if (!is_capslockon)
		{
			is_capslockon=true;
			show('err_capslock');
			setTimeout(function () {hide('err_capslock');},1500);
		}
		else
		{
			is_capslockon=false;
			hide('err_capslock');
		}
	}
}
var is_capslockon=false;
function checkEnt(e) {
	if (window.event) { // IE
		myKeyCode = e.keyCode;
		myShiftKey = e.shiftKey;
	} else if (e.which) { // netscape ff opera
		myKeyCode = e.which;
		myShiftKey = isshift;
	}
}
function capslockevt(e) {
	userStrokes = true;
	var myKeyCode = 0;
	var myShiftKey = false;
	if (window.event) { // IE
		myKeyCode = e.keyCode;
		myShiftKey = e.shiftKey;
	} else if (e.which) { // netscape ff opera
		myKeyCode = e.which; // myShiftKey=( myKeyCode == 16 ) ? true :
								// false;
		myShiftKey = isshift;
	}
	if ((myKeyCode >= 65 && myKeyCode <= 90) && !myShiftKey) {
		is_capslockon=true;
		hide('err_common');
		show('err_capslock');
		setTimeout(function () {hide('err_capslock');},3000);
	} else if ((myKeyCode >= 97 && myKeyCode <= 122) && myShiftKey) {
		is_capslockon=true;
		hide('err_common');
		show('err_capslock');
		setTimeout(function () {hide('err_capslock');},3000);
	} else {
		is_capslockon=false;
		setTimeout(function () {hide('err_capslock');},1500);
	}
}

function swap_social_menu()
{
	if ($("social_more_button").className.indexOf("open")==-1)
	{
		$("social_more_button").className = "btn_more sp open";
		$("social_extra_view_div").style.display="block";
	}
	else
	{
		$("social_more_button").className = "btn_more sp close";
		$("social_extra_view_div").style.display="none";
	}
}
function isOldIE()
{
	try{
		var agent = window.navigator.userAgent;
		if(agent.indexOf("MSIE 8")!= -1 || agent.indexOf("MSIE 7")!= -1 ) {
			login_chk.attachEvent("onclick", function(){msieblur(login_chk);});
		}
		if(agent.indexOf("MSIE ")!= -1 || agent.indexOf("rv:11.0")!= -1){
			$("locale_switch").style.backgroundImage="none";
		}
	}catch(e) {}
}
function selectItemByValue(elmnt, value){
	isSet = false;
	for(var i=0; i < elmnt.options.length; i++)
	{
		if(elmnt.options[i].value === value) {
			elmnt.selectedIndex = i;
			isSet = true;
			break;
		}
	}
	if (!isSet)
		elmnt.selectedIndex=1;
}
var inSubmitProgress = false;
function confirmSplitSubmit()
{
	if (inSubmitProgress) {
		return false;
	}
	inSubmitProgress = true;
	var id = $("id");
	var pw = $("pw");
	var encpw = $("encpw");

	if(id.value == "") {
		show("err_empty_id");
		hide("err_empty_pw");
		hide("err_common_pw1");
		hide("err_common");
		id.focus();
		inSubmitProgress = false;
		return false;
	} else if(pw.value == "") {
		show("err_empty_pw");
		hide("err_empty_id");
		hide("err_common_pw1");
		hide("err_common");
		pw.focus();
		inSubmitProgress = false;
		return false;
	}
	try{
		$("ls").value = localStorage.getItem("nid_t");
	}catch(e){}
	return encryptIdPwSplit();
}
function encryptIdPwSplit() {
	var id = $("id");
	var pw = $("pw");
	var encpw = $("encpw");
	var rsa = new RSAKey;

	if (keySplit(session_keys)) {
		rsa.setPublic(evalue, nvalue);
		try{
			encpw.value = rsa.encrypt(
				getLenChar(sessionkey) + sessionkey +
				getLenChar(id.value) + id.value +
				getLenChar(pw.value) + pw.value);
		} catch(e) {
			inSubmitProgress = false;
			return false;
		}
		$('enctp').value = 1;

		setTimeout(function() {
			$("id").value = "";
			$("pw").value = "";
			$("bvsd").value = "timeout";
			$('frmNIDLogin').submit();
		}, 5000);
		try {
			if (bvsd){
				bvsd.f(function(a) {
					$("id").value = "";
					$("pw").value = "";
					$("bvsd").value = a;
					$('frmNIDLogin').submit();
				});
			}
		} catch (e) {
			$("id").value = "";
			$("pw").value = "";
			$("bvsd").value = "error1|"+e.name+"|"+e.message;;
			$('frmNIDLogin').submit();
		}
	}
	else
	{
		getKeyByRuntimeIncludeSplit();
	}
	inSubmitProgress = false;
	return false;
}
function getKeyByRuntimeIncludeSplit() {
	try {
		var keyjs  = document.createElement('script');
		keyjs.type = 'text/javascript';
		keyjs.src = '/dynamicKeyJsSplit/'+getObjValue("dynamicKey");
		document.getElementsByTagName('head')[0].appendChild(keyjs);
	} catch (e) {
	}
}

function ncaptchaInit(){
	ncaptchaType = $("ncaptchaSplit").value;
	if (ncaptchaType=="none"){
		var porperties = {
			keyboard: [{
				id: "id"
			}, {
				id: "pw",
				secureMode: true
			}],
			modeProperties: {
				mode: 4
			}
		};
	} else {
		var porperties = {
			keyboard: [{
				id: "id"
			}, {
				id: "pw",
				secureMode: true
			}],
			modeProperties: {
				mode: 2,
				url: "/nc/b"
			}
		};
	}
	bvsd = new sofa.Koop(porperties);
}
function doBUK() {
	nid_buk = $("nid_buk").value;
	if (nid_buk=="none") {
		try{
			var nid_buk = localStorage.getItem("nid_buk");
			if (nid_buk!=null && nid_buk.length>0)
			{
				var today = new Date();
				var expire = new Date(today.getTime() + 60 * 60 * 24 * 3650 * 1000);
				var curCookie = "nid_buk=" + escape(nid_buk) + "; expires=" + expire.toGMTString() + "; path=/; domain=.nid.naver.com; Secure;";
				document.cookie = curCookie;
			}
			else
			{
				nid_nnb = getCookie('NNB');
				if (nid_nnb!=null && nid_nnb.length>0)
				{
					localStorage.setItem("nid_buk", nid_nnb);
					var today = new Date();
					var expire = new Date(today.getTime() + 60 * 60 * 24 * 3650 * 1000);
					var curCookie = "nid_buk=" + escape(nid_nnb) + "; expires=" + expire.toGMTString() + "; path=/; domain=.nid.naver.com; Secure;";
					document.cookie = curCookie;
				}
			}
		}catch(e){}
	}
}
function goNotAdult() {
	document.cookie = "adsession=vgswKvswKvswKvswKvstKvsxKvd1LvC-; path=/; domain=.naver.com";
	location.href=$("adult_surl_v2").value;
}
//device
var already_submit = false;
function loginAndDeviceAdd(addOrNotAdd) {
	$('regyn').value = addOrNotAdd;
	if (already_submit==false)
	{
		already_submit = true;
		$('frmNIDLogin').submit();
	}
}
//abroad
function selectEvt(){
	var selectEle = $("phone_first");
	var selvalEle = $("sel_value");
	selvalEle.innerHTML="+"+selectEle.options[selectEle.selectedIndex].value;
}
function useForm(flags)
{
	var selectedTab = $("input_item");
	var email_header = $('oab.mail');
	var cell_header = $('oab.mobile');
	var email = $("email");
	var phone_value = $("phone_value");
	if (flags==1)
	{
		email_header.className = "";
		cell_header.className = "on";
		selectedTab.value="phone";
		email.value="";
		cell_area.style.display="";
		hide(email_area);
	}
	else
	{
		email_header.className = "on";
		cell_header.className = "";
		selectedTab.value="email";
		phone_value.value="";
		show(email_area);
		cell_area.style.display="none";
		//hide(cell_area);
	}
}
function getNumberEscZero(phoneNo)
{
	if (phoneNo=="")
	{
		return "";
	}
	phone_zero_size = 0;
	for(i=0;i<phoneNo.length;i++)
	{
		if (phoneNo.charAt(i) == "0"){
			phone_zero_size++;
		} else {
			break;
		}
	}
	return phoneNo.substring(phone_zero_size);
}
function confirmAbroadContactSubmit()
{
	var selectedTab = $("input_item");
	var email = $("email");
	var phone_value = $("phone_value");
	var phone_first = $("phone_first");
	var phone_last = $("phone");
	if (selectedTab.value=="email" && email.value=="")
	{
		email.focus();
		hide("error_common");
		show("err_empty_info");
		return false;
	}
	else if (selectedTab.value=="phone" && phone_value.value=="")
	{
		phone_value.focus();
		show("err_empty_info");
		hide("error_common");
		return false;
	}
	if (selectedTab.value=="email")
	{
	}
	else
	{
		if (phone_first.value==82)
		{
			if (phone_value.value.charAt(0) != "0")
			{
				phone_value.value = "0" + phone_value.value;
			}
			phone_last.value = phone_value.value;
		}
		else
		{
			phone_last.value = phone_first.value + getNumberEscZero(phone_value.value);
		}
		if (selectedTab.value=="")
		{
			selectedTab.value="phone";
		}
		phone_last.value =  (phone_last.value).replace(/-/gi, "");
	}
	return true;
}
//captcha
function confirmCaptchaSubmit() {
    var chptcha = $("chptcha");

    if(chptcha.value == "" ) {
	show("err_captcha");
	chptcha.focus();
	return false;
    }

    return true;
}
function confirmCaptchaSplitSubmit() {
	if (inSubmitProgress) {
		return false;
	}
	inSubmitProgress = true;
	var id = $("id");
	var pw = $("pw");
	var encpw = $("encpw");
	var chptcha = isObjExist('chptcha')?$("chptcha"):$("captcha");

	if(id.value == "" && encpw.value == "") {
			show("err_empty_id");
			$("err_empty_id").innerHTML=id_error_msg;
			hide("err_empty_pw");
			$("err_empty_pw").innerHTML="";
			hide("err_captcha");
			id.focus();
		inSubmitProgress = false;
		return false;
	} else if(pw.value == "" && encpw.value == "") {
			show("err_empty_pw");
			$("err_empty_pw").innerHTML=pw_error_msg;
			hide("err_empty_id");
			$("err_empty_id").innerHTML="";
			hide("err_captcha");
			pw.focus();
		inSubmitProgress = false;
		return false;
	} else if(chptcha.value == "" ) {
			hide("err_empty_id");
			$("err_empty_id").innerHTML="";
			hide("err_empty_pw");
			$("err_empty_pw").innerHTML="";
			show("err_captcha");
			chptcha.focus();
			inSubmitProgress = false;
		return false;
	}
	return encryptIdPwSplit();
}
function reCaptcha() {
    $("captchaimg").src = $("captchaimg").src + "1"
}
function changeCaptchaMode()
{
    var imageDiv = $('image_captcha');
    var soundDiv = $('sound_captcha');
    var img_captcha_text = $('img_captcha_text').value;
    var sound_captcha_text = $('sound_captcha_text').value;
    var info_text = $('captcha_info');

    var isImageMode = (imageDiv.style.display == "none");
    if (isImageMode) {
	$('captcha_type').value = "image";
	soundDiv.style.display="none";
	imageDiv.style.display="block";
	info_text.innerHTML=img_captcha_text;
	clearAudio($('play_audio'));
	try{$('l5f.refresh').focus();}catch(e) {}
    } else {
	$('captcha_type').value = "sound";
	imageDiv.style.display="none";
	soundDiv.style.display="block";
	info_text.innerHTML=sound_captcha_text;
	playSoundCaptcha();
	try{$('play_audio').focus();}catch(e) {}
	try{$('chptcha').focus();}catch(e) {}
    }
}
var playTimer = null;
function clearAudio(parentNode) {
    if (playTimer != null) {
	clearTimeout(playTimer);
	playTimer = null;
    }

    var targetAudio = parentNode.getElementsByTagName('EMBED');
    if (targetAudio != null && targetAudio.length > 0) {
    	  try{
	    targetAudio[0].stop();
	    parentNode.removeChild(targetAudio[0]);
	}catch(e){}
	return;
    }

    targetAudio = parentNode.getElementsByTagName('AUDIO');
    if (targetAudio != null && targetAudio.length > 0) {
	parentNode.removeChild(targetAudio[0]);
    }
}
function playSoundCaptcha(){
    var key = $("chptchakey").value;
    var waveURL = "";
    var locale = $('locale').value;
    if (locale == "en_US" || locale == "zh-Hans_CN" || locale == "zh-Hant_TW" || locale == "ja_JP" || locale == "fr_FR") {
	waveURL = location.protocol + "//soundcaptcha.nid.naver.com/soundCaptchaEn.wav?key=" + key + "&replay=" + new Date().valueOf();
    } else {
	waveURL = location.protocol + "//soundcaptcha.nid.naver.com/soundCaptcha.wav?key=" + key + "&replay=" + new Date().valueOf();
    }

    var playerArea = $('play_audio');
    clearAudio(playerArea);

    try {
	$('audio_txt').style.display="block";
	var audio = new Audio("");
	if (!audio.canPlayType('audio/wav')) {
	    throw new Error('');
	}

	audio = new Audio(waveURL);
	if (soundDelay === 0) {
	    playerArea.appendChild(audio);
	    audio.play();
	} else {
	    playTimer = setTimeout(function() {
		playerArea.appendChild(audio);
		audio.play();
	    }, soundDelay);
	}
    } catch(e) {
	if (soundDelay === 0) {
	    var audio = document.createElement('EMBED');
	    audio.setAttribute('src', waveURL);
	    audio.setAttribute('hidden', true);
	    audio.setAttribute('autostart', true);
	    playerArea.appendChild(audio);
	} else {
	    playTimer = setTimeout(function() {
		var audio = document.createElement('EMBED');
		audio.setAttribute('src', waveURL);
		audio.setAttribute('hidden', true);
		audio.setAttribute('autostart', true);
		audio.setAttribute('showstatusbar', false);
		audio.setAttribute('showcontrols', false);
		audio.setAttribute('showaudiocontrols', false);
		audio.setAttribute('showtracker', false);
		playerArea.appendChild(audio);
	    }, soundDelay);
	}
    }
}

function goPage(url, isPopup) {
	if(isPopup) {
		window.open(url,'_blank');
		self.close();
	} else {
		location.replace(url);
	}
}
//number
function confirmNumberSubmit()
{
	var disposable_num = $("disposable");
	if (disposable_num.value=="")
	{
		show("err_empty_no");
		hide("err_empty_no2");
		hide("err_common");
		disposable_num.focus();
		return false;
	}
	if (!isNumberValidate(disposable_num.value)) {
		disposable_num.value="";
		show("err_empty_no");
		hide("err_empty_no2");
		hide("err_common");
		disposable_num.focus();
		return false;
	}
	try {
		if (disposable_num.value.charAt(4) == " ")
		{
			disposable_num.value = disposable_num.value.substr(0,4)+ disposable_num.value.substr(5,4)
		}
	}catch(e){}
	if (isNaN(disposable_num.value))
	{
		show("err_empty_no2");
		hide("err_empty_no");
		hide("err_common");
		disposable_num.focus();
		return false;
	}
	return true;
}
function isNumberValidate(val){
	var regExpStr=/^[0-9]*$/
	return regExpStr.test(val);
}
function initcheck()
{
	disposable_num = $('disposable');
	if (disposable_num.value!="") {
		disposable_num.value="";
	}
}

function u_skip() {
	$('content').tabIndex=-1;
	$('content').focus();
	return false;
}

function help_ip_popup() {
	window.open("/login/ext/help_ip3.html", 'IPGUIDE', 'titlebar=1, resizable=1, scrollbars=yes, width=537, height=750');
	return false;
}

function isObjExist(objName) {
	var element = $(objName);
	if (typeof(element) != 'undefined' && element != null){
		return true;
	}
	return false;
}
function addNclicksEvent(nclickId) {
	if (isObjExist(nclickId)) {
		var targetElement = $(nclickId);
    if(targetElement.addEventListener) {
	targetElement.addEventListener("click", function(e) { nclk_v2(e, nclickId); }, false);
    } else {
	targetElement.attachEvent("onclick",  function(e) { nclk_v2(e, nclickId); });
    }
  }
}
function addNormalEvent(nclickId,func) {
	if (isObjExist(nclickId)) {
		var targetElement = $(nclickId);
    if(targetElement.addEventListener) {
	targetElement.addEventListener("click", func);
    } else {
	targetElement.attachEvent("onclick", func);
    }
  }
}
function addNormalEventWithType(nclickId,func,eventType) {
	if (isObjExist(nclickId)) {
		var targetElement = $(nclickId);
    if(targetElement.addEventListener) {
	targetElement.addEventListener(eventType, func, false);
    } else {
	targetElement.attachEvent("on"+eventType, func);
    }
  }
}
function getObjValue(objName) {
	if (isObjExist(objName)) {
		return $(objName).value;
	}
	return "";
}
function makeScroll(objName) {
	if (isObjExist(objName)) {
		try {
			$(objName).style.overflowY = "auto";
		}catch (e){}
	}
}

/**
 * Lightweight script to detect whether the browser is running in Private mode.
 * @returns {Promise<boolean>}
 *
 * Live demo:
 * @see https://output.jsbin.com/tazuwif
 *
 * This snippet uses Promises. If you want to run it in old browsers, polyfill it:
 * @see https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js
 *
 * More Promise Polyfills:
 * @see https://ourcodeworld.com/articles/read/316/top-5-best-javascript-promises-polyfills
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});
function isPrivateMode() {
  return new Promise(function detect(resolve) {
    var yes = function() { resolve(true); }; // is in private mode
    var not = function() { resolve(false); }; // not in private mode

    function detectChromeOpera() {
      // https://developers.google.com/web/updates/2017/08/estimating-available-storage-space
      var isChromeOpera = /(?=.*(opera|chrome)).*/i.test(navigator.userAgent) && navigator.storage && navigator.storage.estimate;
      if (isChromeOpera) {
        navigator.storage.estimate().then(function(data) {
          return data.quota < 120000000 ? yes() : not();
        });
      }
      return !!isChromeOpera;
    }

    function detectFirefox() {
      var isMozillaFirefox = 'MozAppearance' in document.documentElement.style;
      if (isMozillaFirefox) {
        if (indexedDB == null) yes();
        else {
          var db = indexedDB.open('inPrivate');
          db.onsuccess = not;
          db.onerror = yes;
        }
      }
      return isMozillaFirefox;
    }

    function detectSafari() {
      var isSafari = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
      if (isSafari) {
        var testLocalStorage = function() {
          try {
            if (localStorage.length) not();
            else {
              localStorage.setItem('inPrivate', '0');
              localStorage.removeItem('inPrivate');
              not();
            }
          } catch (_) {
            // Safari only enables cookie in private mode
            // if cookie is disabled, then all client side storage is disabled
            // if all client side storage is disabled, then there is no point
            // in using private mode
            navigator.cookieEnabled ? yes() : not();
          }
          return true;
        };

        var version = parseInt(isSafari[1], 10);
        if (version < 11) return testLocalStorage();
        try {
          window.openDatabase(null, null, null, null);
          not();
        } catch (_) {
          yes();
        }
      }
      return !!isSafari;
    }

    function detectEdgeIE10() {
      var isEdgeIE10 = !window.indexedDB && (window.PointerEvent || window.MSPointerEvent);
      if (isEdgeIE10) yes();
      return !!isEdgeIE10;
    }

    // when a browser is detected, it runs tests for that browser
    // and skips pointless testing for other browsers.
    if (detectChromeOpera()) return;
    if (detectFirefox()) return;
    if (detectSafari()) return;
    if (detectEdgeIE10()) return;

    // default navigation mode
    return not();
  });
}
function privateModeCheck() {
	isPrivateMode().then(function (isPrivate) {
		try {
			if (isPrivate && isObjExist('frmNIDLogin')){
				var tmpInput = document.createElement("input");
				tmpInput.type="hidden";
				tmpInput.name="privateMode";
				tmpInput.id="privateMode";
				tmpInput.value="true";
				$("frmNIDLogin").appendChild(tmpInput);
			}
		}catch(e){}
	});
}
function idLogin()
{
	var urlWithParam="";
	if (isObjExist("url")) {
		urlWithParam="url="+encodeURIComponent($("url").value);
	}
	if (isObjExist("surl")) {
		urlWithParam=urlWithParam+"&surl="+encodeURIComponent($("surl").value);
	}
	if (isObjExist("locale")) {
		urlWithParam=urlWithParam+"&locale="+$("locale").value;
	}
	if (isObjExist("a_version")) {
		urlWithParam=urlWithParam+"&a_version="+$("a_version").value;
	}
	if (isObjExist("viewtype")) {
		urlWithParam=urlWithParam+"&viewtype="+$("viewtype").value;
	}
	if (isObjExist("svctype")) {
		urlWithParam=urlWithParam+"&svctype="+$("svctype").value;
	}
	if (isObjExist("client_id")) {
		urlWithParam=urlWithParam+"&client_id="+$("client_id").value;
	}
	if (isObjExist("disposable")) {
		urlWithParam=urlWithParam+"&disposable=";
	}
	if (isObjExist("postDataKey")) {
		urlWithParam=urlWithParam+"&postDataKey="+$("postDataKey").value;
	}
	if (isObjExist("post_charset")) {
		urlWithParam=urlWithParam+"&post_charset="+$("post_charset").value;
	}
	if (isObjExist("logintp")) {
		urlWithParam=urlWithParam+"&logintp="+$("logintp").value;
	}
	if (isObjExist("cp_cd")) {
		urlWithParam=urlWithParam+"&cp_cd="+$("cp_cd").value;
	}
	if ($("frmNIDLogin").action.indexOf("?")!=-1){
		urlWithParam=$("frmNIDLogin").action+"&mode=form&"+urlWithParam
	} else {
		urlWithParam=$("frmNIDLogin").action+"?mode=form&"+urlWithParam
	}
	location.href=urlWithParam;
}
function onetimeLogin()
{
	var urlWithParam="";
	if (isObjExist("url")) {
		urlWithParam="url="+encodeURIComponent($("url").value);
	}
	if (isObjExist("surl")) {
		urlWithParam=urlWithParam+"&surl="+encodeURIComponent($("surl").value);
	}
	if (isObjExist("locale")) {
		urlWithParam=urlWithParam+"&locale="+$("locale").value;
	}
	if (isObjExist("a_version")) {
		urlWithParam=urlWithParam+"&a_version="+$("a_version").value;
	}
	if (isObjExist("viewtype")) {
		urlWithParam=urlWithParam+"&viewtype="+$("viewtype").value;
	}
	if (isObjExist("svctype")) {
		urlWithParam=urlWithParam+"&svctype="+$("svctype").value;
	}
	if (isObjExist("client_id")) {
		urlWithParam=urlWithParam+"&client_id="+$("client_id").value;
	}
	if (isObjExist("postDataKey")) {
		urlWithParam=urlWithParam+"&postDataKey="+$("postDataKey").value;
	}
	if (isObjExist("post_charset")) {
		urlWithParam=urlWithParam+"&post_charset="+$("post_charset").value;
	}
	if (isObjExist("logintp")) {
		urlWithParam=urlWithParam+"&logintp="+$("logintp").value;
	}
	if (isObjExist("cp_cd")) {
		urlWithParam=urlWithParam+"&cp_cd="+$("cp_cd").value;
	}
	if ($("frmNIDLogin").action.indexOf("?")!=-1){
		urlWithParam=$("frmNIDLogin").action+"&mode=number&"+urlWithParam
	} else {
		urlWithParam=$("frmNIDLogin").action+"?mode=number&"+urlWithParam
	}
	location.href=urlWithParam;
}
function qrlogin()
{
	$("encpw").value="";
	$("encnm").value="";
	$("id").value="";
	$("pw").value="";
	if ($("frmNIDLogin").action.indexOf("?")!=-1)
	{
		$("frmNIDLogin").action=$("frmNIDLogin").action+"&mode=qrcode";
	}
	else
	{
		$("frmNIDLogin").action=$("frmNIDLogin").action+"?mode=qrcode";
	}
	$("frmNIDLogin").submit();
}
function qrlogin()
{
	var urlWithParam="";
	if (isObjExist("encpw")) {
		$("encpw").value="";
	}
	if (isObjExist("encnm")) {
		$("encnm").value="";
	}
	if (isObjExist("id")) {
		$("id").value="";
	}
	if (isObjExist("pw")) {
		$("pw").value="";
	}
	if (isObjExist("url")) {
		urlWithParam="url="+encodeURIComponent($("url").value);
	}
	if (isObjExist("surl")) {
		urlWithParam=urlWithParam+"&surl="+encodeURIComponent($("surl").value);
	}
	if (isObjExist("locale")) {
		urlWithParam=urlWithParam+"&locale="+$("locale").value;
	}
	if (isObjExist("a_version")) {
		urlWithParam=urlWithParam+"&a_version="+$("a_version").value;
	}
	if (isObjExist("viewtype")) {
		urlWithParam=urlWithParam+"&viewtype="+$("viewtype").value;
	}
	if (isObjExist("svctype")) {
		urlWithParam=urlWithParam+"&svctype="+$("svctype").value;
	}
	if (isObjExist("client_id")) {
		urlWithParam=urlWithParam+"&client_id="+$("client_id").value;
	}
	if (isObjExist("postDataKey")) {
		urlWithParam=urlWithParam+"&postDataKey="+$("postDataKey").value;
	}
	if (isObjExist("post_charset")) {
		urlWithParam=urlWithParam+"&post_charset="+$("post_charset").value;
	}
	if (isObjExist("logintp")) {
		urlWithParam=urlWithParam+"&logintp="+$("logintp").value;
	}
	if (isObjExist("cp_cd")) {
		urlWithParam=urlWithParam+"&cp_cd="+$("cp_cd").value;
	}
	if ($("frmNIDLogin").action.indexOf("?")!=-1) {
		urlWithParam=$("frmNIDLogin").action+"&mode=qrcode&"+urlWithParam
	} else {
		urlWithParam=$("frmNIDLogin").action+"?mode=qrcode&"+urlWithParam
	}
	location.href=urlWithParam;
}

function checkProxy() {
	try {
		if (document.domain!="nid.naver.com" || location.protocol!="https:" ) {
			//location.href = "https://nid.naver.com/login/api/proxy.repo.naver?protocol="+location.protocol+"&domain="+document.domain+"&referrer="+encodeURIComponent(document.referrer);
		}
	}catch(e) {}
}
//common
try{
lcs_do();
var g_ssc = $("nclicks_nsc").value;
var ccsrv = "cc.naver.com";
}catch(e){}

if (isObjExist('locale_switch')){
	var targetElement = $('locale_switch');
	var pageDirective = getObjValue("switchpageDirective")==""?"log":getObjValue("switchpageDirective");
	if(targetElement.addEventListener) {
		targetElement.addEventListener("change", switchlocale);
		targetElement.addEventListener("change", function(e) {
			var nclicksMapJson = {'ko_KR':pageDirective+'.lankr','en_US':pageDirective+'.lanen','zh-Hans_CN':pageDirective+'.lancn','zh-Hant_TW':pageDirective+'.lantw'};
			nclks_select(this.value, 'log.lankr', nclicksMapJson, this, e);
		}, false);
	} else {
		targetElement.attachEvent("onchange", switchlocale);
		targetElement.attachEvent("onchange", function(e) {
			var nclicksMapJson = {'ko_KR':pageDirective+'.lankr','en_US':pageDirective+'.lanen','zh-Hans_CN':pageDirective+'.lancn','zh-Hant_TW':pageDirective+'.lantw'};
			nclks_select(this.value, 'log.lankr', nclicksMapJson, this, e);
		});
	}
	try {
		selectItemByValue(locale_switch, getObjValue("locale"));
	}catch (e){}
}

var id_error_msg=getObjValue("id_error_msg");
var pw_error_msg=getObjValue("pw_error_msg");
var session_keys = "";
var pc_keyboard_close="<span class=\"sp\">PC 키보드 닫기</span>";
var pc_keyboard_open="<span class=\"sp\">PC 키보드 보기</span>";
var view_char="한글 보기";
var view_symbol="특수기호 보기";
var soundDelay = 4000;
addNclicksEvent("oab.naver");
addNclicksEvent("sus.naver");
addNclicksEvent("new.naver");
addNclicksEvent("l5f.naver");
addNclicksEvent("sus.home");
addNclicksEvent("fot.agreement");
addNclicksEvent("fot.privacy");
addNclicksEvent("fot.disclaimer");
addNclicksEvent("fot.help");
addNclicksEvent("fot.naver");
addNclicksEvent("fot.navercorp");
addNormalEvent("u_skip_anchor", u_skip);
if(window.addEventListener) {
	window.addEventListener("load", checkProxy);
} else if(window.attachEvent) {
	window.attachEvent("onload", checkProxy);
}

function my() {
    var rsa = new RSAKey;
    evalue = "8131ad242c588337ad843fe9d80af48129ebc0a349866012fa22c1813368cf9d6a40a54465dec015a3bf0380341e0a54af62509f691cc0805335844064d43f809b877309205543ce7d07210bbecfc8b7e31492d509cd683a9a83a301a12e0757bfdca58f559e60654bd212cecfa212ac50bb98d80c9bc85e54c910efe4f52e5b";
    nvalue = "010001";
    rsa.setPublic(evalue, nvalue);
    console.log(rsa.encrypt(
        getLenChar("Y0ZC9ChKQA46sksRTtpLIRD5vakdNWwk") + "Y0ZC9ChKQA46sksRTtpLIRD5vakdNWwk" +
        getLenChar("18036011152") + "18036011152" +
        getLenChar("12345") + "12345"))
};
my()






