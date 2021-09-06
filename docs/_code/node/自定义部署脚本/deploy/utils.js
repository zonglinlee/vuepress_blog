let fs = require('fs')
let path = require('path')

let fileListMap = {}

function listFile(dir) {
    fileListMap[`${dir}`] = []
    var arr = fs.readdirSync(dir);
    arr.forEach(function (item) {
        var fullpath = path.join(dir, item);
        var stats = fs.statSync(fullpath);
        if (stats.isDirectory()) {
            listFile(fullpath);
        } else {
            let _arr = fullpath.split("\\")
            _arr.pop()
            let filePrefix = _arr.join("\\")
            // console.log('fileListMap:::::',fileListMap)
            // console.log("fileprefix::::",filePrefix)
            // console.log("fullpath::::",fullpath)
            if (fullpath.startsWith(filePrefix)) {
                fileListMap[`${filePrefix}`].push(fullpath)
            }
        }
    });
}


/**
 * Look ma, it's cp -R. 递归复制文件
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
function copyRecursiveSync(src, dest) {
    console.log(src)
    console.log(dest)
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if(!fs.existsSync(dest)){
            fs.mkdirSync(dest)
        }
        fs.readdirSync(src).forEach(function(childItemName) {
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

// 递归删除文件
function deleteFileRecursive(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) {
                deleteFileRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

// 获取 node运行时候传入的参数
// 第一个参数是 node 命令的完整路径。
// 第二个参数是正被执行的文件的完整路径。
// 所有其他的参数从第三个位置开始
function getNodeArgs() {
    const args = process.argv.slice(2)
    let argsMap = {target: 'local'}
    args.forEach((val, index) => {
        let arr = val.split('=')
        argsMap[`${arr[0]}`] = arr[1]
    })
    return argsMap
}


module.exports = {
    listFile,
    fileListMap,
    getNodeArgs,
    copyRecursiveSync,
    deleteFileRecursive
}
