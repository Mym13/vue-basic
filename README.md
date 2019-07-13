vue cli 脚手架

1.  脚手架是通过webpack搭建的开发环境

2.  使用ES6语法

3.  打包和压缩JS为一个文件

4.  项目文件在环境中编译，而不是浏览器

5.  实现页面自动刷新

脚手架的搭建

1.  先安装Nodejs (安装完成后，cmd测试node -v和npm -v)

2.  cmd执行下述命令
        全局安装vue-cli
            npm install --global vue-cli (需一定时间)
                测试成功：vue --version
        创建一个基于webpack模板的新项目
            vue init webpack my-project
                执行过程需配置项目信息
        安装依赖
            cd my-project
            npm install
            npm run dev
        
3.  脚手架工程的进入顺序：index.html -> main.js -> App.vue

# cli-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
