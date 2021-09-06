<template>
  <div>
    <el-button type="primary" @click="startUpload" class="mg-bt"
      >点击上传</el-button
    >
    <el-upload
      class="upload-demo"
      action="#"
      :auto-upload="false"
      ref="myupload"
      :http-request="customUpload"
    >
      <el-button type="primary" class="mg-bt">添加文件</el-button>
    </el-upload>
  </div>
</template>   


<script>
/* eslint-disable */
import Vue from "vue";
import { Upload, Button, Message } from "element-ui";
import axios from "axios";
Vue.use(Upload);
Vue.use(Button);
let serverUrl = "http://192.168.0.22:8080/";
const callbackJson = {
  callbackUrl: "http://1f632a59ba92.ngrok.io/alioss/callback",
  callbackBody:
    "bucket=${bucket}&object=${object}&etag=${etag}&size=${size}&mimeType=${mimeType}",
  callbackBodyType: "application/x-www-form-urlencoded",
};
let callbackBase64Str = btoa(JSON.stringify(callbackJson));
export default {
  name: "up-load",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      result: {},
    };
  },
  methods: {
    async getSignatureAndUpload(param) {
      try {
        let result = await axios.get(serverUrl + "oss/upload");
        if (result.status === 200) {
          this.result = result.data;
          let formData = new FormData();
          formData.append("name", param.file.name);
          formData.append("key", result.data.dir + param.file.name);
          formData.append("OSSAccessKeyId", result.data.OSSAccessKeyId); //accessKeyId
          formData.append("policy", result.data.policy); //policy
          formData.append("Signature", result.data.signature); //签名
          formData.append("file", param.file);
          formData.append("success_action_status", 200); //成功后返回的操作码
          formData.append("callback", callbackBase64Str); // 不生效？？？？

          let res = await this.uploadOSS(formData, result.data.host);
          console.log("uploadOSS", res);
          if (res.status === 200) {
            Message.success("文件上传成功");
            this.$parent.$refs.download.getFileLists();
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    // node 服务
    async getUploadUrl(param) {
      try {
        let result = await axios.post(serverUrl + "oss/upload", {
          fileName: param.file.name,
        });
        console.log(result);
        if (result.status === 200) {
          let uploadUrl = result.data;
          let formData = new FormData();
          formData.append("name", param.file.name);
          formData.append("file", param.file);
          try {
            let res = await this.uploadOSS(formData, uploadUrl);
            console.log("uploadOSS", res);
          } catch (e) {
            console.log(e);
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    startUpload() {
      this.$refs.myupload.submit();
    },
    customUpload(param) {
      this.getSignatureAndUpload(param);
      // this.getUploadUrl(param);
    },
    async uploadOSS(formData, url) {
      const config = {
        headers: {
          "Content-Type":
            "multipart/form-data;boundary=" + new Date().getTime(),
          // "x-oss-callback": callbackBase64Str,
        },
      };
      return axios.post(url, formData, config);
    },
  },
};
</script>
<style>
.mg-bt {
  margin-bottom: 20px;
}
</style>