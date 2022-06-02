import re

import jsonpath
import requests

s = requests.session()
# 设置我们登陆账号时候的cookie一边一会请求时服务器返回我们对应的sessionid
s.headers = {
    "GET": "https://match.yuanrenxue.com/match/13 HTTP/1.1",
    "Host": "match.yuanrenxue.com",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.40 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "Referer": "https://match.yuanrenxue.com/match/13",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cookie": "Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1652841238; qpfccr=true; no-alert3=true; tk=-4745157498988663270; sessionid=vin6nsq7gtn0pea1oksrry1hfp90bknn; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1652841434; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1652846330; yuanrenxue_cookie=1652846337|pC8S6QG6D8og4e9vH7n6Gzs3qKAZtL6vpVd40ePqN34zfyBFIOSU9oLzcaK7uvGYdhdN8DFYcAqX26YHV83rDy9dWOfVVajrLCYnnDx5YeBD5Ww0YqPOZLaLKInN461BE1PsHMj6KFPTa4t1qYkpdZDajTqEkDVrWN1g; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1652846336"
}
# 获取我们的yuanrenxue_cookie
res = s.get("https://match.yuanrenxue.com/match/13")
coo_obj = res.content.decode()
# print(s.cookies)
print(s.headers)
# 使用正则把yuanrenxue_cookie里的括号引号迷惑项去掉
coo_obj = str(re.findall("cookie=(.*?)\+'", coo_obj)[0])
coo_obj = coo_obj.replace("('", '').replace("')", '').replace('+', '')  # .replace('yuanrenxue_cookie=','')
# 这里获取服务器返回我们的sessionid，便于一会组装我们的cookie
for v, k in s.cookies.iteritems():
    sessionid = v + '=' + k
# 组装我们的cookie，作为请求头一会请求时使用
headers_ = {
    "User-Agent": "yuanrenxue.project",
    'cookie': coo_obj + ';' + sessionid
}
# 设置请求头
s.headers = headers_
nums = 0
print(s.headers)
# 开始获取数据
for i in range(1, 6):

    num_data = s.get(f'https://match.yuanrenxue.com/api/match/13?page={i}').json()
    # print(num_data)
    # 使用jsonpath跨界点提取value的值
    num_l = jsonpath.jsonpath(num_data, '$..value')
    print(num_l)
    for num in num_l:
        print(num, end='\t')
        nums += num
print('\n最终结果：', nums)