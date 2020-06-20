<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/other">Other</router-link>
    </div>
    <p>----------</p>
    <transition :name="transName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      transName: "fade"
    };
  },
  watch: {
    $route(to) {
      //如果是跳转到about页，执行fade动画
      if (to.path === "/about") {
        this.transName = "fade";
      } else {
        this.transName = "slide";
      }
      console.log( this.transName);
    }
  }
};
</script>


<style>
/* 参考vue中的过渡动画 */
/* .fade-leave-active {
  transition: opacity 0.5s;
} */
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>