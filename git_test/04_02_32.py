import requests as req

url  = "hhttps://s.imgur.com/images/404/cat1weyes.pngh"

res = req.post(url)
print(res.status_code)