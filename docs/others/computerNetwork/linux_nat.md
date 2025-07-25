---
title: linux NAT 网络转发
---

### 一、配置架构说明

你有两台服务器：

- **服务器A**（NAT网关）：
    - 公网IP：可访问互联网（假设为203.0.113.10）
    - 内网IP：192.168.1.2
- **服务器B**（客户端）：
    - 内网IP：192.168.1.3
    - 需求：通过服务器A访问互联网

网络拓扑结构：

```
[服务器B(192.168.1.3)] <-- 内网 --> [服务器A(192.168.1.2/203.0.113.10)] <-- 公网 --> Internet
```

### 二、具体配置步骤

#### 1. 配置服务器A（NAT网关）

**1.1 启用IP转发**
让服务器A能够转发数据包：

```bash
# 临时启用（重启后失效）
echo 1 > /proc/sys/net/ipv4/ip_forward

# 永久启用（推荐）
sudo vim /etc/sysctl.conf
# 添加或修改这一行
net.ipv4.ip_forward = 1

# 使配置生效
sudo sysctl -p
```

**1.2 配置iptables NAT规则**
添加SNAT（源地址转换）规则，将来自服务器B的流量伪装成服务器A的公网IP：

```bash
# 对来自192.168.1.0/24网段的流量，在离开公网接口时进行源地址转换
sudo iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE

# 如果知道公网接口名称（如eth0），也可以明确指定
sudo iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j SNAT --to-source 203.0.113.10
```

**1.3 保存iptables规则**
为了让规则在重启后仍然生效，需要保存规则：

```bash
# 对于CentOS/RHEL系统
sudo service iptables save

# 对于Debian/Ubuntu系统
sudo apt-get install iptables-persistent
sudo netfilter-persistent save
```

#### 2. 配置服务器B（客户端）

**2.1 设置默认网关**
将服务器B的默认网关设置为服务器A的内网IP：

```bash
# 临时设置（重启后失效）
sudo route add default gw 192.168.1.2

# 永久设置（根据不同系统）
# 对于CentOS/RHEL系统
sudo vim /etc/sysconfig/network-scripts/ifcfg-eth0
# 添加或修改这一行
GATEWAY=192.168.1.2

# 对于Debian/Ubuntu系统
sudo vim /etc/network/interfaces
# 添加或修改这一行
gateway 192.168.1.2

# 重启网络服务
sudo systemctl restart network  # CentOS/RHEL
sudo systemctl restart networking  # Ubuntu/Debian
```

**2.2 配置DNS服务器**
设置DNS服务器，让服务器B能够解析域名：

```bash
# 编辑DNS配置文件
sudo vim /etc/resolv.conf

# 添加公共DNS服务器（如Google的DNS）
nameserver 8.8.8.8
nameserver 8.8.4.4
```

### 三、验证配置

**3.1 在服务器B上测试网络连接**

```bash
# 测试ping公网IP
ping 8.8.8.8

# 测试域名解析
ping www.baidu.com

# 测试访问网页
curl www.baidu.com
```

**3.2 在服务器A上查看NAT规则**

```bash
# 查看nat表的规则
sudo iptables -t nat -L -n -v
```

### 四、故障排查

1. **检查服务器A的IP转发是否启用**
   ```bash
   cat /proc/sys/net/ipv4/ip_forward
   # 输出应为1
   ```

2. **检查服务器A的防火墙是否允许转发**
   ```bash
   # 允许转发来自内网接口的流量
   sudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT
   # 允许转发已建立的连接
   sudo iptables -A FORWARD -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
   ```

3. **检查服务器B的网络配置**
   ```bash
   # 查看IP地址和网关
   ip addr show
   route -n

   # 确保网卡已激活
   sudo ip link set eth0 up
   ```

4. **检查服务器B的DNS配置**
   ```bash
   # 测试直接使用IP访问网站
   curl 14.215.177.39  # 百度的IP地址之一

   # 如果可以访问，但不能使用域名，则是DNS配置问题
   ```

### 五、高级配置选项

**5.1 指定特定端口转发**
如果你只需要转发特定端口的流量，可以使用更精确的规则：

```bash
# 只允许转发HTTP/HTTPS流量
sudo iptables -t nat -A POSTROUTING -s 192.168.1.3 -p tcp --dport 80 -o eth0 -j MASQUERADE
sudo iptables -t nat -A POSTROUTING -s 192.168.1.3 -p tcp --dport 443 -o eth0 -j MASQUERADE
```

**5.2 使用更安全的防火墙规则**
可以结合防火墙规则增强安全性：

```bash
# 允许服务器B访问特定IP段
sudo iptables -A FORWARD -s 192.168.1.3 -d 8.8.8.0/24 -j ACCEPT

# 拒绝服务器B访问特定端口
sudo iptables -A FORWARD -s 192.168.1.3 -p tcp --dport 22 -j REJECT
```

通过以上配置，服务器B就可以通过服务器A访问互联网了。这种配置在企业环境中非常常见，通常用于内部网络共享一个公网IP访问互联网。

