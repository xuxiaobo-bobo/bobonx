import base64

import requests

headers={
    "user-agent": "yuanrenxue.project",
    'Cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1652841238; qpfccr=true; no-alert3=true; tk=-4745157498988663270; sessionid=vin6nsq7gtn0pea1oksrry1hfp90bknn; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1652841434; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1652842144; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1652842149'
}
p=[]
for i in range(1,6):
    str1 = 'yuanrenxue' + str(i)
    m = base64.b64encode(str1.encode('utf-8'))
    print(m)
    params={
        'page':i,
        "m":m
    }

    res=requests.get(url='https://match.yuanrenxue.com/api/match/12?',params=params,headers=headers).json()['data']

    [p.append(v['value'] )for v in res]

print(sum(p))