---
title: python starter
---

## [Getting Started with Python in VS Code ](https://code.visualstudio.com/docs/python/python-tutorial#_create-a-virtual-environment)

- vscode plugins： `Python` && `Python Debugger`

- `Ctrl+Shift+P`, start typing the `Python: Create Environment`
- `Ctrl+Shift+P`, start typing the `Python: Select Interpreter`


## [python 项目依赖文件导出](https://www.cnblogs.com/yoyo008/p/9923092.html)

```shell
#创建虚拟环境
python3 -m venv myenv
#激活虚拟环境
source myenv/bin/activate
#安装依赖
pip install -r requirements.txt --proxy=192.168.1.5:1081
#查看已安装的包
pip list
#导出依赖项
pip freeze > requirements.txt
```
