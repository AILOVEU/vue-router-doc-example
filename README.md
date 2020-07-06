# vue-router-doc-example
vue-router非官网文档示例

本项目基于@vue/cli 4.4.4。
``` bash
#Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先卸载它。
npm uninstall vue-cli -g

#全局安装
npm install -g @vue/cli@4.4.4

#查看版本
vue  --version
```
### 项目的使用方式
- 和vue-js教程不一样，你需要在每个小节目录里，比如进入1.1后，执行npm install执行依赖包的安装，然后使用npm run serve来启动一个项目，更多的细节，可以查看项目中的md文件。

## 如何运行

### 安装环境

``` bash
cd 1.1
npm install
```

### 运行

``` bash
npm run serve

### 在浏览器中打开网页

```

## 项目结构

使用vue create命令生成文件，会发现还有public(项目公共资源)、.gitignore（项目自己的gitignore）、README.md（项目自己的readme）、src/assets（资源目录）、src/components（放置页面的子组件）

```
│  babel.config.js  //babel配置文件（暂时不用管它）
│  package-lock.json  //npm包管理文件（暂时不用管它）
│  package.json //npm包管理文件（暂时不用管它）
│
├─dist  //编译后文件，用于上线
│
└─src //代码写在这里
    │  App.vue  //首页
    │  main.js  //项目入口文件
    │
    ├─router  //用来存放路由规则（1.1为了结构尽量简单删掉了）
    │      index.js
    │
    └─views   //视图页面，可以理解为一个一个页面
            About.vue
            Home.vue
```

## Vue单文件
一个vue单文件的格式如下

``` vue
<!-- 模板部分 -->
<template>
  <div id="app">
  </div>
</template>
<!-- js部分 -->
<script>
export default {
  data: function() {}
};
</script>
<!-- 样式部分 -->
<style>

</style>
```

你甚至可以只写一个vue文件，然后使用vue提供的服务，就可以启动一个服务，当然这个不在本分套路范围内。


### 学习路线
- [vue](https://github.com/AILOVEU/vue-doc-example)
- [vue-cli](https://github.com/AILOVEU/vue-cli-doc-example)（计划中）
- [vue-router](https://github.com/AILOVEU/vue-router-doc-example)
- [vuex](https://github.com/AILOVEU/vuex-doc-example) （暂时未公开）
- [vue-ssr](https://github.com/AILOVEU/vue-ssr-doc-example)（计划中）

md文件会尽快补上
<!--
如果觉得该项目还不错，请喝杯奶茶吧

 ![](http://cdn.ailoveu.top/img/20200627223308.jpg)
![](http://cdn.ailoveu.top/img/20200627223307.jpg) -->
