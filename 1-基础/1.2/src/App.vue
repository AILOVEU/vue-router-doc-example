<template>
  <div id="app">
    <div id="nav">
      <router-link to="/user/jike">/user/jike</router-link>
      <br />
      <router-link to="/user/sara">/user/sara</router-link>
      <br />
      <router-link to="/user/jike/about">/user/jike/about</router-link>
      <br />
      <router-link to="/user/jike/home">/user/jike/home</router-link>
      <br />
      <router-link to="/user/sara/about">/user/sara/about</router-link>
      <br />
      <router-link to="/user/sara/home">/user/sara/home</router-link>
      <br />
    </div>
    <p>----------</p>
    <!-- 这里显示的是直接的path -->
    <router-view></router-view>
  </div>
</template>
<style>
a {
  display: inline-block;
  line-height: 30px;
}
</style>