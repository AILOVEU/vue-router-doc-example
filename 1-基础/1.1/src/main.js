import Vue from "vue";
import VueRouter from "vue-router";
// 引入单文件
import App from "./App.vue";
// 引入路由模板
import Foo from "./views/foo";
import Post from "./views/post";
import User from "./views/user";
import Watch from "./views/watch";
import Index from "./views/index";
// 1.Vue安装路由功能
// 如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter);


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// 4.实例化一个vue对象
  new Vue({
    router: new VueRouter({
      routes: [
        //定义一个简单路由
        {
          path: '/foo',
          component: Foo
        },
        // 定义一个动态路由(params)
        {
          path: '/user/:name',
          component: User
        },
        // 定义一个多段路径参数
        {
          path: '/post/:time/zh/:author',
          component: Post
        },
        //定义一个查询路由
        {
          path: '/watch',
          component: Watch
        },
        {
          path: '*',
          component: Index
        },

      ] // (缩写) 相当于 routes: routes
    }),
    render: h => h(App)
  }).$mount("#app");