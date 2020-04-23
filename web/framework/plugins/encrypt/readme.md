一共分为 3 个步骤：计算盐值、加密、base32编码

计算盐值:

1. 原始密码转化为字节数组，编码使用UTF8；

2. 字节数组长度对3取余数，再加1，得到间隔interval；

3. 按照interval，对字节数组截取，得到盐值salt。



例如，interval = 2，原始密码字节数组为 [0, 1, 2, 3, 4, 5, 6]，

则 salt 为，[0, 3, 6]，每隔 2 个位置，取 1 个值。



加密:

使用上一步计算出来的盐值+原始密码，计算SHA1

即，digest = SHA1(salt+password)

base32编码
对SHA1的结果进行base32编码，得到加密最终结果，编码同样使用UTF8

**demo**

```python
def encrypt(password):
    import hashlib
    import base64
    pwd_bytes = bytes(password, 'utf8')
    offset = len(pwd_bytes) % 3 + 1

    salt = []
    for i in range(0, len(pwd_bytes), offset + 1):
        salt.append(pwd_bytes[i])

    sha = hashlib.sha1(bytes(salt))
    sha.update(pwd_bytes)
    digest = sha.digest()

    return str(base64.b32encode(digest), encoding='utf8')

# Input: passwordtony
# Output: 27C3WGN2GBT6VJ2NTPBZCBBIOK3XLCTD
```
