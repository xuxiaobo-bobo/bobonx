# -*- coding: utf-8 -*-
# @Time    : 2022/5/7 14:44
# @Author  : Xuxbo
import execjs
import requests


def jiem():
    jsconde=open('./6.js','r',encoding='utf-8').read()
    signature=execjs.compile(jsconde).call('my')
    return signature

def my_headers():

    headers={
        "user-agent": "yuanrenxue.project",}
    return headers

def ge_res(url,headers,params):
    p={

    "m":   params['ccc'],
    "q": params['q']
    }
    res=requests.get(url, headers=headers,params=p).json()
    return res['data']
if __name__ == '__main__':
    total = []
    for i in range(1,6):
        jm=jiem()
        url=f'https://match.yuanrenxue.com/api/match/6?page={i}'
        headers=my_headers()
        res_value=ge_res(url,headers,jm)
        for i in res_value:
            total.append(i['value']*24)
    print(sum(total))
