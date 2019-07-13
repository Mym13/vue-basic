// 1.html结构
<template>
  <!-- template下有且仅有一个根标签 -->
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>
  </div>
</template>

// 2.js处理逻辑
<script>
// 1).引入组件
// import HelloWorld from "./components/HelloWorld"
import Users from "./components/Users";

export default {
  name: "app",
  data() {
    return {
      title: "第一个vue-cli"
    };
  },
  // 2).引入组件后需在此注册组件
  components: {
    // HelloWorld
    // 3).注册时，:前给定引用组件时的标签名，:后给定引入的组件名
    // :前的标签名可省略，默认首字母小写
    users: Users
  }
};
</script>

// 3.css样式
// scoped表示下面的css样式只作用于当前这个组件
<style scoped>
  h1 {
    color: green
  }
</style>
