#!/usr/bin/env python3
# -*- coding:utf-8 -*-
import os
import requests

"""

"""

url = "https://bbs.qn.img-space.com/201809/11/d7e3e9831ba7e1f20504527845aba503.jpg"
root = "/Users/acusp/Desktop/images"
path = os.path.join(root, url.split('/')[-1])

try:
    if not os.path.exists(root):
        os.mkdir(root)
    if not os.path.exists(path):
        r = requests.get(url)
        with open(path, 'wb') as f:
            f.write(r.content)
            print("file saved success")
    else:
        print("file already existed")
except Exception as e:
    print(e)
    print('get this page failure')