## Q&AA

### 有公网IP地址的主机 肯定会有两块网卡吗?

有公网 IP 地址的主机不一定必须有两块网卡，单网卡也可以同时处理公网和内网通信（通过子接口或 VLAN 等技术），但多网卡（一块内网、一块外网）是更常见、更规范的部署方式。
在需要作为网关（如 `NAT` 服务器）让内网设备访问公网的场景中，通常会使用双网卡，原因是：

- 功能隔离：一块网卡（如eth0）连接公网并绑定公网 IP，负责与外部互联网通信；另一块网卡（如eth1）连接内网并绑定内网 IP（如192.168.1.2），负责与内网设备（如服务器 B）通信。
- 安全性：物理隔离公网和内网流量，减少直接暴露内网设备的风险，便于通过防火墙规则控制出入站流量。
- 网络管理：避免公网 / 内网 IP 冲突，简化路由和 NAT 配置（如之前示例中针对不同网卡的 iptables 规则）。

### 这里的 eth1 和 eth0 分别指的是那个机器?

eth0 和 eth1 是 服务器 A（NAT 网关） 上的两块网卡接口名称，分别对应不同的网络环境，并非指服务器 B 的网卡。eth0：通常代表服务器 A 连接 公网 的网卡接口（即与互联网直接相连的网络接口）.eth1：通常代表服务器 A 连接 内网 的网卡接口（即与服务器 B 所在局域网相连的网络接口）

实际环境中，网卡接口名称可能不是 eth0/eth1，而是更现代的命名方式（如 enp0s3、ens33 等），具体需通过 `ip addr` 或 `ifconfig` 命令查看服务器 A 的网卡名称。 服务器 B 的网卡接口名称不影响服务器 A 的 NAT 配置，只需确保服务器 B 的网关指向服务器 A 的内网 IP（192.168.1.2）即可。

> 简单来说：eth0 和 eth1 都是服务器 A 上的网卡，分别用于连接公网和内网，与服务器 B 无关。



### `route add default gw 192.168.1.2`，这条命令是什么意思， 网关到底起什么作用

`route add default gw 192.168.1.2` 是一条 Linux 系统的路由配置命令，用于设置**默认网关**。下面详细解释其含义和网关的作用：

#### 命令解析：`route add default gw 192.168.1.2`

- **`route add`**：添加一条路由规则。
- **`default`**：表示这是一条**默认路由**（即“不知道该往哪发的数据包，都走这条路由”）。
- **`gw 192.168.1.2`**：`gw` 是 `gateway`（网关）的缩写，指定网关的 IP 地址为 `192.168.1.2`。

**作用**：将 IP 地址为 `192.168.1.2` 的设备设置为当前主机的**默认出口**，当当前主机需要访问**非本地网络**（如互联网）的目标时，会将数据包发送给这个网关，由网关负责转发。

#### 网关的核心作用

网关（Gateway）是一个网络设备（如路由器、防火墙或服务器），其核心作用是：

1. **跨网络转发数据包**
    - 当主机A（如 `192.168.1.3`）需要访问主机B（如 `8.8.8.8`）时，若主机A发现目标IP（`8.8.8.8`）不在自己的本地网络（`192.168.1.0/24`）内，就会将数据包发送给**默认网关**
      （如 `192.168.1.2`）。
    - 网关收到数据包后，根据自身的路由表，将数据包转发到下一跳（如公网路由器），最终送达目标。

2. **网络协议转换**
    - 网关可以连接不同类型的网络（如局域网和广域网），处理它们之间的协议差异。例如，家庭路由器作为网关，将内网的以太网协议转换为外网的广域网协议（如PPPoE）。

3. **NAT（网络地址转换）**
    - 网关常作为 NAT 设备，将内网的私有 IP（如 `192.168.1.3`）转换为公网 IP（如 `203.0.113.10`），使多个内网设备共享同一个公网 IP 访问互联网（如之前的服务器A作为NAT网关）。

#### 常见问题

1. **网关不可达**
    - 若网关（如 `192.168.1.2`）本身无法访问（如网卡故障、防火墙拦截），则主机无法通过网关访问外部网络。
    - 解决：检查网关设备是否正常运行，尝试 `ping 192.168.1.2`。

2. **多条默认路由冲突**
    - 若同时配置了多个默认网关，可能导致路由混乱。
    - 解决：通过 `route del default gw <IP>` 删除不需要的默认路由。

3. **网关未开启IP转发**
    - 若网关设备（如服务器A）未开启 IP 转发（`net.ipv4.ip_forward=1`），即使数据包到达网关，也无法转发到公网。
    - 解决：在网关设备上执行 `echo 1 > /proc/sys/net/ipv4/ip_forward`。

> 总结:
> 默认网关是主机访问外部网络的“入口”，通过 `route add default gw` 命令设置后，主机才能将数据包正确发送到网关，进而访问互联网或其他网络。在企业网络、家庭网络中，路由器/防火墙通常就是默认网关设备。
