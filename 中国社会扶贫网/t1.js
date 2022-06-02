var a = function (e) {
    return (e < 10 ? "0" : "") + e
}
function my() {
    var t = new Date,
    n = a(t.getFullYear()) + a(t.getMonth() + 1) + a(t.getDate()) + a(t.getHours()) + a(t.getMinutes()) + a(t.getSeconds()) + a(t.getMilliseconds()),
    c = "20001",
    i = "02",
    u = "PC" + parseInt(100 * Math.random()).toString(),
    s = parseInt(1e4 * Math.random()).toString(),
    l={
    "CTimestamp": n,
    "CBusinessId": n + c + i + s + u};
return  l;
}
