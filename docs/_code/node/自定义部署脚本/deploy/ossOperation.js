let {client} = require('./oss')

// 列举bucket
function listBuckets() {
    try {
        return client.listBuckets();
    } catch (err) {
        console.log(err);
    }
}

// 上传文件
function put(fileName, path) {
    try {
        return client.put(fileName, path);
    } catch (err) {
        console.log(err);
    }
}

// 批量删除文件
// 删除指定前缀的文件。
async function deletePrefix(prefix) {
    const list = await client.list({
        prefix: prefix,
    });

    list.objects = list.objects || [];
    console.log(list)
    return Promise.all(list.objects.map((v) => handleDel(v.name)));
}

function deleteMulti (lists) {
        // 填写需要删除的多个Object完整路径并设置返回模式为简单模式。Object完整路径中不能包含Bucket名称。
        return client.deleteMulti(lists, {quiet: true});
}

// 创建存储空间。
function putBucket(bucketName, userDefinedOptions = {}) {
    try {
        const options = {
            storageClass: 'Standard', // 存储空间的默认存储类型为标准存储，即Standard。如果需要设置存储空间的存储类型为归档存储，请替换为Archive。
            acl: 'public-read', // 存储空间的默认读写权限为私有，即private。如果需要设置存储空间的读写权限为公共读，请替换为public-read。
            dataRedundancyType: 'LRS' // 存储空间的默认数据容灾类型为本地冗余存储，即LRS。如果需要设置数据容灾类型为同城冗余存储，请替换为ZRS。
        }
        let mergeOptions = Object.assign({}, options, userDefinedOptions)
        // 填写Bucket名称。
        return client.putBucket(bucketName, mergeOptions);
    } catch (err) {
        console.log(err);
    }
}

// 删除存储bucket
function deleteBucket(bucketName) {
    try {
        return client.deleteBucket(bucketName);
    } catch (err) {
        console.log(err);
    }
}

function listOssFiles(maxNum = 1000) {
    return client.list({
        // 设置按字母排序最多返回前10000个文件。
        "max-keys": maxNum
    });
}

module.exports = {
    put, listBuckets, deletePrefix, putBucket, deleteBucket, listOssFiles,deleteMulti
}
