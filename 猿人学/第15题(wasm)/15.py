import execjs
import pywasm
import requests


def get_m():
    """读取js文件,获取加密值"""
    jscode = open('15.js', 'r', encoding='utf-8').read()
    ctx = execjs.compile(jscode)
    res = ctx.eval('my()')
    return res

def ws_parse(res):
    ws=pywasm.load('./main.wasm')

    q_value=ws.exec('encode', [res['t1'], res['t2']])
    sign=str(q_value)+'|'+str(res['t1'])+'|'+str(res['t2'])
    return sign


def get_content(m,i):
    headers = {
        "user-agent": "yuanrenxue.project",
    }
    cookies = {
        "Hm_lvt_c99546cf032aaa5a679230de9a95c7db": "1652841238",
        "qpfccr": "true",
        "no-alert3": "true",
        "tk": "-4745157498988663270",
        "sessionid": "vin6nsq7gtn0pea1oksrry1hfp90bknn",
        "Hm_lvt_9bcbda9cbf86757998a2339a0437208e": "1652841434",
        "yuanrenxue_cookie": "1652846980|7xFhEqbwu9GwherAH24kI71lB8K5f6WFFqv1xc5ZSLJJYpmuDCja15Z6k7UPmTX16vYwapoks8oYbKXwBfB2Cl2wWDi0QWkWeBPOWhq3eKXw4805VeJOH8hZyuRGNTwwmADSeiI6a8AwuqERrcFMpm",
        "Hm_lpvt_9bcbda9cbf86757998a2339a0437208e": "1652848292",
        "Hm_lpvt_c99546cf032aaa5a679230de9a95c7db": "1652848693"
    }
    url = "https://match.yuanrenxue.com/api/match/15"
    params = {
        "m": m,
        "page": i
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params).json()['data']

    [value_list.append(i['value'])  for i in response]



if __name__ == '__main__':
    value_list=[]
    for i in range(1, 6):
        res=get_m()
        m=ws_parse(res)
        get_content(m,i)
    print(sum(value_list))