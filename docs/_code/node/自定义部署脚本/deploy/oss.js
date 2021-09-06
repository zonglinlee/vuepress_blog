let OSS = require('ali-oss')
const BUCKET_NAME = 'bigsail169'
let client = new OSS({
    region: 'oss-cn-huhehaote',
    accessKeyId: '',
    accessKeySecret: '',
    bucket:BUCKET_NAME,
    timeout: 1000 * 60 * 10
});
module.exports = {
    client,BUCKET_NAME
}

