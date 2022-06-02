eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
            return d[e]
        }
        ];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}

('A 3c=2;A 1B=16;A T=1B;A N=1<<16;A 2n=N>>>1;A 31=N*N;A 1b=N-1;A 3a=3b;A 1Q;A 1r;A 1F,13;E 2T(2S){1Q=2S;1r=H Z(1Q);L(A 1J=0;1J<1r.I;1J++)1r[1J]=0;1F=H K();13=H K();13.C[0]=1}2T(20);A 1m=15;A 2X=1y(36);E K(1S){J(3n 1S=="3e"&&1S==1k){G.C=3m}R{G.C=1r.2M(0)}G.D=1E}E 3j(s){A D=s.1M(0)==\'-\';A i=D?1:0;A B;P(i<s.I&&s.1M(i)==\'0\')++i;J(i==s.I){B=H K()}R{A 18=s.I-i;A 1s=18%1m;J(1s==0)1s=1m;B=1y(12(s.1X(i,1s)));i+=1s;P(i<s.I){B=1a(17(B,2X),1y(12(s.1X(i,1m))));i+=1m}B.D=D}F B}E 1w(19){A B=H K(1k);B.C=19.C.2M(0);B.D=19.D;F B}E 1y(i){A B=H K();B.D=i<0;i=O.3f(i);A j=0;P(i>0){B.C[j++]=i&1b;i=O.1q(i/N)}F B}E 1N(s){A B="";L(A i=s.I-1;i>-1;--i){B+=s.1M(i)}F B}A 21=H Z(\'0\',\'1\',\'2\',\'3\',\'4\',\'5\',\'6\',\'7\',\'8\',\'9\',\'a\',\'b\',\'c\',\'d\',\'e\',\'f\',\'g\',\'h\',\'i\',\'j\',\'k\',\'l\',\'m\',\'n\',\'o\',\'p\',\'q\',\'r\',\'s\',\'t\',\'u\',\'v\',\'w\',\'x\',\'y\',\'z\');E 2P(x,Y){A b=H K();b.C[0]=Y;A S=1c(x,b);A B=21[S[1].C[0]];P(1l(S[0],1F)==1){S=1c(S[0],b);1T=S[1].C[0];B+=21[S[1].C[0]]}F(x.D?"-":"")+1N(B)}E 3h(x){A b=H K();b.C[0]=10;A S=1c(x,b);A B=1L(S[1].C[0]);P(1l(S[0],1F)==1){S=1c(S[0],b);B+=1L(S[1].C[0])}F(x.D?"-":"")+1N(B)}A 35=H Z(\'0\',\'1\',\'2\',\'3\',\'4\',\'5\',\'6\',\'7\',\'8\',\'9\',\'a\',\'b\',\'c\',\'d\',\'e\',\'f\');E 2Y(n){A 30=3g;A B="";L(i=0;i<4;++i){B+=35[n&30];n>>>=4}F 1N(B)}E 2O(x){A B="";A n=Q(x);L(A i=Q(x);i>-1;--i){B+=2Y(x.C[i])}F B}E 24(c){A 1O=39;A 2p=1O+9;A 1H=3i;A 2k=1H+25;A 1W=2L;A 2q=2L+25;A B;J(c>=1O&&c<=2p){B=c-1O}R J(c>=1W&&c<=2q){B=10+c-1W}R J(c>=1H&&c<=2k){B=10+c-1H}R{B=0}F B}E 2r(s){A B=0;A 1i=O.1U(s.I,4);L(A i=0;i<1i;++i){B<<=4;B|=24(s.1x(i))}F B}E 1n(s){A B=H K();A 1i=s.I;L(A i=1i,j=0;i>0;i-=4,++j){B.C[j]=2r(s.1X(O.2F(i-4,0),O.1U(i,4)))}F B}E 33(s,Y){A D=s.1M(0)==\'-\';A 2E=D?1:0;A B=H K();A 1v=H K();1v.C[0]=1;L(A i=s.I-1;i>=2E;i--){A c=s.1x(i);A 1T=24(c);A 2H=1D(1v,1T);B=1a(B,2H);1v=1D(1v,Y)}B.D=D;F B}E 3l(b){F(b.D?"-":"")+b.C.3k(" ")}E 1a(x,y){A B;J(x.D!=y.D){y.D=!y.D;B=W(x,y);y.D=!y.D}R{B=H K();A c=0;A n;L(A i=0;i<x.C.I;++i){n=x.C[i]+y.C[i]+c;B.C[i]=n%N;c=12(n>=N)}B.D=x.D}F B}E W(x,y){A B;J(x.D!=y.D){y.D=!y.D;B=1a(x,y);y.D=!y.D}R{B=H K();A n,c;c=0;L(A i=0;i<x.C.I;++i){n=x.C[i]-y.C[i]+c;B.C[i]=n%N;J(B.C[i]<0)B.C[i]+=N;c=0-12(n<0)}J(c==-1){c=0;L(A i=0;i<x.C.I;++i){n=0-B.C[i]+c;B.C[i]=n%N;J(B.C[i]<0)B.C[i]+=N;c=0-12(n<0)}B.D=!x.D}R{B.D=x.D}}F B}E Q(x){A B=x.C.I-1;P(B>0&&x.C[B]==0)--B;F B}E 26(x){A n=Q(x);A d=x.C[n];A m=(n+1)*T;A B;L(B=m;B>m-T;--B){J((d&2A)!=0)1G;d<<=1}F B}E 17(x,y){A B=H K();A c;A n=Q(x);A t=Q(y);A u,14,k;L(A i=0;i<=t;++i){c=0;k=i;L(j=0;j<=n;++j,++k){14=B.C[k]+x.C[j]*y.C[i]+c;B.C[k]=14&1b;c=14>>>1B}B.C[i+n+1]=c}B.D=x.D!=y.D;F B}E 1D(x,y){A n,c,14;B=H K();n=Q(x);c=0;L(A j=0;j<=n;++j){14=B.C[j]+x.C[j]*y+c;B.C[j]=14&1b;c=14>>>1B}B.C[1+n]=c;F B}E 1h(1P,22,2z,2y,n){A m=O.1U(22+n,1P.I);L(A i=22,j=2y;i<m;++i,++j){2z[j]=1P[i]}}A 2x=H Z(2D,2A,3d,38,37,3o,3G,3P,3Q,3R,3O,3N,3J,3K,3L,3T,2j);E 1Z(x,n){A 18=O.1q(n/T);A B=H K();1h(x.C,0,B.C,18,B.C.I-18);A U=n%T;A 2C=T-U;L(A i=B.C.I-1,1j=i-1;i>0;--i,--1j){B.C[i]=((B.C[i]<<U)&1b)|((B.C[1j]&2x[U])>>>(2C))}B.C[0]=((B.C[i]<<U)&1b);B.D=x.D;F B}A 2t=H Z(2D,3S,3Y,3V,3Z,3W,3X,3M,3H,3u,3v,3w,3t,3s,3I,3p,2j);E 1p(x,n){A 18=O.1q(n/T);A B=H K();1h(x.C,18,B.C,0,x.C.I-18);A U=n%T;A 2l=T-U;L(A i=0,1j=i+1;i<B.C.I-1;++i,++1j){B.C[i]=(B.C[i]>>>U)|((B.C[1j]&2t[U])<<2l)}B.C[B.C.I-1]>>>=U;B.D=x.D;F B}E 28(x,n){A B=H K();1h(x.C,0,B.C,n,B.C.I-n);F B}E 2e(x,n){A B=H K();1h(x.C,n,B.C,0,B.C.I-n);F B}E 2a(x,n){A B=H K();1h(x.C,0,B.C,0,n);F B}E 1l(x,y){J(x.D!=y.D){F 1-2*12(x.D)}L(A i=x.C.I-1;i>=0;--i){J(x.C[i]!=y.C[i]){J(x.D){F 1-2*12(x.C[i]>y.C[i])}R{F 1-2*12(x.C[i]<y.C[i])}}}F 0}E 1c(x,y){A 1I=26(x);A 1t=26(y);A 1C=y.D;A q,r;J(1I<1t){J(x.D){q=1w(13);q.D=!y.D;x.D=1E;y.D=1E;r=W(y,x);x.D=1k;y.D=1C}R{q=H K();r=1w(x)}F H Z(q,r)}q=H K();r=x;A t=O.1Y(1t/T)-1;A 1g=0;P(y.C[t]<2n){y=1Z(y,1);++1g;++1t;t=O.1Y(1t/T)-1}r=1Z(r,1g);1I+=1g;A n=O.1Y(1I/T)-1;A b=28(y,n-t);P(1l(r,b)!=-1){++q.C[n-t];r=W(r,b)}L(A i=n;i>t;--i){A 1o=(i>=r.C.I)?0:r.C[i];A 1A=(i-1>=r.C.I)?0:r.C[i-1];A 23=(i-2>=r.C.I)?0:r.C[i-2];A 1u=(t>=y.C.I)?0:y.C[t];A 27=(t-1>=y.C.I)?0:y.C[t-1];J(1o==1u){q.C[i-t-1]=1b}R{q.C[i-t-1]=O.1q((1o*N+1A)/1u)}A 29=q.C[i-t-1]*((1u*N)+27);A 1V=(1o*31)+((1A*N)+23);P(29>1V){--q.C[i-t-1];29=q.C[i-t-1]*((1u*N)|27);1V=(1o*N*N)+((1A*N)+23)}b=28(y,i-t-1);r=W(r,1D(b,q.C[i-t-1]));J(r.D){r=1a(r,b);--q.C[i-t-1]}}r=1p(r,1g);q.D=x.D!=1C;J(x.D){J(1C){q=1a(q,13)}R{q=W(q,13)}y=1p(y,1g);r=W(y,r)}J(r.C[0]==0&&Q(r)==0)r.D=1E;F H Z(q,r)}E 2s(x,y){F 1c(x,y)[0]}E 2Q(x,y){F 1c(x,y)[1]}E 1R(x,y,m){F 2Q(17(x,y),m)}E 3z(x,y){A B=13;A a=x;P(1k){J((y&1)!=0)B=17(B,a);y>>=1;J(y==0)1G;a=17(a,a)}F B}E 3C(x,y,m){A B=13;A a=x;A k=y;P(1k){J((k.C[0]&1)!=0)B=1R(B,a,m);k=1p(k,1);J(k.C[0]==0&&Q(k)==0)1G;a=1R(a,a,m)}F B}E 3E(2V,2U,X){G.e=1n(2V);G.d=1n(2U);G.m=1n(X);G.1d=2*Q(G.m)+2;G.1e=G.1d-11;G.Y=16;G.2b=H 2m(G.m)}E 3r(n){F(n<10?"0":"")+1L(n)}E 3q(M,s){J(M.1e>M.1d-11){F"3U"}A a=H Z();A 1i=s.I;A i=0;P(i<1i){a[i]=s.1x(i);i++}A 1K=a.I;A B="";A j,k,V;L(i=0;i<1K;i+=M.1e){V=H K();j=0;A x;A 1f=(i+M.1e)>1K?1K%M.1e:M.1e;A b=H Z();L(x=0;x<1f;x++){b[x]=a[i+1f-1-x]}b[1f]=0;A 2R=O.2F(8,M.1d-3-1f);L(x=0;x<2R;x++){b[1f+1+x]=O.1q(O.3F()*3B)+1}b[M.1d-2]=2;b[M.1d-1]=0;L(k=0;k<M.1d;++j){V.C[j]=b[k++];V.C[j]+=b[k++]<<8}A 2h=M.2b.2c(V,M.e);A 2W=M.Y==16?2O(2h):2P(2h,M.Y);B+=2W+" "}F B.2o(0,B.I-1)}E 3A(M,s){A 1z=s.3D(" ");A B="";A i,j,V;L(i=0;i<1z.I;++i){A 19;J(M.Y==16){19=1n(1z[i])}R{19=33(1z[i],M.Y)}V=M.2b.2c(19,M.d);L(j=0;j<=Q(V);++j){B+=1L.3y(V.C[j]&3x,V.C[j]>>8)}}J(B.1x(B.I-1)==0){B=B.2o(0,B.I-1)}F B}E 2m(m){G.X=1w(m);G.k=Q(G.X)+1;A 2d=H K();2d.C[2*G.k]=1;G.2w=2s(2d,G.X);G.2i=H K();G.2i.C[G.k+1]=1;G.34=2B;G.2f=32;G.2c=2N}E 2B(x){A 2v=2e(x,G.k-1);A 2I=17(2v,G.2w);A 2J=2e(2I,G.k+1);A 2u=2a(x,G.k+1);A 2G=17(2J,G.X);A 2K=2a(2G,G.k+1);A r=W(2u,2K);J(r.D){r=1a(r,G.2i)}A 2g=1l(r,G.X)>=0;P(2g){r=W(r,G.X);2g=1l(r,G.X)>=0}F r}E 32(x,y){A 2Z=17(x,y);F G.34(2Z)}E 2N(x,y){A B=H K();B.C[0]=1;A a=x;A k=y;P(1k){J((k.C[0]&1)!=0)B=G.2f(B,a);k=1p(k,1);J(k.C[0]==0&&Q(k)==0)1G;a=G.2f(a,a)}F B}', 62, 248, '||||||||||||||||||||||||||||||||||||var|result|digits|isNeg|function|return|this|new|length|if|BigInt|for|key|biRadix|Math|while|biHighIndex|else|qr|bitsPerDigit|bits|block|biSubtract|modulus|radix|Array|||Number|bigOne|uv|||biMultiply|digitCount|bi|biAdd|maxDigitVal|biDivideModulo|digitSize|chunkSize|msgLength|lambda|arrayCopy|sl|i1|true|biCompare|dpl10|biFromHex|ri|biShiftRight|floor|ZERO_ARRAY|fgl|tb|yt|place|biCopy|charCodeAt|biFromNumber|blocks|ri1|biRadixBits|origYIsNeg|biMultiplyDigit|false|bigZero|break|littleA|nb|iza|al|String|charAt|reverseStr|ZERO|src|maxDigits|biMultiplyMod|flag|digit|min|c2|bigA|substr|ceil|biShiftLeft||hexatrigesimalToChar|srcStart|ri2|charToHex||biNumBits|yt1|biMultiplyByRadixPower|c1|biModuloByRadixPower|barrett|powMod|b2k|biDivideByRadixPower|multiplyMod|rgtem|crypt|bkplus1|0xFFFF|littleZ|leftBits|BarrettMu|biHalfRadix|substring|NINE|bigZ|hexToDigit|biDivide|lowBitMasks|r1|q1|mu|highBitMasks|destStart|dest|0x8000|BarrettMu_modulo|rightBits|0x0000|istop|max|r2term|biDigit|q2|q3|r2|65|slice|BarrettMu_powMod|biToHex|biToString|biModulo|paddedSize|value|setMaxDigits|decryptionExponent|encryptionExponent|text|lr10|digitToHex|xy|mask|biRadixSquared|BarrettMu_multiplyMod|biFromString|modulo|hexToChar|1000000000000000|0xF000|0xE000|48|maxInteger|9999999999999998|biRadixBase|0xC000|boolean|abs|0xf|biToDecimal|97|biFromDecimal|join|biDump|null|typeof|0xF800|0x7FFF|encryptedString|twoDigit|0x1FFF|0x0FFF|0x01FF|0x03FF|0x07FF|255|fromCharCode|biPow|decryptedString|254|biPowMod|split|RSAKeyPair|random|0xFC00|0x00FF|0x3FFF|0xFFF0|0xFFF8|0xFFFC|0x007F|0xFFE0|0xFFC0|0xFE00|0xFF00|0xFF80|0x0001|0xFFFE|Error|0x0007|0x001F|0x003F|0x0003|0x000F'.split('|'), 0, {}))

