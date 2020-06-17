<template>
  <div class="about">
    <h1>This is an User page</h1>
    <h1 v-if="id">Hi {{id}}</h1>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>