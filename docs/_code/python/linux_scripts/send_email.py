import smtplib
import psutil
from email.mime.text import MIMEText
from email.header import Header
 
 
def sendEmailFromQQSmtp():
    # 第三方 SMTP 服务
    smtpserver="smtp.qq.com"  #设置服务器
    smtpport = 465 #设置服务器端口
    mail_user="173389705@qq.com"    #用户名
    mail_pass="iazhafyfzpfxxxxx"   #16位授权码
    
    
    sender = '173389705@qq.com'
    gmail = 'tumbleweed666@gmail.com'
    wangyi163 = 'lzljiaoda_happy@163.com'
    receivers = [wangyi163]  # 接收邮件，可设置为你的QQ邮箱或者其他邮箱
    
    message = MIMEText('Python 邮件发送测试 ... 11:45', 'plain', 'utf-8')
    # QQ邮箱 header  设置错误问题
    # https://blog.csdn.net/qq_41158337/article/details/130193810
    message['From'] = Header('zonglinlee <173389705@qq.com>')
    message['To'] =  Header('tumbleweed <lzljiaoda_happy@163.com>')
    
    subject = 'Python SMTP 邮件测试'
    message['Subject'] = Header(subject, 'utf-8')
    
    # 获取 CPU 使用率
    cpu_percent = psutil.cpu_percent()

    # 判断 CPU 使用率是否超过阈值
    if cpu_percent > 2:
        try:
            server = smtplib.SMTP_SSL(smtpserver,smtpport)
            server.set_debuglevel(1)
            server.login(mail_user,mail_pass)
            server.sendmail(sender, receivers, message.as_string())
            print("邮件发送成功")
        except smtplib.SMTPException:
            print("Error: 无法发送邮件")
        finally:
            server.quit()
        
        
# 协议  服务器         SSL   非 SSL
# SMTP smtp.163.com   465   25
# IMAP imap.163.com   993   143
# POP3 pop.163.com    995   110
# -------------------------------
# SMTP smtp.qq.com    465/587
# IMAP imap.qq.com    993
# POP3 pop.qq.com     995
# -------------------------------
# SMTP smtp.gmail.com 465(SSL)/587(TLS/STARTTLS)
# IMAP imap.gmail.com 993
# POP3 pop.gmail.com  995
# -------------------------------
# 163/qq: password 为授权码
# gmail: password 为邮箱密码