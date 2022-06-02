# -*- coding: utf-8 -*-
# @Time    : 2022/5/5 14:40
# @Author  : Xuxbo
import execjs
import requests


def jiem():
    jsconde=open('./5.js','r',encoding='utf-8').read()
    signature=execjs.compile(jsconde).call('my')
    return signature

def my_headers(jm):
    m=jm['cm'][2:-8]
    print(m)
    RM4hZBv0dDon443M=jm['_0x29dd83']

    headers={
    "cookie": f"Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1651723403,1651727744,1651805758; no-alert3=true; tk=3582319719074119477; sessionid=20awodwiy1xr9a58s31sb534harswopc; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1651723411,1651727746,1651739748,1651805766; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1651815749; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1651820702; m={m};RM4hZBv0dDon443M={RM4hZBv0dDon443M}",

    "user-agent": "yuanrenxue.project",}

    return headers

def ge_res(url,headers):
    # print(headers)
    res=requests.get(url, headers=headers).text
    print(res)

if __name__ == '__main__':
    for i in range(1,6):
        jm=jiem()
        # print(jm)
        headers=my_headers(jm)
        ym=str(int(jm['m']))
        #
        f = ym[:-3]+'000'
        url=f'https://match.yuanrenxue.com/api/match/5?page={i}&m={ym}&f={f}'
        print(url)

        ge_res(url,headers)