<template>
  <div class="content">
    <span v-bind:key="icon.name" v-for="icon in icons">
      <router-view name="icon" :icon="icon"/>
    </span>
    <router-view name="character"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: this.$store.state.icons
    }
  }
}
</script>

<style scoped>
.content {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  width: 70%;
  margin: 0 auto;
  position: relative;
}
.icon {
  margin-bottom: 3rem;
  width: 50%;
}
</style>
