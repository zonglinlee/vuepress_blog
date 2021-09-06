const fs = require('fs')
const path = require('path')
const {exec,execSync} = require('child_process');
const {BUCKET_NAME} = require('./deploy/oss')
const {put, listBuckets,deletePrefix,putBucket,deleteBucket,listOssFiles,deleteMulti} = require('./deploy/ossOperation')
let {listFile,getNodeArgs,fileListMap,copyRecursiveSync,deleteFileRecursive} = require('./deploy/utils')

console.log('打包开始-------执行npm scripts');
const cmdStr = 'npm run build';
// const cmdStr = 'node --version';
// 打包
let buildProcess = exec(cmdStr)
buildProcess.stdout.on('data', (data) => {
    console.warn(new Date(),`===========${data}=============`);
    fs.appendFile('infoLog.txt', data, err => {
        if (err) {
            console.error(err)
        }
    })
    if(typeof data === 'string' && !data.includes('directory is ready to be deployed') && data.includes('Build complete')){
        uploadFileToOss(data)
    }
})
buildProcess.stderr.on('data', err => {
    fs.appendFile('errorLog.txt', err, err => {
        if (err) {
            console.error(err)
        }
    })
    console.warn(new Date(), `===========${err}=============`);
})

async function uploadFileToOss (data) {
    let argsMap = getNodeArgs()
    // 本地部署 node ./cicd.js target=local
    if (argsMap.target === 'local') {
        copyRecursiveSync(path.join(__dirname,'./dist/build/h5'),'D:\\Program Files\\nginx-1.18.0\\enrollment\\yey\\parent')
        deleteFileRecursive(path.join(__dirname,'./dist'))
    }
    // 线上部署 :: node ./cicd.js target=remote
    if (argsMap.target === 'remote') {
        // 列出当前bucket下的文件
        let ossFileLists = await listOssFiles()
        let ossFileListsName = []
        if(ossFileLists.objects){
            ossFileListsName = ossFileLists.objects.reduce((acc,ele)=>{
                acc.push(ele.name)
                return acc
            },[])
        }
        console.log(`------------------------------开始删除 ${BUCKET_NAME} bucket 中的所有文件 ${ossFileListsName}--------------------------------------`)
        if(ossFileListsName.length > 0){
            await deleteMulti(ossFileListsName)
        }
        console.log(`------------------------------当前bucket中的文件删除完毕--------------------------------------`)
        // 删除bucket
        console.log(`------------------------------开始删除 ${BUCKET_NAME} bucket--------------------------------------`)
        await deleteBucket(BUCKET_NAME)
        console.log(`------------------------------删除 ${BUCKET_NAME} 成功--------------------------------------`)
        console.log(`------------------------------创建新的 ${BUCKET_NAME} bucket--------------------------------------`)
        await putBucket(BUCKET_NAME)
        console.log(`------------------------------创建新的 ${BUCKET_NAME} bucket成功--------------------------------------`)
        let relativeDir = "./dist/build/h5"
        const rootDir = path.join(__dirname, relativeDir)
        listFile(rootDir)
        let dirArr = Object.keys(fileListMap)
        let relativeDirSplit = relativeDir.split('/').pop()
        console.log(`------------------------------开始上传文件至 ${BUCKET_NAME} bucket--------------------------------------`)
        for(let dir of dirArr){
            fileListMap[dir].forEach((filePath)=>{
                let ossFilePath = filePath.split(relativeDirSplit)[1]
                let _arr = ossFilePath.split('\\')
                _arr.shift()
                let _osspath = _arr.join('/')
                put(_osspath,filePath)
            })
        }
    }
}





