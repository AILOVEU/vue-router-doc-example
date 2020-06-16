<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link>
    </div>
    <router-view />
  </div>
</template>