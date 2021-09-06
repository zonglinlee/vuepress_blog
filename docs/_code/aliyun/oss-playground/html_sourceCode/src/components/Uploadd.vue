<template>
  <div class="container">
    <div class="multi-upload upload">
      <el-button type="primary" @click="startUpload" class="mg-bt"
        >点击上传</el-button
      >
      <el-button type="primary" @click="stopUpload" class="mg-bt"
        >停止上传</el-button
      >
      <p ref="progressBar" class="progress-bar">
        <span style="position: absolute; right: -35px">0%</span>
      </p>
      <el-upload
        :on-change="changeProgressBar"
        class="upload-demo"
        action="#"
        :auto-upload="false"
        ref="myupload"
        :http-request="multipartUpload"
      >
        <el-button type="primary" class="mg-bt">添加文件</el-button>
      </el-upload>
    </div>

    <div class="multi-upload upload">
      <el-form ref="form1" :model="form1" label-position="top">
        <el-form-item label="文件名">
          <el-input
            v-model="form1.downloadName"
            placeholder="请输文件名"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="downloadFile" class="mg-bt block-button"
        >下载文件</el-button
      >
    </div>
    <!-- 删除文件 -->
    <div class="multi-upload upload">
      <el-form ref="form2" :model="form2" label-position="top">
        <el-form-item label="文件名">
          <el-input
            v-model="form2.deleteName"
            placeholder="请输文件名"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="deleteFile" class="mg-bt block-button"
        >删除文件</el-button
      >
    </div>
    <!-- 上传base64图片 -->
    <div class="multi-upload upload">
      <el-form ref="form3" :model="form2" label-position="top">
        <el-form-item label="Base64字符串">
          <el-input
            type="textarea"
            :rows="8"
            v-model="form3.base64String"
            placeholder="请输Base64字符串"
          ></el-input>
        </el-form-item>
        <el-form-item label="文件名">
          <el-input
            v-model="form3.fileName"
            placeholder="请输图片名称"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        @click="uploadBase64Img"
        class="mg-bt block-button"
        >上传文件</el-button
      >
    </div>
    <!-- 上传内容 -->
    <div class="multi-upload upload">
      <el-form ref="form4" :model="form4" label-position="top">
        <el-form-item label="一段文字">
          <el-input
            type="textarea"
            :rows="8"
            v-model="form4.content"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="文件名">
          <el-input
            v-model="form4.fileName"
            placeholder="请输入文件名称"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        @click="uploadContent"
        class="mg-bt block-button"
        >上传文件</el-button
      >
    </div>
  </div>
</template>   


<script>
/* eslint-disable */
import Vue from "vue";
import { Upload, Button, Input, FormItem, Form, Message } from "element-ui";
import axios from "axios";
import OSS from "ali-oss";
import baseStr from "../api/base64";
Vue.use(Upload);
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
import { getSTSToken } from "../api/api";

const callbackJson = {
  url: "http://39d51d4ccaab.ngrok.io/alioss/callback",
  body:
    "bucket=${bucket}&object=${object}&etag=${etag}&size=${size}&mimeType=${mimeType}",
  contentType: "application/x-www-form-urlencoded",
};
// let callbackBase64Str = btoa(JSON.stringify(callbackJson));

