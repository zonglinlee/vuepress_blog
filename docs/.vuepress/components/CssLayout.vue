<template>
  <div>
    <div class="text-center mb-2">圣杯布局</div>
    <div class="outer">
      <!--    中间的元素在第一位-->
      <div class="center">div.center</div>
      <div class="left">div.left</div>
      <div class="right">div.right</div>
    </div>
    <div class="text-center mb-2">双飞翼布局</div>
    <div class="father text-white">
      <div class="center-wrap">
        <div class="center">div.center</div>
      </div>
      <div class="left">div.left</div>
      <div class="right">div.right</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTest"
}
</script>

<style scoped lang="scss">
.outer {
  height: 100px;
  padding-left: 100px;
  padding-right: 200px;
  text-align: center;
  color: white;
  font-size: 18px;
}

.left {
  float: left;
  /* margin-left: -100%;由于负外边距-100%计算值是宿主元素 div.outer 内容盒模型的宽度, 这会导致div.left从第二行移动到第一行 */
  margin-left: -100%;
  /* div.left向左移动100px,占据父元素 div.outer的padding-left空间 */
  position: relative;
  left: -100px;
  width: 100px;
  height: 100px;
  background: tomato;
}

.right {
  position: relative;
  left: 200px;
  float: right;
  margin-left: -200px;
  width: 200px;
  height: 100px;
  background: gold;
}

.center {
  float: left;
  width: 100%;
  height: 100px;
  background: lightgreen;
}

.father {
  .center {
    height: 200px;
    background: #68e0a5;
    margin-left: 200px;
    margin-right: 150px;

  }

  .center-wrap {
    width: 100%;
  }

  .center-wrap, .left, .right {
    float: left;

  }

  .left {
    background: yellow;
    height: 200px;
    width: 200px;
    margin-left: -100%;
  }

  .right {
    background: #ef4343;
    height: 200px;
    width: 150px;
    margin-left: -150px;
  }
}

</style>