var biRadixBase = 2;
var biRadixBits = 16;
var bitsPerDigit = biRadixBits;
var biRadix = 1 << 16;
var biHalfRadix = biRadix >>> 1;
var biRadixSquared = biRadix * biRadix;
var maxDigitVal = biRadix - 1;
var maxInteger = 9999999999999998;
var maxDigits;
var ZERO_ARRAY;
var bigZero, bigOne;

function setMaxDigits(value) {
    maxDigits = value;
    ZERO_ARRAY = new Array(maxDigits);
    for (var iza = 0; iza < ZERO_ARRAY.length; iza++)
        ZERO_ARRAY[iza] = 0;
    bigZero = new BigInt();
    bigOne = new BigInt();
    bigOne.digits[0] = 1
}

setMaxDigits(20);
var dpl10 = 15;
var lr10 = biFromNumber(1000000000000000);

function BigInt(flag) {
    if (typeof flag == "boolean" && flag == true) {
        this.digits = null
    } else {
        this.digits = ZERO_ARRAY.slice(0)
    }
    this.isNeg = false
}

function biFromDecimal(s) {
    var isNeg = s.charAt(0) == '-';
    var i = isNeg ? 1 : 0;
    var result;
    while (i < s.length && s.charAt(i) == '0')
        ++i;
    if (i == s.length) {
        result = new BigInt()
    } else {
        var digitCount = s.length - i;
        var fgl = digitCount % dpl10;
        if (fgl == 0)
            fgl = dpl10;
        result = biFromNumber(Number(s.substr(i, fgl)));
        i += fgl;
        while (i < s.length) {
            result = biAdd(biMultiply(result, lr10), biFromNumber(Number(s.substr(i, dpl10))));
            i += dpl10
        }
        result.isNeg = isNeg
    }
    return result
}

