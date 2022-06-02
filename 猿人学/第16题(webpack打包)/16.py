import base64

import execjs
import requests


class Crawl:
    def __init__(self, url, page, total_list):
        self.page = page
        self.url = url
        self.total_list = total_list

    def get_m(self):
        """读取js文件,获取加密值"""
        jscode = open('16.js', 'r', encoding='utf-8').read()
        ctx = execjs.compile(jscode)
        res = ctx.eval('my()')

        return res

    def _headers(self):
        headers = {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "cookie": "Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1653028024; qpfccr=true; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1653028026; tk=-4745157498988663270; sessionid=6bc7mf9q35k40in8zczk3nbpgin0yrcq; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1653028034; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1653028037",
            "pragma": "no-cache",
            "referer": "https://match.yuanrenxue.com/match/16",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "yuanrenxue.project",
            "x-requested-with": "XMLHttpRequest"
        }
        return headers

    def _params(self):
        m_t = self.get_m()
        params = {
            'm': m_t['m'],
            't': m_t['t'],
            'page': self.page

        }

        return params

    def do_request(self):
        params = self._params()
        headers = self._headers()
        print(headers)
        resjson = requests.get(url=self.url, headers=headers, params=params).json()['data']
        return resjson

    def get_sum(self):
        resjson = self.do_request()
        [total_list.append(i['value']) for i in resjson]


if __name__ == '__main__':
    total_list = []
    for i in range(1, 6):
        url = 'https://match.yuanrenxue.com/api/match/16'
        result = Crawl(url, i, total_list).get_sum()

    print(sum(total_list))
