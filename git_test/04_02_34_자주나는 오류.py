

from ctypes import create_string_buffer
from http.cookiejar import Cookie
from numpy import spacing
import requests as req

url  = "http://naver.com"

res = req.post(url)
print(res.status_code)