export default {
  name: "up-load",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      result: {},
      client: "",
      retryCount: 0,
      retryCountMax: 3,
      currentCheckpoint: 0,
      fileList: [],
      form1: {
        downloadName: "",
      },
      form2: {
        deleteName: "",
      },
      form3: {
        base64String: baseStr,
        fileName: "",
      },

      form4: {
        content: "Hello ,i am lee",
        fileName: "",
      },
    };
  },
  async mounted() {
    let res = await getSTSToken();
    if (res.status === 200) {
      this.client = new OSS({
        region: res.data.region,
        accessKeyId: res.data.AccessKeyId,
        accessKeySecret: res.data.AccessKeySecret,
        stsToken: res.data.SecurityToken,
        bucket: res.data.bucket,
      });
    }
  },
  methods: {
    uploadBase64Img() {
      const base64Content = this.form3.base64String.trim();
      const key = this.form3.fileName.trim();
      if (base64Content.indexOf("data:image") === 0) {
        const imgfile = this.dataURLtoFile(base64Content, "img.png");
        this.client
          .multipartUpload(key, imgfile)
          .then((res) => {
            Message.success("文件上传成功");
            this.$parent.$refs.download.getFileLists();
            console.log("upload success: %j", res);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        Message.info("请填写正确的BASE64字符串");
      }
    },
    uploadContent(client) {
      const { Buffer } = OSS;
      const content = this.form4.content.trim();
      const key = this.form4.fileName.trim();
      return this.client.put(key, Buffer.from(content)).then((res) => {
        Message.success(`${this.form4.fileName}上传成功`);
        this.$parent.$refs.download.getFileLists();
      });
    },

    dataURLtoFile(dataurl, filename) {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime }); // if env support File, also can use this: return new File([u8arr], filename, { type: mime });
    },
    async downloadFile() {
      if (this.form1.deleteName === "") {
        Message.info("请输入文件名");
        return;
      }
      let url = await this.client.signatureUrl(this.form1.downloadName, {
        expires: 30, //[expires] {Number} after expires seconds, the url will become invalid, default is 1800
      });
      console.log(url);
      window.open(url, "_blank");
      return url;
    },

    async deleteFile() {
      if (this.form2.deleteName === "") {
        Message.info("请输入文件名");
        return;
      }
      try {
        let result = await this.client.delete(this.form2.deleteName);
        Message.success("文件删除成功");
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },

    startUpload() {
      this.$refs.myupload.submit();
    },
    stopUpload() {
      if (this.client) {
        this.client.cancel();
      }
    },
    async multipartUpload(param) {
      this.uploadFile(param);
    },
    // 带上传回调的，上传成功后oss服务器会向以下url中的服务器发送回调，然后回调服务器将结果返回给oss服务器，oss服务器再通知客户端上传的结果
    // url 需要外网可以访问
    async putObjectWithCallback(param) {
      let result = await this.client.put(param.file.name, param.file, {
        // 开启服务端回调
        // callback: callbackJson,
      });
      console.log(result);
    },
    async progress(p, checkpoint) {
      this.currentCheckpoint = checkpoint;
      const bar = this.$refs.progressBar;
      bar.style.width = `${Math.floor(p * 100)}%`;
      bar.innerHTML = `<span style="position:absolute;right:-35px;">${Math.floor(
        p * 100
      )}%</span>`;
    },
    async uploadFile(param) {
      try {
        const options = {
          progress: this.progress,
          partSize: 500 * 1024,
          meta: {
            year: 2017,
            people: "test",
          },
          timeout: 60000,
          // 开启服务端回调
          // callback: callbackJson,
        };
        if (this.currentCheckpoint) {
          options.checkpoint = this.currentCheckpoint;
        }
        let result = await this.client.multipartUpload(
          param.file.name,
          param.file,
          options
        );
        Message.success("文件上传成功~~");
        this.$parent.$refs.download.getFileLists();
        console.log(result);
      } catch (err) {
        console.log(err);
        if (this.client && this.client.isCancel()) {
          console.log("stop-upload!");
        } else {
          console.error(err);
          console.log(`err.name : ${err.name}`);
          console.log(`err.message : ${err.message}`);
          if (err.name.toLowerCase().indexOf("connectiontimeout") !== -1) {
            // timeout retry
            if (retryCount < retryCountMax) {
              retryCount++;
              console.error(`retryCount : ${retryCount}`);
              this.startUpload("");
            }
          }
        }
      }
    },
    changeProgressBar(file, fileList) {
      console.log("onchange-callback");
      this.$refs.myupload.uploadFiles = [file];
      this.$refs.progressBar.innerHTML = `<span style="position: absolute; right: -35px">0%</span>`;
      this.$refs.progressBar.style.width = "0px";
    },
  },
};
</script>
<style lang="scss" scoped>
.mg-bt {
  margin-bottom: 20px;
}
.container {
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 80%;
  flex-wrap: wrap;
  .upload {
    width: 45%;
    background: #c1e2e3;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
  }
}
.multi-upload {
  .progress-bar {
    width: 0%;
    height: 8px;
    background: #66b1ff;
    border-radius: 4px;
    text-align: right;
    color: orangered;
    position: relative;
  }
  .block-button.el-button {
    display: block;
  }
}
// .label-left ::v-deep .el-form-item__label{
//   text-align: left;
// }
</style>