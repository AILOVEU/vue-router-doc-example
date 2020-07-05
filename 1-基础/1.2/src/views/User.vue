<template>
  <div class="home">
    <h1>Hi {{$route.params.id}}</h1>
    <!-- children path在这显示 -->
    <router-view></router-view>
  </div>
</template>
