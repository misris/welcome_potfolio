<template>
  <div id="main">
    <router-view name="title"/>
    <router-view name="content"/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
