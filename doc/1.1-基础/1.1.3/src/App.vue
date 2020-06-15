<template>
  <div id="app">
    <div id="nav">
      <h1>首页</h1>
      <button @click="goHome">跳转home</button>
      <button @click="goAbout">跳转about</button>
      <h3>{{$route}}</h3>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  methods: {
    //和a标签不同的是，连续点击两次，会报错
    //Error: Avoided redundant navigation to current location: "/home".
    goHome(){
      this.$router.push('home');
    },
    goAbout(){
      this.$router.push('about');
    }
  }

}
</script>