import axios from 'axios'

// 获取临时凭证 并上传文件至 Oss
async getSignatureAndUpload(param) {
  this.openLoading()
  try {
    const data = await getSTS() // 获取临时凭证
    const formData = new FormData()
    formData.append('name', param.file.name)
    formData.append('key', data.dir + param.file.name) // 路径
    formData.append('OSSAccessKeyId', data.accessid) // accessKeyId
    formData.append('policy', data.policy) // policy
    formData.append('Signature', data.signature) // 签名
    formData.append('file', param.file)
    formData.append('success_action_status', 200) // 成功后返回的操作码
    await this.uploadOSS(formData, data.host)

  } catch (e) {
    console.log(e)
  }
  this.loading.close()
},

async uploadOSS(formData, url) {
  const config = {
    headers: {
      'Content-Type':
        'multipart/form-data;boundary=' + new Date().getTime()
    }
  }
  return axios.post(url, formData, config)
},
