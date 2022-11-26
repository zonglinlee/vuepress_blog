#!/usr/bin/env bash
mailStatus=""
# -O 重命名下载的文件为 clash.config.yaml
wget -O clash.config.yaml 'https://feiniaoyun.top/api/v1/client/subscribe?token=5d955159cf5d614bef86&flag=clash'
mv ./clash.config.yaml ./config.yaml
# -i 替换源文件
sed -i  's/127.0.0.1/0.0.0.0/' ./config.yaml
mv ./config.yaml /root/.config/clash/

# 发送邮件
if [[ $? -eq 0 ]];then
	  mailStatus="clash update successful at $(date)"
	else
	  mailStatus="clash update failed at $(date)"
fi


echo "$mailStatus" | mail -s "clash daily update" 17338705@qq.com


# 重启clash服务
systemctl restart clash


# 定时更新 clash 订阅, 每天 5 点钟定时更新clash
# 进入 root 用户的定时任务文件，编辑该文件
# vim  /var/spool/cron/crontabs/root
#  * 5 * * * /root/zonglinlee/updateClash.sh
