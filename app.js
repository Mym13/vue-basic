<<<<<<< HEAD
// 实例化vue对象
new Vue({
    // el：需要获取的(控制的)元素，一定是html中的根容器元素
    el: '#vue-app',
    // data：用于数据的存储
    data: {
        name: 'Shaun'
=======
new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
>>>>>>> 37d7c8803fd0f5cab57106d0a0049a388fd8c03e
    }
});
