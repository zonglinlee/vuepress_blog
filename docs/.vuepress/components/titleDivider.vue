<template>
  <div class=" border-l-8 bolder-solid rounded-l-lg border-indigo-500/100 my-2.5 p-2 bg-sky-500/75">
    <div class="text-white">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "titleDivider",
  props:{
    title:{
      type:String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
