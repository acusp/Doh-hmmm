#!/usr/bin/env python3
# -*- coding: utf-8 -*-
'''
#=============================================================================
#     FileName: pil_demo.py
#         Desc: a demo use plt module to process the image.
#       Author: acusp
#        Email: acusp.xu@gmail.com
#   LastChange: 2017-10-05 13:35:31
#=============================================================================
'''

from PIL import Image, ImageDraw, ImageFilter

img = Image.open("res/avatar.png")

mode = img.mode
(width, height) = img.size
pixels = img.getdata()

imn = Image.new(mode, (width, height))
imn.putdata(pixels)

xSize = width
ySize = height

draw = ImageDraw.Draw(imn)
draw.line([(0, 0), (255, 255)], fill=(255, 255, 0, 255), width=3)
draw.arc([(0, 0), (xSize, ySize)], 0, 180, (0, 255, 255, 255))
draw.text((0.5*xSize, 0.5*ySize), "hello PIL")

#img_filted = img.filter(ImageFilter.BLUR)
img_filted = img.filter(ImageFilter.UnsharpMask())

imn.show()
img_filted.show()
