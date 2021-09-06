<template>
  <div id="app">
    <h1>上传组件测试</h1>
    <ul class="upload-method">
      <li><router-link to="/upload1">后台签名上传</router-link></li>
      <li><router-link to="/upload2">临时凭证上传</router-link></li>
    </ul>
    <router-view> </router-view>
    <down-load ref="download" />
  </div>
</template>

<script>
import DownLoad from "./components/DownLoad.vue";
export default {
  name: "App",
  components: {
    DownLoad,
  },
};
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.upload-method {
  margin: 20px auto;
  list-style: none;
  display: flex;
  width: 300px;
  justify-content: space-between;
  a {
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
}
</style>