function biCopy(bi) {
    var result = new BigInt(true);
    result.digits = bi.digits.slice(0);
    result.isNeg = bi.isNeg;
    return result
}

function biFromNumber(i) {
    var result = new BigInt();
    result.isNeg = i < 0;
    i = Math.abs(i);
    var j = 0;
    while (i > 0) {
        result.digits[j++] = i & maxDigitVal;
        i = Math.floor(i / biRadix)
    }
    return result
}

function reverseStr(s) {
    var result = "";
    for (var i = s.length - 1; i > -1; --i) {
        result += s.charAt(i)
    }
    return result
}

var hexatrigesimalToChar = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

function biToString(x, radix) {
    var b = new BigInt();
    b.digits[0] = radix;
    var qr = biDivideModulo(x, b);
    var result = hexatrigesimalToChar[qr[1].digits[0]];
    while (biCompare(qr[0], bigZero) == 1) {
        qr = biDivideModulo(qr[0], b);
        digit = qr[1].digits[0];
        result += hexatrigesimalToChar[qr[1].digits[0]]
    }
    return (x.isNeg ? "-" : "") + reverseStr(result)
}

function biToDecimal(x) {
    var b = new BigInt();
    b.digits[0] = 10;
    var qr = biDivideModulo(x, b);
    var result = String(qr[1].digits[0]);
    while (biCompare(qr[0], bigZero) == 1) {
        qr = biDivideModulo(qr[0], b);
        result += String(qr[1].digits[0])
    }
    return (x.isNeg ? "-" : "") + reverseStr(result)
}

