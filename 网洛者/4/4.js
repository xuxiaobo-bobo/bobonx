var CryptoJS = require('crypto-js')

let iv_tmp;
let date = Date.parse(new Date());
 key_tmp = date * 1234
const key = CryptoJS.enc.Utf8.parse(key_tmp)
var iv = CryptoJS.enc.Utf8.parse(iv_tmp);
function Encrypt(word) {
            let srcs = CryptoJS.enc.Utf8.parse(word);
            let encrypted = CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return encrypted.ciphertext.toString().toUpperCase();
        }
function my (){
    return Encrypt(date)
}