<template>
  <div id="main">
    <router-view name="title"/>
    <router-view name="content"/>
    <router-view name="iconDetail"/>
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
a {
  text-decoration: none;
  color: blue;
}

.user {
  background: #B3E2B4;
}

.twitter {
  background: #ABE7FF;
}

.wordpress {
  background: #DBDBDB;
}

.folder-open {
  background: #FFD580;
}

.envelope {
  background: #B8B2EA;
}

.youtube {
  background: #FF7D7D;
}
</style>
