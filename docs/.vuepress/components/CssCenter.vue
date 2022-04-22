<template>
  <div>
    <title-divider title="绝对定位实现垂直居中一" />
    <div class="relative w-full h-36 border border-solid rounded border-grey-500 ">
      <div class=" h-16 w-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-center rounded">child</div>
    </div>

    <title-divider title="绝对定位实现垂直居中二，该方法适用于盒子有宽高的情况" />

    <div class="relative w-full h-36 border border-solid rounded border-grey-500 ">
      <div class=" h-16 w-16 absolute inset-0 m-auto bg-red-500 text-white text-center rounded">child</div>
    </div>

    <title-divider title="绝对定位实现垂直居中三，该方法适用于盒子宽高已知的情况" />
    <div class="relative mx-auto w-full h-36 border border-solid rounded border-grey-500">
      <div class=" absolute top-1/2 left-1/2 bg-red-500 text-white text-center rounded" style="height: 64px;width: 64px;margin-top: -32px;margin-left: -32px">child</div>
    </div>

    <title-divider title="flex实现垂直居中" />
    <div class="flex justify-center items-center mx-auto w-full h-36 border border-solid rounded border-grey-500">
      <div class=" w-16 h-16 bg-red-500 text-white text-center rounded" >child</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CssCenter",
}
</script>

<style scoped lang="scss">

</style>
