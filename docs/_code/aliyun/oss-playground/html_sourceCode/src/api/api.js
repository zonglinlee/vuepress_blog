import axios from './config'
import Qs from 'qs'
export  function getFileLists(){
    return axios.get('oss/list')
}
export  function generateSrc(name){
    let param = Qs.stringify(name)
    return axios.get(`oss/download?${param}`)
}
export  function deleteFile(name){
    let param = Qs.stringify(name)
    return axios.get(`oss/delete?${param}`)
}
export  function fileExist(name){
    let param = Qs.stringify(name)
    return axios.get(`oss/fileExist?${param}`)
}
export  function getSTSToken(){
    return axios.get(`sts`)
}