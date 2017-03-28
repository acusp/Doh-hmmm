# http://www.pythonchallenge.com/pc/def/map.html
# tips: K=>M; O=>Q; E=>G

import string

original = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc " \
    "dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq " \
    "rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu " \
    "ynnjw ml rfc spj."

intab = "abcdefghijklmnopqrstuvwxyz"
outtab = "cdefghijklmnopqrstuvwxyzab"
transtab = string.maketrans(intab, outtab)

print (original.translate(transtab))

# result:
# i hope you didnt translate it by hand. thats what computers are for.
# doing it in by hand is inefficient and that's why this text is so long.
# using string.maketrans() is recommended. now apply on the url.

base_url = "http://www.pythonchallenge.com/pc/def/%s.html"
url = 'map'
print (base_url % url.translate(transtab))

# http://www.pythonchallenge.com/pc/def/ocr.html
