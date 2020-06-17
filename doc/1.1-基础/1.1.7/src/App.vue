<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/user/123">User</router-link>|
      <router-link to="/helper/123">helper</router-link>
    </div>
    <p>route.params {{$route.params}}</p>
    <p>----------</p>
    <router-view />
    <router-view name="qa" />
  </div>
</template>
