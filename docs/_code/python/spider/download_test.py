import requests
item='https://pic.3gbizhi.com/uploads/20240123/37c818be07869ac05d67a2309db2d7a0.jpg'
headers1 = {
    'Host': 'pic.3gbizhi.com',
    'Pragma': 'no-cache',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
    'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
    'Referer': 'https://www.3gbizhi.com/',
}
image = requests.get(item, headers=headers1).content
print(image)