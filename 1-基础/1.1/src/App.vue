<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <!-- 同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。 -->
      <router-link to="/foo">Go to Foo</router-link>
      <br />
      <router-link to="/user/jiekwang">Go to user</router-link>
      <br />
      <router-link to="/post/2020/zh/jikewang">Go to post</router-link>
      <br />
      <router-link to="/watch?u=1">Go to watch1</router-link>
      <br />
      <router-link to="/watch?u=2">Go to watch2</router-link>
      <br />
      <router-link to="/notfound">Go to 404</router-link>
      <br />
    </p>
    <p>----------</p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style>
  a{
    display:inline-block;
    height:30px;
  }
</style>
