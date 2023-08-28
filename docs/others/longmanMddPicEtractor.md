---
title: mdx 图片提取
---
安装 mdx 解压工具

```shell
#https://blog.csdn.net/qq_21583139/article/details/125881382
#https://pypi.org/project/mdict-utils/
pip3 install --proxy http://localhost:1081 mdict-utils
#Unpack MDX mdd
mdict -x dict.mdx -d ./mdx
mdict -x dict.mdd -d ./mdd
```

提取文件
@[code java](../_code/java/MddImgExtractor.java)
