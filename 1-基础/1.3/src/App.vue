<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <h1>首页</h1>
      </router-link>
      <h3>按钮事件</h3>
      <button @click="goHome">跳转home</button><br/>
      <button @click="goAbout">replace跳转about</button><br/>
      <button @click="goUser">跳转User/:id</button><br/>
      <button @click="goBack">&lt;后退</button><button @click="goOn">前进&gt;</button>
      <br />
      <h3>{{$route}}</h3>

      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/user/123">User</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    //和a标签不同的是，连续点击两次，会报错
    //Error: Avoided redundant navigation to current location: "/home".
    goHome() {
      this.$router.push("home");
    },
    goAbout() {
      this.$router.replace("about");
    },
    goUser() {
      const userId = `user${Math.floor(Math.random() * 10 + 1)}`;
      // console.log(userId);
      // this.$router.push({
      //   path: `/user/${userId}`
      // });
      // ？下面这个不会生效，不清楚为什么
      this.$router.push({
        //需要在router.js中配置router的name为user
        name: "user",
        params: {
          id:  userId
        }
      });
    },
    goBack(){
      this.$router.go(-1);
    },
    goOn(){
      this.$router.go(1);

    }
  }
};
</script>