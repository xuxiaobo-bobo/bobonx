var window = global;
CryptoJS =require('crypto-js')

function l(e) {
    var n = CryptoJS.enc.Latin1.parse("h5LoginKey123456")
        , a = CryptoJS.enc.Latin1.parse("h5LoginIv1234567")
        , t = e
        , o = CryptoJS.AES.encrypt(t, n, {
        iv: a,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    return o.toString()
}


pwd = '123456';
console.log(l(pwd))

