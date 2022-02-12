const readLine = require('readline');
const shell = require('shelljs');
let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
let step = 1
const totalStep = 2
const {exec, execSync} = require('child_process');
let cmdStr = 'npm config get proxy';
console.log('开始执行npm命令...');
const npmProxyResult = execSync(cmdStr);
console.log('获取当前npm代理配置：' + npmProxyResult)
if (npmProxyResult) {
    console.log('删除当前npm代理配置')
    cmdStr = 'npm config delete proxy && npm config delete https-proxy'
    execSync(cmdStr)
}
console.log('准备输入新的npm代理配置------------')
const defaultProxy = 'http://127.0.0.1:1081'
setPromptMsg()
rl.on('line', function (line) {
    if (step <= totalStep) {
        console.log(line)
        switch (step) {
            case 1:
                setNpmProxy(line)
                break
            case 2:
                setGitProxy(line)
                break
        }

    } else {
        rl.close()
    }
})

function setNpmProxy(line) {
    if (!line) {
        console.log('输入为空，将为您设置默认代理地址')
        line = defaultProxy
    }
    cmdStr = 'npm config set proxy=' + line
    execSync(cmdStr)
    console.log(`npm代理设置成功，地址为：【${line}】`)
    installNrm()
}

function setGitProxy(line) {
    if (!line) {
        console.log('输入为空，将为您设置默认代理地址')
        line = defaultProxy
    }
    cmdStr = `git config --global http.proxy ${line}`
    shell.exec(cmdStr).stdout
    cmdStr = 'git config --global --get http.proxy'
    let gitProxyResult = shell.exec(cmdStr).stdout
    shell.echo(`git http 代理设置成功,当前的代理地址为【${gitProxyResult}】`)
    step = step + 1
    setPromptMsg()
}

function installNrm() {
    rl.pause()
    console.info('正在全局安装 nrm 管理 registry 地址，并设置淘宝registry')
    cmdStr = 'npm install -g nrm && nrm add npm http://registry.npmjs.org && nrm add taobao https://registry.npm.taobao.org'
    execSync(cmdStr)
    console.info('nrm安装成功，请使用\n nrm use taobao \n nrm use npm \n 切换registry')
    setGit()
}


function setGit() {
    if (!shell.which('git')) {
        shell.echo('找不到git命令');
        shell.exit(1);
    } else {
        let cmdStr = ''
        shell.echo('删除 git http代理配置------------')
        cmdStr = 'git config --global --unset http.proxy'
        shell.exec(cmdStr).stdout
        step = step + 1
        setPromptMsg()
    }
}

function setPromptMsg() {
    let msg = '>请输入:'
    switch (step) {
        case 1:
            msg = '> step1[请输入npm的http代理地址(默认代理为：http://127.0.0.1:1081)]：'
            break
        case 2:
            msg = '> step2[请输入git的http代理地址(默认代理为：http://127.0.0.1:1081)]：'
            break
    }
    if (step > totalStep) {
        msg = '请按Enter键结束程序~~~~~~~'
    }
    rl.setPrompt(msg)
    rl.prompt()
}