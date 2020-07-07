<template>
  <!-- 查询参数 -->
  <h1>当前route：{{$route.query}}</h1>
</template>
<script>
export default {
  watch: {
    //在组件不变，query或params变的情况下，可以监测到$route的变化
    $route(to, from) {
      console.log(to);
      console.log(from);
      // 对路由变化作出响应...
    }
  }
};
</script>