var hexToChar = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

function digitToHex(n) {
    var mask = 0xf;
    var result = "";
    for (i = 0; i < 4; ++i) {
        result += hexToChar[n & mask];
        n >>>= 4
    }
    return reverseStr(result)
}

function biToHex(x) {
    var result = "";
    var n = biHighIndex(x);
    for (var i = biHighIndex(x); i > -1; --i) {
        result += digitToHex(x.digits[i])
    }
    return result
}

function charToHex(c) {
    var ZERO = 48;
    var NINE = ZERO + 9;
    var littleA = 97;
    var littleZ = littleA + 25;
    var bigA = 65;
    var bigZ = 65 + 25;
    var result;
    if (c >= ZERO && c <= NINE) {
        result = c - ZERO
    } else if (c >= bigA && c <= bigZ) {
        result = 10 + c - bigA
    } else if (c >= littleA && c <= littleZ) {
        result = 10 + c - littleA
    } else {
        result = 0
    }
    return result
}

function hexToDigit(s) {
    var result = 0;
    var sl = Math.min(s.length, 4);
    for (var i = 0; i < sl; ++i) {
        result <<= 4;
        result |= charToHex(s.charCodeAt(i))
    }
    return result
}

function biFromHex(s) {
    var result = new BigInt();
    var sl = s.length;
    for (var i = sl, j = 0; i > 0; i -= 4,
        ++j) {
        result.digits[j] = hexToDigit(s.substr(Math.max(i - 4, 0), Math.min(i, 4)))
    }
    return result
}

