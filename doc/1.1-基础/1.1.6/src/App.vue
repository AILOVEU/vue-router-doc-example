<template>
  <div id="app">
    <div id="nav">
      <router-link to="/a">跳转到a(重定向到b)</router-link>
      <br />
      <router-link to="/b">跳转到b</router-link>
      <br />
      <router-link to="/c">跳转到b(别名c)</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
a {
  display: inline-block;
  line-height: 30px;
}
</style>