#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import requests

def getHTMLText(url):
    try:
        r = requests.get(url, timeout=30)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        return r.text
    except:
        return "raise an exception"

def main():
    starttime = time.time()
    url = "http://www.baidu.com"
    for i in range(100):
        getHTMLText(url)
    endtime = time.time()
    return endtime - starttime

if __name__ == '__main__':
    print('爬取100次的时间是：', main())
