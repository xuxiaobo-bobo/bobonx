# 猿人学第一题
import os
import time


import execjs
import requests
import jsonpath

headers ={
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "cookie": "Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1649048192; qpfccr=true; no-alert3=true; tk=6005050342247744532; sessionid=uss2ou0zzm9d62b7w25qhoqta17r75nf; Hm_lvt_0362c7a08a9a04ccf3a8463c590e1e2f=1649048237; Hm_lpvt_0362c7a08a9a04ccf3a8463c590e1e2f=1649048237; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1649048284; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1649048284; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1649055611",
    "pragma": "no-cache",
    "referer": "https://match.yuanrenxue.com/match/1",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "user-agent": "yuanrenxue.project",

}
def get_m():
    """读取js文件,获取加密值"""
    jscode = open('yrx_1.js', 'r', encoding='utf-8').read()
    ctx = execjs.compile(jscode)
    res = ctx.eval('my()')
    return res


def get_value(i):
    """获取value值,并计算平均值"""
    global total,num
    params = {
        "page": i,
        "m": get_m()
    }
    url = 'https://match.yuanrenxue.com/api/match/1?'
    time.sleep(1)
    res= requests.get(url,params=params,
                          headers=headers).json()  # {"status": "1", "state": "success", "data": [{"value": 8179}, {"value": 6177}, {"value": 4174}, {"value": 5945}, {"value": 9556}, {"value": 2318}, {"value": 4}, {"value": 2653}, {"value": 4855}, {"value": 1370}]}
    total_=jsonpath.jsonpath(res,'$..value')
    total=sum(total_)+total
    num=num+len(jsonpath.jsonpath(res,'$..value'))

if __name__ == '__main__':
    total=0
    num=0
    for i in range(1, 6):
        get_value(i)

    print(total/num)