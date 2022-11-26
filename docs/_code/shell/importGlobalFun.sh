#!/usr/bin/env bash
# 导入全局工具函数
# 将/root/.local/include/* 下的所有脚本函数 追加到全局，然后可以在命令行直接可以调用
function my_sourceUtils() {
  sourceDir=$HOME/.local/include/*
  if [[ ! -d ${sourceDir%/*} ]]; then
    echo "${sourceDir%/*} 文件夹不存在"
    exit 1
  fi
  echo "$sourceDir"
  #  追加代码到 ~/.bashrc
  if ! grep "/.local/include/*" ~/.bashrc; then
    # https://tldp.org/LDP/abs/html/here-docs.html
    # EOF前面加 \ 阻止 Parameter substitution，否则 $HOME $myInclude 都会进行扩展
    cat >>~/.bashrc <<\EOF

# import global utils function
for myInclude in $HOME/.local/include/*; do
  dos2unix $myInclude
  source $myInclude
done
EOF
    source ~/.bashrc
  fi
}

my_sourceUtils
