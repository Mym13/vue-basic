new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        // 双向数据绑定：方式一 使用ref
        logName: function () {
            // 在input标签中加了ref属性，使用this.$refs.name获取input框
            // 再使用.value获取input的value属性的值
            this.name = this.$refs.name.value;
            console.log('you entered your name');
        },
        // 双向数据绑定：方式二 使用v-model
        logAge: function () {
            console.log('you entered your age');
        }
    }   
});
