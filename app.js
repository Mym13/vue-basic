new Vue({
    // 注册了id为vue-app的容器，该vue实例仅作用于该容器，容器之外无效
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja'
    },
    methods: {
        // 在method中获取data的属性(name)，只需要name，相当于this.name
        // 注意this.data.name获取不到name
        greet: function (time) {
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
