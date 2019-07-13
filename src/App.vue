// 1.html结构
<template>
  <!-- template下有且仅有一个根标签 -->
  <div id="app">
    {{title}}
  </div>
</template>

// 2.js处理逻辑
<script>
// 1.引入组件
// import HelloWorld from "./components/HelloWorld"

export default {
  name: 'app',
  data() {
    return {
      title: "第一个vue-cli"
    }
  },
  // 2.引入组件后需在此注册组件
  components: {
    // HelloWorld
  }
}
</script>

// 3.css样式
<style>
</style>
