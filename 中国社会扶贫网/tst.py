# -*- coding: utf-8 -*-
# @Time    : 2022/4/4 21:18
# @Author  : Xuxbo
import execjs
import requests
#baseurl:
#http://xffp.zgshfp.com.cn/portal/#/product-list/product-list-public?btnoid=AF24CF8382AF462DA8B224F965C81D04&type=gs

def get_m():
    """读取js文件,获取加密值"""
    jscode = open('t1.js', 'r', encoding='utf-8').read()
    ctx = execjs.compile(jscode)
    res = ctx.eval('my()')
    return res
headers={
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "C-App-Id": "GSP_APP_001",
    "C-Business-Id": get_m()['CBusinessId'],
    "C-Dynamic-Password-Foruser": "false",
    "C-Tenancy-Id": "009900000000",
    "C-Timestamp": get_m()['CTimestamp'],
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "130",
    "Content-Type": "application/json",
    "Cookie": "c=AKR2cQ5S-1649065908105-d4a95b6e961a5-610440369; _fmdata=Fp%2BmcYRxH8iREuEgKNvn7Y8LkeW6OiGuJLh1FuCobq%2Fg%2FfOUIaUzdsPa3ypHECfYixMO2Vo3KgFVt5Wp6PaEpkS87X%2FN8H9Z57J1A0sijEI%3D; zg_did=%7B%22did%22%3A%20%2217ff3fcd7a6318-07f12abe9dfa63-9771a39-151800-17ff3fcd7a7ad8%22%7D; ja_92455695d1354fd79bbea28abccc6146=%7B%22sid%22%3A%201649065908139%2C%22updated%22%3A%201649074566136%2C%22info%22%3A%201649065908143%2C%22superProperty%22%3A%20%22%7B%5C%22%E6%B6%88%E8%B4%B9%E6%89%B6%E8%B4%AB%5C%22%3A%20%5C%22%E6%B6%88%E8%B4%B9%E6%89%B6%E8%B4%AB%5C%22%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22%22%2C%22landHref%22%3A%20%22http%3A%2F%2Fxffp.zgshfp.com.cn%2Fportal%2F%23%2Fproduct-list%2Fproduct-list-public%3Fbtnoid%3DAF24CF8382AF462DA8B224F965C81D04%26type%3Dgs%22%2C%22cuid%22%3A%20%22undefined%22%7D; _xid=RVo0XU6j9d%2Fn31AAl%2B2JXxeKm38r1SZ7%2BTp%2F8Ebigmn2x07HlkXggaapPo6KofRPFmrmqjOdbZxWT%2F1lQ5D77Q%3D%3D; acw_tc=79e4822516490775941592208e64648179fad45b7c83ff317fe99ef22c",
    "Host": "xffp.zgshfp.com.cn",
    "menberId": "2844192e0f1f47a7a8dd02c21ebe0b40",
    "Origin": "http://xffp.zgshfp.com.cn",
    "Pragma": "no-cache",
    "Referer": "http://xffp.zgshfp.com.cn/portal/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36"
}
data={
  "txnCommCom": {
    "txnIttChnlId": "C0071234567890987654321",
    "txnIttChnlCgyCode": "BF09C999"
  },
  "txnBodyCom": {
    "pulctSt": "02,03,04,05,06"
  }
}
print(headers)
print(requests.post(url='http://xffp.zgshfp.com.cn/fpfw/fpcpfw00122', json=data, headers=headers).text)