# -*- coding: utf-8 -*-
# @Time    : 2022/5/3 15:33
# @Author  : Xuxbo
# 动态字体
import json
from hashlib import md5
from turtle import down
from pip import main
import requests
import urllib.request
from fontTools.ttLib import TTFont
import re
import base64

def get_res(i,headers):
    resjson = requests.get(url=f'https://match.yuanrenxue.com/api/match/7?page={i}',headers=headers)

    download_woff(resjson.json()['woff'])

    return resjson.text


def download_woff(path):

    """下载woff文件"""

    res=  base64.b64decode(path)
    with open('a.woff','wb') as f:
        f.write(res)


def parse_woff(res):
    """解析woff,找出对应字体"""
    online_font = TTFont('a.woff')
    online_font.saveXML('a.xml')
    base_font = {'font': [
        {'value': '4', 'hex': 'ec9467393c47041e0fafff7f4a2852a8'},
        {'value': '9', 'hex': '4119e3dc64f73251d40cf1fc0323e20f'},
        {'value': '6', 'hex': 'af603543300bfc5f0e35e941d4208759'},
        {'value': '2', 'hex': '9bb92485b3e2ba4bd8a93ebbd3a0fa4e'},
        {'value': '0', 'hex': '0aef9a3385d96e7bdd1f3003669a940c'},
        {'value': '3', 'hex': 'b024173b00a3c901b6e696ba12812124'},
        {'value': '7', 'hex': '3dcfec8e26ef48730f25363da55da77a'},
        {'value': '1', 'hex': '2c0ec07331fa25dc226f1ca83561cb46'},
        {'value': '5', 'hex': '9ebca885e21990cee127d23d03acb3ac'},
        {'value': '8', 'hex': 'f9d12372b7002b9a1522dd3dd142cf70'},
    ]}

    uni_list = online_font.getGlyphOrder()
    uni_list.remove('.notdef')
    for i in uni_list:
        font_cmap = online_font['glyf'].glyphs[i].flags
        # print(font_cmap)
        font_cmap_hex = md5(font_cmap).hexdigest()
        for v in base_font['font']:
            if font_cmap_hex == v['hex']:
                res = res.replace(i.replace('uni', '&#x'), v['value'])
    for vl in json.loads(res)['data']:

        v_list.append(int(vl['value'].replace(' ','')))

if __name__ == '__main__':
    v_list=[]
    headers = {"User-Agent": "yuanrenxue.project"}
    for i in range(1,6):
        res = get_res(i,headers)
        parse_woff(res)
    print(max(v_list))



