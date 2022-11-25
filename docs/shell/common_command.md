---
title: 常用命令
---

apt list --installed | grep program_name
https://codeantenna.com/a/Z12uSSK6R3

`apt install mailutils`，postfix 选项选择默认配置即可 ， 安装完成之后直接发送邮件，不用配置

`echo "中文字体" | mail -s "test for chinese" 173389705@qq.com`

邮件标题不能是中文，下面这个邮件发送不成功，会报错（SMTPUTF8 is required, but was not offered by host mx3.qq.com） 查看 mail.log (/var/log/mail.log)

`echo "mail utils test" | mail -s "中文不能发送" 173389705@qq.com`


> Nov 25 14:19:26 localhost postfix/smtp[19436]: E02FE20439:
to=<173389705@qq.com>, relay=mx3.qq.com[43.137.222.247]:25, delay=0.15, delays=0.01/0/0.14/0, dsn=5.6.7, status=bounced (SMTPUTF8 is required, but was not offered by host mx3.qq.com[43.137.222.247])

