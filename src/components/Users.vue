<template>
  <div class="users">
      <ul>
          <li v-for="item in users" :key="item" @click="item.show=!item.show">
              <h2>{{item.name}}</h2>
              <!-- 只有当users的show字段为真时才显示position -->
              <h3 v-show="item.show">{{item.position}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  // 子组件接收父组件的传值，需要声明props属性
  props: {
        users: {
            // 传值的类型  
            type: Array,
            required: true,
        }
  },
  data () {
    return {
        // users: [
        //     {name:"name1",position:"Web开发1",show:false},
        //     {name:"name2",position:"Web开发2",show:false},
        //     {name:"name3",position:"Web开发3",show:false},
        //     {name:"name4",position:"Web开发4",show:false},
        //     {name:"name5",position:"Web开发5",show:false},
        //     {name:"name6",position:"Web开发6",show:false},
        // ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// scoped表示下面的css样式只作用于当前这个组件
<style scoped>
.users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
