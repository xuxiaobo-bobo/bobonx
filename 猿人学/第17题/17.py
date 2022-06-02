import requests
import httpx
headers = {
    'authority': 'match.yuanrenxue.com',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1652841238; qpfccr=true; no-alert3=true; tk=-4745157498988663270; sessionid=vin6nsq7gtn0pea1oksrry1hfp90bknn; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1652841434; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1652841446; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1652841578',
    'pragma': 'no-cache',
    'referer': 'https://match.yuanrenxue.com/match/17',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'x-requested-with': 'XMLHttpRequest',
"user-agent": "yuanrenxue.project",
}
p=[]
for i in range(1,6):
    url='https://match.yuanrenxue.com/api/match/17?page='+str(i)
    with httpx.Client(headers=headers, http2=True) as client:
        # with 内部请求共用一个client，参数也共用
        # 替换client的参数

        r = client.get(url).json()['data']
        [p.append(v['value'] )for v in r]
print(sum(p))
