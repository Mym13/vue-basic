new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses: function () {
            // 注意返回的形式
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});
