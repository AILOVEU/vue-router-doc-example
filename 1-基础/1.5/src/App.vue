<template>
  <div id="app">
    <h1>Nested Named Views</h1>
    <router-link to="/settings">setting</router-link>
    <br />
    <!-- App.vue为/视图 -->
    <router-link to="/">/</router-link>
    <!-- 这个位置显示router-line跳转的路由内容 -->
    <p>----------</p>
    <router-view></router-view>
  </div>
</template>

<style scoped>
a {
  display: inline-block;
  line-height: 30px;
}
</style>>