function biFromString(s, radix) {
    var isNeg = s.charAt(0) == '-';
    var istop = isNeg ? 1 : 0;
    var result = new BigInt();
    var place = new BigInt();
    place.digits[0] = 1;
    for (var i = s.length - 1; i >= istop; i--) {
        var c = s.charCodeAt(i);
        var digit = charToHex(c);
        var biDigit = biMultiplyDigit(place, digit);
        result = biAdd(result, biDigit);
        place = biMultiplyDigit(place, radix)
    }
    result.isNeg = isNeg;
    return result
}

function biDump(b) {
    return (b.isNeg ? "-" : "") + b.digits.join(" ")
}

function biAdd(x, y) {
    var result;
    if (x.isNeg != y.isNeg) {
        y.isNeg = !y.isNeg;
        result = biSubtract(x, y);
        y.isNeg = !y.isNeg
    } else {
        result = new BigInt();
        var c = 0;
        var n;
        for (var i = 0; i < x.digits.length; ++i) {
            n = x.digits[i] + y.digits[i] + c;
            result.digits[i] = n % biRadix;
            c = Number(n >= biRadix)
        }
        result.isNeg = x.isNeg
    }
    return result
}

function biSubtract(x, y) {
    var result;
    if (x.isNeg != y.isNeg) {
        y.isNeg = !y.isNeg;
        result = biAdd(x, y);
        y.isNeg = !y.isNeg
    } else {
        result = new BigInt();
        var n, c;
        c = 0;
        for (var i = 0; i < x.digits.length; ++i) {
            n = x.digits[i] - y.digits[i] + c;
            result.digits[i] = n % biRadix;
            if (result.digits[i] < 0)
                result.digits[i] += biRadix;
            c = 0 - Number(n < 0)
        }
        if (c == -1) {
            c = 0;
            for (var i = 0; i < x.digits.length; ++i) {
                n = 0 - result.digits[i] + c;
                result.digits[i] = n % biRadix;
                if (result.digits[i] < 0)
                    result.digits[i] += biRadix;
                c = 0 - Number(n < 0)
            }
            result.isNeg = !x.isNeg
        } else {
            result.isNeg = x.isNeg
        }
    }
    return result
}

