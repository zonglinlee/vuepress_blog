# 阿里云 RAM policy 简介
- 登录主账号之后进入OSS管理控制台，创建子账号，即RAM账号(子账号可以单独登录阿里云控制台)
 - 对子账号进行bucket级别的授权，选中bucket后可以进行授权
 - 对子账号进行 `AliyunSTSAssumeRoleAccess`授权，子账号可以通过sdk调用返回一个临时账户STS，此sts账号扮演一个RAM角色(ram角色在后台定义)
 - 可以建立
- STS临时账号的权限控制
 - STS账号继承了RAM角色的所有权限
 - STS账号继承了STS server中policy的权限，即此文件夹中txt文件的配置
 - STS账号的最终权限是以上两个的交集
 - 两个权限配置格式都必须正确，如果有误，就会报错。

>RAM策略编辑器中，每条规则需要设置其Effect、Actions、Resources和Conditions：
>
>Effect
>指定这条规则是允许访问（Allow）还是禁止访问（Deny）。
>
>Actions
>指定访问资源的动作，可以选择多项。一般来说用户使用提供的通配动作就足够了：
>
>oss:*表示允许所有动作。
>oss:Get*表示允许所有的读动作。
>oss:Put*表示允许所有的写动作。
>更多信息请参见RAM Policy Editor README。

>Resources
指定授权访问的OSS的资源，可以指定多个，每个是以下形式：

表示某个bucket：my-bucket （此时对bucket下的文件没有权限）
表示某个bucket下面所有文件：my-bucket/* （此时对bucket本身没有权限，例如ListObjects）
表示某个bucket下某个目录：my-bucket/dir （此时对dir/下面的文件没有权限）
表示某个bucket下某个目录下面所有文件：my-bucket/dir/* （此时对dir没有权限，例如ListObjects）
填写完整的资源路径：acs:oss:*:1234:my-bucket/dir，其中1234为用户的User ID（在控制台查看）
EnablePath

当用户需要对某个目录授权时，往往还需要保证对上一层目录也有List权限，例如用户对my-bucket/users/dir/*赋予读写权限，为了在控制台（或其他工具）能够查看这个目录，用户还需要以下权限：
ListObjects my-bucket
ListObjects my-bucket/users
ListObjects my-bucket/users/dir
勾选EnablePath选项时，上面这些权限会自动添加。

Conditions
>指定授权访问时应该满足的条件，可以指定多个 


## 参考链接
- (基于RAM Policy配置示例)[https://help.aliyun.com/document_detail/100680.html?spm=a2c4g.11186623.2.22.30393b49HJqw92#section-an0-sb1-5sh]
- (RAM policy 编辑器)[http://gosspublic.alicdn.com/ram-policy-editor/index.html?spm=a2c4g.11186623.2.7.5b613eb10WlQDS]
- (STS临时授权访问OSS)[https://help.aliyun.com/document_detail/100624.html?spm=a2c4g.11186623.6.698.4cb965feK77yvS]
- (RAM策略编辑器)[https://help.aliyun.com/document_detail/32203.html?spm=a2c4g.11186623.4.5.4f0365fesi5QpA]