<template>
    <div>
        <app-header></app-header>
        <!-- 绑定属性users值为users -->
        <users v-bind:users="users"></users>
        <app-footer></app-footer>
    </div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Users from './components/Users.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'users': Users
    },
    data () {
        return {
            users: [
                {name:"name1",position:"Web开发1",show:false},
                {name:"name2",position:"Web开发2",show:false},
                {name:"name3",position:"Web开发3",show:false},
                {name:"name4",position:"Web开发4",show:false},
                {name:"name5",position:"Web开发5",show:false},
                {name:"name6",position:"Web开发6",show:false},
            ]
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
