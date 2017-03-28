# http://www.pythonchallenge.com/pc/def/map.html
# tips: K=>M; O=>Q; E=>G

test = '''g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc
    dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq
    rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu
    ynnjw ml rfc spj.'''

o = ""

for each in test:
	if ord(each) >= ord('a') and ord(each) <= ord('z'):
		o += chr((ord(each) + 2 - ord('a')) % 26 + ord('a'))
	else:
		o += each
print o

# o:
# i hope you didnt translate it by hand. thats what computers are for. 
# doing it in by hand is inefficient and that's why this text is so long. 
# using string.maketrans() is recommended. now apply on the url.

base_url = "http://www.pythonchallenge.com/pc/def/%s.html"
url = 'map'

res = ""

for each in url:
	if ord(each) >= ord('a') and ord(each) <= ord('z'):
		res += chr((ord(each) + 2 - ord('a')) % 26 + ord('a'))
	else:
		res += each
print (base_url % res)

# res => http://www.pythonchallenge.com/pc/def/ocr.html