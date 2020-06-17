<template>
  <div>
    <!-- 首先，这是settings页 -->
    <h2>User Settings</h2>
    
    <div>
      <router-link to="/settings/emails">C</router-link>
      <br />
      <router-link to="/settings/profile">A&B</router-link>
    </div>
    <p>----------</p>
    <!-- default -->
    <router-view/>
    <router-view name="helper"/>
  </div>
</template>
