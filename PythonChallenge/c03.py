# http://www.pythonchallenge.com/pc/def/ocr.html
# find rare characters in the c03.txt
import re

with open('c03.txt', 'r') as f:
    data = (f.read())

url = "".join(re.findall("[A-Za-z]", data))

base_url = "http://www.pythonchallenge.com/pc/def/%s.html"

print (base_url % url)

# http://www.pythonchallenge.com/pc/def/equality.html