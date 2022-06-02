import execjs
import requests
import json
with open ('./1.js','r',encoding='utf-8') as f:
    jscode=f.read()
  
word='波波'
ctx=execjs.compile(jscode).call('e',word)
print(ctx)
url='https://fanyi.baidu.com/v2transapi?from=zh&to=en'
data={
    "from": "zh",
    "to": "en",
    "query": word,
    "transtype": "translang",
    "simple_means_flag": "3",
    "sign": ctx,
    "token": "f5ef0edd366fac7f81227ad5ef6e55c3",
    "domain": "common"
}


headers={
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Length": "151",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Cookie": "BIDUPSID=B056769932490069A2352170561ED4B8; PSTM=1643101554; __yjs_duid=1_f676be7c7fda61268606e981cecb9abf1643186002517; BAIDUID=D038055103A72FFD682EB983BFB4DB3D:FG=1; H_PS_PSSID=31253_36005_36167_34584_36120_36074_36125_35864_36260_26350_36101_36061; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; delPer=0; PSINO=5; BAIDUID_BFESS=D038055103A72FFD682EB983BFB4DB3D:FG=1; REALTIME_TRANS_SWITCH=1; SOUND_SPD_SWITCH=1; HISTORY_SWITCH=1; FANYI_WORD_SWITCH=1; SOUND_PREFER_SWITCH=1; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1650260909; BCLID=8001612897293874120; BDSFRCVID=0l0OJeC62Z4bHa7DVDvbrUFl9p_kuwQTH6aoXoURgDl-OeWOp52bEG0PMM8g0K4bof3rogKKL2OTHmkF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tbkD_C-MfIvDqTrP-trf5DCShUFse6cAB2Q-XPoO3KJWsn7PQ-n0QMAX3tjQt-QiWbRM2MbgylRp8P3y0bb2DUA1y4vp5-QjBmTxoUJ2XMKVDq5mqfCWMR-ebPRiWTj9QgbLBhQ7tt5W8ncFbT7l5hKpbt-q0x-jLTnhVn0MBCK0hI0ljj82e5PVKgTa54cbb4o2WbCQ-lnT8pcN2b5oQT8bQUna0PRE3nbH-lQsJb5vOIJTXpOUWfAkXpJvQnJjt2JxaqRCKb528q5jDh3MBpQDhtoJexIO2jvy0hvcBIocShnzMUjrDRLbXU6BK5vPbNcZ0l8K3l02V-bIe-t2XjQhDNAHq6kHJbksL-35HJj2jJQv2KTjh6PD04Q9BtQmJJrfoPP2KhcUVp-xyJ5lQ47WyM5m045aQg-q0DOYQh4KOno1QjtVKn0Nyh-H0x-jLnTOVn0MWhjYhpcbKPnJyUPTD4nnBPrW3H8HL4nv2JcJbM5m3x6qLTKkQN3T-PKO5bRh_CFhfI8bhC-Rj5Rb5nbHbUo--PQebPo2WbCQ5qvz8pcNLTDKW60VyMLf0p5R2KvH-lQsf4JrjP560qO1j4_eWMnPQtbRaPj90x3v-IKKHl5jDh3YXjksD-4J5tRht5ry0hvcBIocShnzMUjrDRLbXU6BK5vPbNcZ0l8K3l02V-bIe-t2XjQhDHAet5DJtbPsL-35HJ3qetbNKn8_-P4DeN3QJURZ5mAqofF2KqnHMpbKQbjDKlLzharjy-ntba6naIQqaMnoSfoTQ-kVXPLiXp0tJtj43bRT2lCy5KJvMbovb6bKhP-UyPkHWh37aC3lMKoaMp78jR093JO4y4Ldj4oxJpOJ5JbMopCafJOKHIClejt-DMK; BCLID_BFESS=8001612897293874120; BDSFRCVID_BFESS=0l0OJeC62Z4bHa7DVDvbrUFl9p_kuwQTH6aoXoURgDl-OeWOp52bEG0PMM8g0K4bof3rogKKL2OTHmkF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=tbkD_C-MfIvDqTrP-trf5DCShUFse6cAB2Q-XPoO3KJWsn7PQ-n0QMAX3tjQt-QiWbRM2MbgylRp8P3y0bb2DUA1y4vp5-QjBmTxoUJ2XMKVDq5mqfCWMR-ebPRiWTj9QgbLBhQ7tt5W8ncFbT7l5hKpbt-q0x-jLTnhVn0MBCK0hI0ljj82e5PVKgTa54cbb4o2WbCQ-lnT8pcN2b5oQT8bQUna0PRE3nbH-lQsJb5vOIJTXpOUWfAkXpJvQnJjt2JxaqRCKb528q5jDh3MBpQDhtoJexIO2jvy0hvcBIocShnzMUjrDRLbXU6BK5vPbNcZ0l8K3l02V-bIe-t2XjQhDNAHq6kHJbksL-35HJj2jJQv2KTjh6PD04Q9BtQmJJrfoPP2KhcUVp-xyJ5lQ47WyM5m045aQg-q0DOYQh4KOno1QjtVKn0Nyh-H0x-jLnTOVn0MWhjYhpcbKPnJyUPTD4nnBPrW3H8HL4nv2JcJbM5m3x6qLTKkQN3T-PKO5bRh_CFhfI8bhC-Rj5Rb5nbHbUo--PQebPo2WbCQ5qvz8pcNLTDKW60VyMLf0p5R2KvH-lQsf4JrjP560qO1j4_eWMnPQtbRaPj90x3v-IKKHl5jDh3YXjksD-4J5tRht5ry0hvcBIocShnzMUjrDRLbXU6BK5vPbNcZ0l8K3l02V-bIe-t2XjQhDHAet5DJtbPsL-35HJ3qetbNKn8_-P4DeN3QJURZ5mAqofF2KqnHMpbKQbjDKlLzharjy-ntba6naIQqaMnoSfoTQ-kVXPLiXp0tJtj43bRT2lCy5KJvMbovb6bKhP-UyPkHWh37aC3lMKoaMp78jR093JO4y4Ldj4oxJpOJ5JbMopCafJOKHIClejt-DMK; RT=\"z=1&dm=baidu.com&si=vxxuk7tiu8&ss=l24ctszq&sl=6&tt=2d9&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=3axj&ul=43fy&hd=43gr\"; BAIDUID_V4=2CAFC7ABB54F95BBC22ACFFFD1830D9F:FG=1; BA_HECTOR=8184a1ak24al8h84bh1h5q2nc0q; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1650266251; ab_sr=1.0.1_NDRjNzljM2JiNTFkZmZhZTZiMGIxZGNmODBkNjUzMzAxZTc3NjU1ODQxNzJmMDliMzVjZDM5ZDViODAzYjM3ZDQwOGVlYzNlZjAwMTcyOWI4YWRhZDA0N2E0Nzk5M2E0NzA4OTVkMzA2OGNmYWViNTAxMWVmODhkMWRkM2IwZWIxMTQ5MTVhNjQ1OGZlOWNjMmY0OWIwYjMwOTAyY2M5Mg==",
    "Host": "fanyi.baidu.com",
    "Origin": "https://fanyi.baidu.com",
    "Referer": "https://fanyi.baidu.com/translate?aldtype=16047&query=%E6%B3%A2%E6%B3%A2&keyfrom=baidu&smartresult=dict&lang=auto2zh",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest"
}

res=requests.post(url=url,headers=headers,data=data).json()
print(type(res))
resl=(eval(res['liju_result']['double']))
