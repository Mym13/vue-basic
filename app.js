new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            // event表示事件，可选择event的属性来操作，例如offsetX属性
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
