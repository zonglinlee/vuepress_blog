---
title: ipv4 forwarding
---

# IPv4 流量转发：A机器请求转发到B机器，B代理上网
## 架构
**A机器**：内网客户端，所有流量走B机器
**B机器**：中转网关，开启IP转发+SNAT，代A上网
全流程纯IPv4，Linux环境通用

---

## 一、B机器配置（中转服务器）
### 1. 开启内核IPv4转发
```bash
# 临时生效
echo 1 > /proc/sys/net/ipv4/ip_forward

# 永久生效
sed -i 's/^net.ipv4.ip_forward=0/net.ipv4.ip_forward=1/' /etc/sysctl.conf
sysctl -p
```

### 2. 配置iptables SNAT 流量转发
假设：
- B机器**外网网卡**：`eth0`
- B机器**内网网卡/对接A网段**：`eth1`
- A机器网段：`192.168.1.0/24`

```bash
# 清空旧转发规则
iptables -F
iptables -t nat -F

# 所有从内网 192.168.1.0/24 过来、从外网网卡 eth0 发出去的流量，统一伪装成 B 机器外网 IP 上网。
iptables -t nat -A POSTROUTING -o eth0 -s 192.168.1.0/24 -j MASQUERADE

# 放行转发流量
#允许内网 A 机器发来的流量，经过 B 机器转发出去。
iptables -A FORWARD -s 192.168.1.0/24 -j ACCEPT

#允许外网返回的响应流量，转发回内网 A 机器。
iptables -A FORWARD -d 192.168.1.0/24 -j ACCEPT
```

### 3. 保存iptables规则（防止重启失效）
```bash
# CentOS
yum install -y iptables-services
service iptables save

# Debian/Ubuntu
iptables-save > /etc/iptables/rules.v4
```

---

## 二、A机器配置（客户端全部流量走B）
### 1. 设置默认网关为B机器内网IP
```bash
# 示例：B机器内网IP=192.168.1.100
route add default gw 192.168.1.100

# 永久配置（改网卡配置）
# /etc/sysconfig/network-scripts/ifcfg-xxx
GATEWAY=192.168.1.100
DNS1=223.5.5.5
```

### 2. 仅转发指定端口（精准转发，非全量流量）
若**不全局代理**，只把A特定端口请求转发到B再出站：
#### A机器：端口转发到B
```bash
# A本地8080端口 转发到 B机器 8080
iptables -t nat -A OUTPUT -p tcp --dport 8080 -j DNAT --to-destination 192.168.1.100:8080
```

#### B机器：接收后转发外网
```bash
iptables -t nat -A PREROUTING -p tcp --dport 8080 -j REDIRECT --to-ports 80
```

---

## 三、Windows A机器 配置（非Linux客户端）
1. 网卡IPv4属性
2. **默认网关**填写：B机器内网IP
3. DNS服务器填写公共DNS
4. 确定后，所有网络请求自动走B中转上网

---

## 四、验证连通性
A机器执行：
```bash
traceroute 223.5.5.5
curl cip.cc
```
看到出口IP为**B机器公网IP**即转发成功

---

## 五、关闭转发
### B机器
```bash
echo 0 > /proc/sys/net/ipv4/ip_forward
iptables -t nat -D POSTROUTING -o eth0 -s 192.168.1.0/24 -j MASQUERADE
```
