#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import requests

url = "https://www.amazon.cn/dp/B01CU3GYYA/?th=1"
try:
    kv = {'user-agent':'Mozilla/5.0'}
    r = requests.get(url, headers = kv)
    r.raise_for_status()
    r.encoding = r.apparent_encoding
    print(r.text[:1000])
except:
    print('get this page failure')
