<template>
  <div>
    <div v-if="loading">loading....</div>
    <div v-if="$route.params.name">当前登录的是{{$route.params.name}}，用户id为{{userId}}</div>
    <div v-else>
      <input v-model="username" placeholder="输入用户名" />
      <router-link :to="{ name: 'Login', params: { name: username }}">登录用户</router-link>
      <p>----------</p>
      <router-view />
    </div>
  </div>
</template>>

<script>
export default {
  data() {
    return {
      username: "",
      userId: null,
      error: null,
      loading: true
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    //只有从 => /login/:id 的时候才会调用
    if (from.path == "/login") {
      getUserId(to.params.name, (err, userId) => {
        next(vm => {
          vm.loading = false;
          vm.setData(err, userId);
        });
      });
    } else {
      next(vm => {
        vm.loading = false;
      });
    }
  },
  //本例子用不到，手动更改：name可以看到
  //当 /login/123 = > /login/456 的时候才会调用
  beforeRouteUpdate(to, from, next) {
    this.loading = true;

    this.userId = null;
    getUserId(to.params.name, (err, userId) => {
      this.loading = false;

      this.setData(err, userId);
      next();
    });
  },
  //只有/login => /login/:id 时起作用
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
        this.loading = true;
        next();
  },
  methods: {
    setData(err, userId) {
      if (err) {
        this.error = err.toString();
      } else {
        this.userId = userId;
      }
    }
  }
  //模拟返回数据，name用不用无所谓
};
function getUserId(name, callback) {
  setTimeout(() => {
    callback(null, Math.floor(Math.random() * 10000 + 1));
  }, 2000);
}
</script>