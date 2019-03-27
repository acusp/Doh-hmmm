#!/usr/bin/env python3
# -*- coding: utf-8 -*-

list = [1, 2, 3, 4]
result = []

for x in list:
    for y in list:
        for z in list:
            if (x!=y) and (x!=z) and (y!=z):
                result.append([x, y, z])

print(result)
print("总数：", len(result))
