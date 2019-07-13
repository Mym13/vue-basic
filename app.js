// 多个vue实例化对象

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    computed: {
        greet: function () {
            return 'Hello, from app one :)';
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    computed: {
        greet: function () {
            return 'Yo dudes, this is app 2 speaking to ya';
        }
    },
    methods: {
        changeTitle: function () {
            // 调用另一个vue对象，形式如下
            one.title = 'Title Changed';
        }
    }
});

// 调用vue对象的属性
two.title = 'Changed from outside';
