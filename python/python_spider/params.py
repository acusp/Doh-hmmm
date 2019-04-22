#!/usr/bin/env python3
# -*- coding:utf-8 -*-
import requests

keyword = "Python"
try:
    # baidu search api: ?wd=
    kv = {'wd':keyword}
    r = requests.get("http://www.baidu.com/s", params = kv)
    print(r.request.url)
    r.raise_for_status()
    r.encoding = r.apparent_encoding
    print(len(r.text))
except:
    print('get this page failure')
