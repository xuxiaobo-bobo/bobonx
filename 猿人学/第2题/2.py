# -*- coding: utf-8 -*-
# @Time    : 2022/4/5 13:27
# @Author  : Xuxbo
import execjs
import requests
import jsonpath
def get_m():
    """读取js文件,获取加密值"""
    jscode = open('yrx_2.js', 'r', encoding='utf-8').read()
    ctx = execjs.compile(jscode)
    res = ctx.eval('my()')
    return res


def my_headers():
    headers={
        "cookie": f"Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1649130228; qpfccr=true; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1649136554; tk=6005050342247744532; sessionid=2pkyzcwd040vagl7v751bnyjfx58fiar; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1649136561; {get_m()}; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1649136563",
        "user-agent": "yuanrenxue.project",
    }
    return headers

def ge_res(url,params):
    global total
    res=requests.get(url, headers=my_headers(),params=params).json()
    value_list=jsonpath.jsonpath(res,'$..value')
    total+=sum(value_list) #计算和

if __name__ == '__main__':
    total=0
    url = 'https://match.yuanrenxue.com/api/match/2'
    for i in range(1,6):
        params={
            'page':i
        }
        ge_res(url,params)
    print(total)