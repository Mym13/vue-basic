// vue组件

//             这里是组件名，调用时使用标签形式调用<greeting></greeting>
Vue.component('greeting', {
    // template中有且仅有一个根标签
    template: 
        `<div>
            <p>组件应用 {{name}}</p>
            <button @click="changeName()">改变属性值</button>
        </div>`,
    // data写成函数的形式，是因为，组件可能被多处调用，
    // 写成data的形式可能会造成数据共享而影响所有该组件的调用
    // 而写成函数则每一个调用都有自己的数据
    // data: function() 等价于 data()
    // 组件中均写为函数形式
    data: function () {
        return {
            name: "属性1"
        }
    },
    methods: {
        changeName: function() {
            this.name = "属性2";
        }
    }
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
