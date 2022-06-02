from pip import main
import requests
import execjs
import re



def jiem():
    jscode=open('./3.js','r',encoding='utf-8').read()
    
    signature=execjs.compile(jscode).call('my')
  
    print(signature)
    return signature    



def get_s(i):
    global v
    headers={
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "67",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Cookie": "session=db152d6b-4791-4cc5-9ab6-8e62d04826c4.mLB_ml5oNu_x5t5135cqujqoYkA",
    "Host": "spider.wangluozhe.com",
    "Origin": "http://spider.wangluozhe.com",
    "Pragma": "no-cache",
    "Referer": "http://spider.wangluozhe.com/challenge/2",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest"
}
    url='http://spider.wangluozhe.com/challenge/api/3'
    data={
        'page': i,
        'count': 10,
        '_signature': jiem()
        }
    res=requests.post(url=url,data=data,headers=headers).text
    v=v+sum(int(f) for f in re.findall('\d+',res,re.S))
    print(v)

v=0
for i in range(1,101):
        
    get_s(i)

