<template>
  <div>
    <h1>下载文件示例</h1>
    <div>
      <ul class="file-list">
        <li v-for="item in fileList" :key="item.etag">
          <a @click.prevent.stop="generateSrc(item.name, $event)">{{
            item.name
          }}</a>
          <el-button
            type="primary"
            size="small"
            class="delete-file"
            @click.stop="deleteFile(item.name)"
            >删除文件</el-button
          >
          <el-button
            type="primary"
            size="small"
            class="exist-file"
            @click.stop="fileExist(item.name)"
            >文件是否存在</el-button
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import {
  getFileLists,
  generateSrc,
  deleteFile,
  fileExist,
} from "../api/api.js";
import { Message } from "element-ui";
export default {
  name: "down-load",
  data() {
    return {
      fileList: [],
    };
  },
  mounted() {
    this.getFileLists();
  },
  methods: {
    async getFileLists() {
      let res = await getFileLists();
      if (res.status === 200) {
        this.fileList = res.data;
      }
    },
    downloadFile(url) {
      window.open(url, "_blank");
    },
    async deleteFile(name) {
      let res = await deleteFile({ fileName: name });
      console.log(res);
      Message.success("文件删除成功");
      this.getFileLists();
    },
    async fileExist(name) {
      let res = await fileExist({ fileName: name });
      if (res.data.statusCode === 200) {
        Message.success({ message: "文件存在" });
      }
      if (res.statusCode === 404) {
        Message.error({ message: "文件不存在" });
      }
    },
    async generateSrc(name, event) {
      console.log(arguments);
      console.log(event.target);
      let res = await generateSrc({ fileName: name });
      let url = res.data;
      this.downloadFile(url);
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.file-list {
  margin: 10px auto;
  list-style: none;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    a {
      width: 65%;
      @include text-ellipsis;
      text-align: left;
    }
    & a:hover {
      text-decoration: underline;
      color: blue;
    }
  }
}
</style>