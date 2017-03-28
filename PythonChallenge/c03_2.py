# -*- coding: utf-8 -*-
# http://www.pythonchallenge.com/pc/def/ocr.html
# find rare characters in the c03.txt
import string

text = open('c03.txt').read()

def my_solution(text):
    """从text中挑选出属于英文字母的字符"""
    return filter(lambda x: x in string.letters, text)


if __name__ == '__main__':
	base_url = "http://www.pythonchallenge.com/pc/def/%s.html"
	print (base_url % my_solution(text))
    # http://www.pythonchallenge.com/pc/def/equality.html