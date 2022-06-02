import requests



url='http://ggzy.huangshan.gov.cn/004/subSearch.html?categoryNum=004&pageIndex=8'

res=requests.get(url).text

print(res)