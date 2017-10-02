#!/usr/bin/env python3
# -*- coding: utf-8 -*-
'''
#=============================================================================
#     FileName: struct.py
#         Desc: a demo to parse bmp image use struct module
#       Author: acusp
#        Email: acusp.xu@gmail.com
#   LastChange: 2017-10-02 19:48:59
#=============================================================================
'''
import struct

bmp_header = b'\x42\x4d\x38\x8c\x0a\x00\x00\x00\x00\x00\x36\x00\x00\x00\x28\x00\x00\x00\x80\x02\x00\x00\x68\x01\x00\x00\x01\x00\x18\x00'

print(struct.unpack('<ccIIIIIIHH', bmp_header))