function biHighIndex(x) {
    var result = x.digits.length - 1;
    while (result > 0 && x.digits[result] == 0)
        --result;
    return result
}

function biNumBits(x) {
    var n = biHighIndex(x);
    var d = x.digits[n];
    var m = (n + 1) * bitsPerDigit;
    var result;
    for (result = m; result > m - bitsPerDigit; --result) {
        if ((d & 0x8000) != 0)
            break;
        d <<= 1
    }
    return result
}

function biMultiply(x, y) {
    var result = new BigInt();
    var c;
    var n = biHighIndex(x);
    var t = biHighIndex(y);
    var u, uv, k;
    for (var i = 0; i <= t; ++i) {
        c = 0;
        k = i;
        for (j = 0; j <= n; ++j,
            ++k) {
            uv = result.digits[k] + x.digits[j] * y.digits[i] + c;
            result.digits[k] = uv & maxDigitVal;
            c = uv >>> biRadixBits
        }
        result.digits[i + n + 1] = c
    }
    result.isNeg = x.isNeg != y.isNeg;
    return result
}

function biMultiplyDigit(x, y) {
    var n, c, uv;
    result = new BigInt();
    n = biHighIndex(x);
    c = 0;
    for (var j = 0; j <= n; ++j) {
        uv = result.digits[j] + x.digits[j] * y + c;
        result.digits[j] = uv & maxDigitVal;
        c = uv >>> biRadixBits
    }
    result.digits[1 + n] = c;
    return result
}

function arrayCopy(src, srcStart, dest, destStart, n) {
    var m = Math.min(srcStart + n, src.length);
    for (var i = srcStart, j = destStart; i < m; ++i,
        ++j) {
        dest[j] = src[i]
    }
}

var highBitMasks = new Array(0x0000, 0x8000, 0xC000, 0xE000, 0xF000, 0xF800, 0xFC00, 0xFE00, 0xFF00, 0xFF80, 0xFFC0, 0xFFE0, 0xFFF0, 0xFFF8, 0xFFFC, 0xFFFE, 0xFFFF);

function biShiftLeft(x, n) {
    var digitCount = Math.floor(n / bitsPerDigit);
    var result = new BigInt();
    arrayCopy(x.digits, 0, result.digits, digitCount, result.digits.length - digitCount);
    var bits = n % bitsPerDigit;
    var rightBits = bitsPerDigit - bits;
    for (var i = result.digits.length - 1, i1 = i - 1; i > 0; --i,
        --i1) {
        result.digits[i] = ((result.digits[i] << bits) & maxDigitVal) | ((result.digits[i1] & highBitMasks[bits]) >>> (rightBits))
    }
    result.digits[0] = ((result.digits[i] << bits) & maxDigitVal);
    result.isNeg = x.isNeg;
    return result
}

var lowBitMasks = new Array(0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F, 0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF, 0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF);

function biShiftRight(x, n) {
    var digitCount = Math.floor(n / bitsPerDigit);
    var result = new BigInt();
    arrayCopy(x.digits, digitCount, result.digits, 0, x.digits.length - digitCount);
    var bits = n % bitsPerDigit;
    var leftBits = bitsPerDigit - bits;
    for (var i = 0, i1 = i + 1; i < result.digits.length - 1; ++i,
        ++i1) {
        result.digits[i] = (result.digits[i] >>> bits) | ((result.digits[i1] & lowBitMasks[bits]) << leftBits)
    }
    result.digits[result.digits.length - 1] >>>= bits;
    result.isNeg = x.isNeg;
    return result
}

function biMultiplyByRadixPower(x, n) {
    var result = new BigInt();
    arrayCopy(x.digits, 0, result.digits, n, result.digits.length - n);
    return result
}

function biDivideByRadixPower(x, n) {
    var result = new BigInt();
    arrayCopy(x.digits, n, result.digits, 0, result.digits.length - n);
    return result
}

function biModuloByRadixPower(x, n) {
    var result = new BigInt();
    arrayCopy(x.digits, 0, result.digits, 0, n);
    return result
}

function biCompare(x, y) {
    if (x.isNeg != y.isNeg) {
        return 1 - 2 * Number(x.isNeg)
    }
    for (var i = x.digits.length - 1; i >= 0; --i) {
        if (x.digits[i] != y.digits[i]) {
            if (x.isNeg) {
                return 1 - 2 * Number(x.digits[i] > y.digits[i])
            } else {
                return 1 - 2 * Number(x.digits[i] < y.digits[i])
            }
        }
    }
    return 0
}

