<template>
  <div class="users">
      <ul>
          <li v-for="item in users" :key="item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
        users: ["name1","name2","name3"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// scoped表示下面的css样式只作用于当前这个组件
<style scoped>
</style>
