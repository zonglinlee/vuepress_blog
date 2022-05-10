// 若依管理系统
import axios from 'axios'
import {Message} from 'element-ui'
import {saveAs} from 'file-saver'
import {getToken} from '@/utils/auth'

const baseURL = process.env.VUE_APP_BASE_API
const errorCode = {
    '401': '认证失败，无法访问系统资源',
    '403': '当前操作没有权限',
    '404': '访问资源不存在',
    'default': '系统未知错误，请反馈给管理员'
}

// 验证是否为blob格式
async function blobValidate(data) {
    try {
        const text = await data.text();
        JSON.parse(text);
        return false;
    } catch (error) {
        return true;
    }
}

export default {
    name(name, isDelete = true) {
        var url = baseURL + "/common/download?fileName=" + encodeURI(name) + "&delete=" + isDelete
        axios({
            method: 'get',
            url: url,
            responseType: 'blob',
            headers: {'Authorization': 'Bearer ' + getToken()}
        }).then(async (res) => {
            const isLogin = await blobValidate(res.data);
            if (isLogin) {
                const blob = new Blob([res.data])
                this.saveAs(blob, decodeURI(res.headers['download-filename']))
            } else {
                this.printErrMsg(res.data);
            }
        })
    },
    resource(resource) {
        var url = baseURL + "/common/download/resource?resource=" + encodeURI(resource);
        axios({
            method: 'get',
            url: url,
            responseType: 'blob',
            headers: {'Authorization': 'Bearer ' + getToken()}
        }).then(async (res) => {
            const isLogin = await blobValidate(res.data);
            if (isLogin) {
                const blob = new Blob([res.data])
                this.saveAs(blob, decodeURI(res.headers['download-filename']))
            } else {
                this.printErrMsg(res.data);
            }
        })
    },
    zip(url, name) {
        var url = baseURL + url
        axios({
            method: 'get',
            url: url,
            responseType: 'blob',
            headers: {'Authorization': 'Bearer ' + getToken()}
        }).then(async (res) => {
            const isLogin = await blobValidate(res.data);
            if (isLogin) {
                const blob = new Blob([res.data], {type: 'application/zip'})
                this.saveAs(blob, name)
            } else {
                this.printErrMsg(res.data);
            }
        })
    },
    saveAs(text, name, opts) {
        saveAs(text, name, opts);
    },
    async printErrMsg(data) {
        const resText = await data.text();
        const rspObj = JSON.parse(resText);
        const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
        Message.error(errMsg);
    },

    exportFile(url, data) {
        const ParamsData = data ? JSON.parse(JSON.stringify(data)) : {}
        let formEle = document.createElement('form')
        formEle.setAttribute('method', 'post')
        formEle.setAttribute('id', 'importFileHidden')
        formEle.setAttribute('target', '_blank')
        ParamsData['token'] = getToken()
        ParamsData['Authorization'] = 'Bearer ' + getToken()
        if (ParamsData) {
            for (const key in ParamsData) {
                let inputEle = document.createElement('input')
                inputEle.setAttribute('name', key)
                inputEle.setAttribute('type', 'hidden')
                inputEle.setAttribute('value', ParamsData[key])
                formEle.appendChild(inputEle)
            }
        }
        formEle.setAttribute('action', process.env.VUE_APP_BASE_API + url)
        document.body.appendChild(formEle)
        formEle.submit()
        document.body.querySelector('#importFileHidden').remove()
    }
}

