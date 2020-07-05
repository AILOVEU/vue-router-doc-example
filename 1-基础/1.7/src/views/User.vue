<template>
  <div>
    <h1>This is an User page</h1>
    <h1>Hi {{id}}</h1>
  </div>

</template>

<script>
export default {
  props: ['id']
}
</script>