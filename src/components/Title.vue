<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hi, it\'s me Takami ;)'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}
.title {
  /* border: 1px solid blue; */
  margin-bottom: 4rem;
}
</style>
