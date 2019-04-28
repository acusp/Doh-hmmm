#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests

def getHTMLText(url):
    try:
        r = requests.get(url, timeout=30)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        return r.text
    except:
        return "raise an exception"

if __name__ == "__main__":
    url = "https://acusp.info"
    print(getHTMLText(url))
