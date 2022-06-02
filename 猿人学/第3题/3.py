# -*- coding: utf-8 -*-
# @Time    : 2022/4/5 13:48
# @Author  : Xuxbo
import requests
from collections import Counter


class MyHeaders(object):
    def items(self):
        return (('Host', 'match.yuanrenxue.com'),
                ('Pragma', 'no-cache'),
                ('Connection', 'keep-alive'),
                ('Accept', 'application/json, text/javascript, */*; q=0.01'),
                ('User-Agent', 'yuanrenxue.project'),
                ('X-Requested-With', 'XMLHttpRequest'),
                ('Referer', 'http://match.yuanrenxue.com/match/3'),
                ('Origin', 'http://match.yuanrenxue.com'),
                ('Cache-Control', 'no-cache'),
                ('Accept-Encoding', 'gzip, deflate'),
                ('Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8'),)


def get_json(page):
    headers = {
        "Host": "match.yuanrenxue.com",
        "Connection": "keep-alive",
        "Content-Length": "0",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
        "sec-ch-ua-platform": "\"Windows\"",
        "Accept": "*/*",
        "Origin": "https://match.yuanrenxue.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://match.yuanrenxue.com/match/3",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        'Cookie': 'qpfccr=true; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1649130228,1649139076,1649141125; no-alert3=true; tk=6005050342247744532; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1649136554,1649139079,1649141134; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1649141134; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1649141134'
        , 'x-requested-with': 'XMLHttpRequest'
    }
    s=requests.session()
    s.headers=headers
    logo_url = "https://match.yuanrenxue.com/jssm"
    api_url = "http://match.yuanrenxue.com/api/match/3?page={}".format(page)
    resp = s.get(logo_url, headers=headers)

    print(s.cookies.get_dict())
    response = s.get(api_url,headers=MyHeaders())
    return response.json()


if __name__ == '__main__':
    data_list = []
    for page in range(1, 6):
        json = get_json(page)
        data = json.get('data')
        for d in data:
            data_list.append(d['value'])
    top_1 = max(data_list,key=data_list.count)
    print("出现频率最高的申请号：", top_1)
