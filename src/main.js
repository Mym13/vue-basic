// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 全局注册组件1. 2.
// 1.引入组件
// import Users from './components/Users'

Vue.config.productionTip = false

// 2.全局注册组件，任何页面也可调用
//            这里是调用的标签名 <users></users>
// Vue.component("users", Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