function biDivideModulo(x, y) {
    var nb = biNumBits(x);
    var tb = biNumBits(y);
    var origYIsNeg = y.isNeg;
    var q, r;
    if (nb < tb) {
        if (x.isNeg) {
            q = biCopy(bigOne);
            q.isNeg = !y.isNeg;
            x.isNeg = false;
            y.isNeg = false;
            r = biSubtract(y, x);
            x.isNeg = true;
            y.isNeg = origYIsNeg
        } else {
            q = new BigInt();
            r = biCopy(x)
        }
        return new Array(q, r)
    }
    q = new BigInt();
    r = x;
    var t = Math.ceil(tb / bitsPerDigit) - 1;
    var lambda = 0;
    while (y.digits[t] < biHalfRadix) {
        y = biShiftLeft(y, 1);
        ++lambda;
        ++tb;
        t = Math.ceil(tb / bitsPerDigit) - 1
    }
    r = biShiftLeft(r, lambda);
    nb += lambda;
    var n = Math.ceil(nb / bitsPerDigit) - 1;
    var b = biMultiplyByRadixPower(y, n - t);
    while (biCompare(r, b) != -1) {
        ++q.digits[n - t];
        r = biSubtract(r, b)
    }
    for (var i = n; i > t; --i) {
        var ri = (i >= r.digits.length) ? 0 : r.digits[i];
        var ri1 = (i - 1 >= r.digits.length) ? 0 : r.digits[i - 1];
        var ri2 = (i - 2 >= r.digits.length) ? 0 : r.digits[i - 2];
        var yt = (t >= y.digits.length) ? 0 : y.digits[t];
        var yt1 = (t - 1 >= y.digits.length) ? 0 : y.digits[t - 1];
        if (ri == yt) {
            q.digits[i - t - 1] = maxDigitVal
        } else {
            q.digits[i - t - 1] = Math.floor((ri * biRadix + ri1) / yt)
        }
        var c1 = q.digits[i - t - 1] * ((yt * biRadix) + yt1);
        var c2 = (ri * biRadixSquared) + ((ri1 * biRadix) + ri2);
        while (c1 > c2) {
            --q.digits[i - t - 1];
            c1 = q.digits[i - t - 1] * ((yt * biRadix) | yt1);
            c2 = (ri * biRadix * biRadix) + ((ri1 * biRadix) + ri2)
        }
        b = biMultiplyByRadixPower(y, i - t - 1);
        r = biSubtract(r, biMultiplyDigit(b, q.digits[i - t - 1]));
        if (r.isNeg) {
            r = biAdd(r, b);
            --q.digits[i - t - 1]
        }
    }
    r = biShiftRight(r, lambda);
    q.isNeg = x.isNeg != origYIsNeg;
    if (x.isNeg) {
        if (origYIsNeg) {
            q = biAdd(q, bigOne)
        } else {
            q = biSubtract(q, bigOne)
        }
        y = biShiftRight(y, lambda);
        r = biSubtract(y, r)
    }
    if (r.digits[0] == 0 && biHighIndex(r) == 0)
        r.isNeg = false;
    return new Array(q, r)
}

function biDivide(x, y) {
    return biDivideModulo(x, y)[0]
}

function biModulo(x, y) {
    return biDivideModulo(x, y)[1]
}

function biMultiplyMod(x, y, m) {
    return biModulo(biMultiply(x, y), m)
}

function biPow(x, y) {
    var result = bigOne;
    var a = x;
    while (true) {
        if ((y & 1) != 0)
            result = biMultiply(result, a);
        y >>= 1;
        if (y == 0)
            break;
        a = biMultiply(a, a)
    }
    return result
}

function biPowMod(x, y, m) {
    var result = bigOne;
    var a = x;
    var k = y;
    while (true) {
        if ((k.digits[0] & 1) != 0)
            result = biMultiplyMod(result, a, m);
        k = biShiftRight(k, 1);
        if (k.digits[0] == 0 && biHighIndex(k) == 0)
            break;
        a = biMultiplyMod(a, a, m)
    }
    return result
}

function RSAKeyPair(encryptionExponent, decryptionExponent, modulus) {
    this.e = biFromHex(encryptionExponent);
    this.d = biFromHex(decryptionExponent);
    this.m = biFromHex(modulus);
    this.digitSize = 2 * biHighIndex(this.m) + 2;
    this.chunkSize = this.digitSize - 11;
    this.radix = 16;
    this.barrett = new BarrettMu(this.m)
}

function twoDigit(n) {
    return (n < 10 ? "0" : "") + String(n)
}

