#!/usr/bin/env python3
# -*- coding: utf-8 -*
from functools import reduce

def prod(num):
    return reduce(lambda x, y: x * y, num)

if __name__ == "__main__":
    print('3 * 5 * 7 * 9 =', prod([3, 5, 7, 9]))
    if prod([3, 5, 7, 9]) == 945:
        print('测试成功!')
    else:
        print('测试失败!')