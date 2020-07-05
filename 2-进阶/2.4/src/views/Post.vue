<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  //导航完成后获取数据
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      // replace getPost with your data fetching util / API wrapper
      this.getPost(this.$route.params.id, (err, post) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          console.log(post);
          this.post = post;
        }
      });
    },
    //模拟返回数据
    getPost(id, callback) {
      var postObj = [
        {
          id: 1,
          post: {
            title: "吃饭",
            body: "饭好吃xxxxxxxxxxxxxxxxx"
          }
        },
        {
          id: 2,
          post: {
            title: "睡觉",
            body: "睡不着xxxxxxxxxxxxxxxxx"
          }
        },
        {
          id: 3,
          post: {
            title: "追剧",
            body: "震惊睡不着的原因竟是它xxxxxxxxxxxxxxxxx"
          }
        }
      ];
      setTimeout(() => {
        callback(null, postObj.filter(x => x.id == id)[0].post);
      }, 2000);
    }
  }
};
</script>>