function encryptedString(key, s) {
    if (key.chunkSize > key.digitSize - 11) {
        return "Error"
    }
    var a = new Array();
    var sl = s.length;
    var i = 0;
    while (i < sl) {
        a[i] = s.charCodeAt(i);
        i++
    }
    var al = a.length;
    var result = "";
    var j, k, block;
    for (i = 0; i < al; i += key.chunkSize) {
        block = new BigInt();
        j = 0;
        var x;
        var msgLength = (i + key.chunkSize) > al ? al % key.chunkSize : key.chunkSize;
        var b = new Array();
        for (x = 0; x < msgLength; x++) {
            b[x] = a[i + msgLength - 1 - x]
        }
        b[msgLength] = 0;
        var paddedSize = Math.max(8, key.digitSize - 3 - msgLength);
        for (x = 0; x < paddedSize; x++) {
            b[msgLength + 1 + x] = Math.floor(Math.random() * 254) + 1
        }
        b[key.digitSize - 2] = 2;
        b[key.digitSize - 1] = 0;
        for (k = 0; k < key.digitSize; ++j) {
            block.digits[j] = b[k++];
            block.digits[j] += b[k++] << 8
        }
        var crypt = key.barrett.powMod(block, key.e);
        var text = key.radix == 16 ? biToHex(crypt) : biToString(crypt, key.radix);
        result += text + " "
    }
    return result.substring(0, result.length - 1)
}

function decryptedString(key, s) {
    var blocks = s.split(" ");
    var result = "";
    var i, j, block;
    for (i = 0; i < blocks.length; ++i) {
        var bi;
        if (key.radix == 16) {
            bi = biFromHex(blocks[i])
        } else {
            bi = biFromString(blocks[i], key.radix)
        }
        block = key.barrett.powMod(bi, key.d);
        for (j = 0; j <= biHighIndex(block); ++j) {
            result += String.fromCharCode(block.digits[j] & 255, block.digits[j] >> 8)
        }
    }
    if (result.charCodeAt(result.length - 1) == 0) {
        result = result.substring(0, result.length - 1)
    }
    return result
}

function BarrettMu(m) {
    this.modulus = biCopy(m);
    this.k = biHighIndex(this.modulus) + 1;
    var b2k = new BigInt();
    b2k.digits[2 * this.k] = 1;
    this.mu = biDivide(b2k, this.modulus);
    this.bkplus1 = new BigInt();
    this.bkplus1.digits[this.k + 1] = 1;
    this.modulo = BarrettMu_modulo;
    this.multiplyMod = BarrettMu_multiplyMod;
    this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(x) {
    var q1 = biDivideByRadixPower(x, this.k - 1);
    var q2 = biMultiply(q1, this.mu);
    var q3 = biDivideByRadixPower(q2, this.k + 1);
    var r1 = biModuloByRadixPower(x, this.k + 1);
    var r2term = biMultiply(q3, this.modulus);
    var r2 = biModuloByRadixPower(r2term, this.k + 1);
    var r = biSubtract(r1, r2);
    if (r.isNeg) {
        r = biAdd(r, this.bkplus1)
    }
    var rgtem = biCompare(r, this.modulus) >= 0;
    while (rgtem) {
        r = biSubtract(r, this.modulus);
        rgtem = biCompare(r, this.modulus) >= 0
    }
    return r
}

function BarrettMu_multiplyMod(x, y) {
    var xy = biMultiply(x, y);
    return this.modulo(xy)
}

function BarrettMu_powMod(x, y) {
    var result = new BigInt();
    result.digits[0] = 1;
    var a = x;
    var k = y;
    while (true) {
        if ((k.digits[0] & 1) != 0)
            result = this.multiplyMod(result, a);
        k = biShiftRight(k, 1);
        if (k.digits[0] == 0 && biHighIndex(k) == 0)
            break;
        a = this.multiplyMod(a, a)
    }
    return result
}

function my() {
    setMaxDigits(129);
    var key = new RSAKeyPair("010001", "", "9D3C9EF373D0FD7A320F90E9FCB6312334589AFDA2F55F0C510ABDC613A7BAEA91453425AD0F597B3A795B53E1958F57024A905B05D2BBDDF3AB3754D80F07B7DA14CF3424B729F4396D00842CA051A81E351ED2C3BCEBD82DECCDBE0A0551560FDE4E8B8556AC8F56C3E745E088BC526F6CA456F453A3774AE465CDBD625173")
    ;
    var encrypted = encryptedString(key, "id=18036011152&pw=123456&mt=&lt=0");
    return encrypted.toString();
}

console.log(my())
