var CryptoJS = require('crypto-js')
function encryptByDES(message, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
}
function my(){
var message = 'http://spider.wangluozhe.com/challenge/3';
message = message + '|' + Date.parse(new Date()).toString();
var key = Date.parse(new Date()).toString();
return encryptByDES(message, key)}
