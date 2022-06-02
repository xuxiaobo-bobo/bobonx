from opcode import opname
from unittest import main
import requests
import re
import base64
# import time

from lxml import etree
import objprint as op


# headers={
#     "Accept": "application/json, text/javascript, */*; q=0.01",
#     "Accept-Encoding": "gzip, deflate",
#     "Accept-Language": "zh-CN,zh;q=0.9",
#     "Cache-Control": "no-cache",
#     "Connection": "keep-alive",
#     "Content-Length": "15",
#     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
#     "Cookie": "session=db152d6b-4791-4cc5-9ab6-8e62d04826c4.mLB_ml5oNu_x5t5135cqujqoYkA; v=A9RsSLg_SI1FKd6E9ToF75BWpRlDLfgXOlGMW261YN_iWXoHlj3Ip4phXOm9",
#     "hexin-v": "A2HZl6WcpTrAWgsL2HbYODXFcCZ-DtQA_4J5FsM2XWjHKo9YC17l0I_SiedQ",
#     "Host": "spider.wangluozhe.com",
#     "Origin": "http://spider.wangluozhe.com",
#     "Pragma": "no-cache",
#     "Referer": "http://spider.wangluozhe.com/challenge/6",
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
#     "X-Requested-With": "XMLHttpRequest"
# }
# v=0
# t=str(int(time.time()*1000))
# print(t)
# for i in range(1,101):

#     timestmap=base64.b64encode(t.encode())
#     print(timestmap)
#     data={
#         'page': i,
#         'count': 10,
#         '_signature':str(timestmap)
#         }

def get_list_page(url,headers   ):
    """获取列表页url"""
   
    res=requests.get(url=url,headers=headers).text
    page_list=re.findall('href="https://task.epwk.com/(\d+?)/"',res,re.S)#  
    page_url= ['https://task.epwk.com/'+page+'/' for page in page_list]
    return page_url


def get_detail_msg(url_list):
    headers={
    "task_browing_history_=a%3A1%3A%7Bi%3A155450%3Ba%3A3%3A%7Bi%3A0%3Bi%3A155450%3Bi%3A1%3Bs%3A9%3A%22500.00%E5%85%83%22%3Bi%3A2%3Bs%3A47%3A%22%E6%B7%84%E5%8D%9A%E5%8D%A1%E7%89%B9%E9%A3%8E%E5%8A%9B%E5%8F%91%E7%94%B5%E6%9C%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8VI%E8%AE%BE%E8%AE%A1%22%3B%7D%7D;": "HWWAFSESID=4548373f7b22978100; HWWAFSESTIME=1649643996248; UM_distinctid=1801671ca0354f-04c78f58da754e-1a343370-384000-1801671ca04e56; PHPSESSID=5e4d8d5d09a45c0545f331c0228b0c1dc63b96d6; time_diff=1; XDEBUG_SESSION=XDEBUG_ECLIPSE; adbanner_city=%E6%97%A0%E9%94%A1%E5%B8%82; common_channel=02c33f181c7f04955722d6ea49a7b8b6; CNZZDATA1280772424=180667179-1649634413-%7C1649645213; CNZZDATA1257734387=458318535-1649633549-%7C1649646990"
}
    for url in url_list:
        # print(url)
        res=requests.get(url=url,headers=headers).text
        # print(res)
        tree=etree.HTML(res)
        print(len(tree.xpath('//div[@class="task-info-wrap"]//text()')))
        
        #任务要求
        
        break


if __name__ =='__main__':
    headers={
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Cookie": "HWWAFSESID=4548373f7b22978100; HWWAFSESTIME=1649643996248; UM_distinctid=1801671ca0354f-04c78f58da754e-1a343370-384000-1801671ca04e56; CNZZDATA1280772424=180667179-1649634413-%7C1649634413; CNZZDATA1257734387=458318535-1649633549-%7C1649633549; PHPSESSID=5e4d8d5d09a45c0545f331c0228b0c1dc63b96d6; time_diff=1; XDEBUG_SESSION=XDEBUG_ECLIPSE; adbanner_city=%E6%97%A0%E9%94%A1%E5%B8%82",
        "Host": "task.epwk.com",
        "Pragma": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\""}
    for i in range(1,4044):
        url=f'https://task.epwk.com/page{i}.html'
        url_list=get_list_page(url,headers)
        
        get_detail_msg(url_list)
        break
        
        
        
    
    
    
    
    
    
    
    
    
#     v=v+sum(int(f) for f in re.findall('\d+',res,re.S))
#     print(v)


# with open('./5.js','r') as f:
#     for i in f.readlines():
#         print(i)