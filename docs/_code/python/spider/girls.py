# encoding = utf-8
import concurrent
import os
from concurrent.futures import ThreadPoolExecutor
import requests
from bs4 import BeautifulSoup

import re

def extract_file_name(url):
    # Regular expression pattern to match the file name at the end of the URL
    pattern = r'/([^/]+)$'
    match = re.search(pattern, url)
    if match:
        return match.group(1)
    else:
        return None
      
def header(referer):

    headers = {
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

    return headers


def request_page(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
    except requests.RequestException:
        return None


def get_page_urls():
    urls = []
    for i in range(1, 2):
        baseurl = 'https://3gbizhi.com/sjbz/index_{}.html'.format(i)
        html = request_page(baseurl)
        soup = BeautifulSoup(html, 'lxml')
        elements = soup.find('div',class_='contlistw').find(class_='cl').find_all('li')
        for item in elements:
            url = item.find('a').find('img').get('lay-src')
            print('页面链接：%s' % url)
            urls.append(url)

    return urls


def download_Pic(title, item):
    # 新建文件夹
    # os.mkdir(title)
    # 下载图片
    image_name = extract_file_name(item)
    filename = '%s/%s.jpg' % (title, str(image_name))
    print('downloading....%s : NO.%s' % (title, str(image_name)))
    with open(filename, 'wb') as f:
        img = requests.get(item, headers=header(item)).content
        f.write(img)


def download_all_images(list_page_urls):
    # 获取每一个详情妹纸
    # works = len(list_page_urls)
    with concurrent.futures.ProcessPoolExecutor(max_workers=5) as exector:
        for url in list_page_urls:
            exector.submit(download_Pic,"images", url)


if __name__ == '__main__':
    # 获取每一页的链接和名称
    list_page_urls = get_page_urls()
    download_all_images(list_page_urls)