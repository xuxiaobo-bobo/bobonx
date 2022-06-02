import requests
import execjs

url='https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule'


with open ('./1.js','r',encoding='utf-8') as f:
    jscode=f.read()
  
word='你好'
ctx=execjs.compile(jscode).call('sign',word)
headers={
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Length": "252",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "cookie":"OUTFOX_SEARCH_USER_ID=30495481@10.108.162.135; JSESSIONID=aaacwLnDJirdUdgHeO6ay; OUTFOX_SEARCH_USER_ID_NCOO=906034940.838205; fanyi-ad-id=305566; fanyi-ad-closed=1; ___rl__test__cookies=1650260561858"
    ,"Host": "fanyi.youdao.com",
    "Origin": "https://fanyi.youdao.com",
    "Referer": "https://fanyi.youdao.com/",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
    # "X-Requested-With": "XMLHttpRequest"
}
print(ctx)
data={
    "i": word,
    "from": "AUTO",
    "to": "AUTO",
    "smartresult": "dict",
    "client": "fanyideskweb",
    "salt": ctx['salt'],
    "sign": ctx['sign'],
    "lts": ctx['ts'],
    "bv": "803d4a8f2036921cf486753934c3ae8a",
    "doctype": "json",
    "version": "2.1",
    "keyfrom": "fanyi.web",
    "action": "FY_BY_REALTlME"
}
res=requests.post(url=url,data=data,headers=headers).json()

print(res)