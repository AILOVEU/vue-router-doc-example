<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/post">PostNav</router-link>|
      <router-link to="/login">Login</router-link>|
    </div>
    <p>----------</p>
    <router-view />
  </div>
</template>
