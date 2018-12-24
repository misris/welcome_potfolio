<template>
  <div class="icon">
    <router-link :to="icon.page">
      <div class="icon-content" ref="icon-content" v-bind:class="icon.name" v-on:mouseover="mouseover">
        <font-awesome-icon :icon="{ prefix: icon.prefix, iconName: icon.name }"/>
      </div>
    </router-link>
  </div>
</template>

<script>
const RIGHT = 'right'
const LEFT = 'left'
export default {
  name: 'icon',
  props: ['icon'],
  data() {
    return {
      xPos: 0
    }
  },
  methods: {
    mouseover() {
      const newFlip = this.xPos > this.$store.getters.characterXPos ? RIGHT : LEFT
      if (this.$store.getters.flip === newFlip) return
      this.$store.commit('setFlip', newFlip)
    }
  },
  mounted() {
    const iconDiv = this.$refs["icon-content"]
    const iconDivRect = iconDiv.getBoundingClientRect()
    this.xPos = (iconDivRect.left + iconDivRect.right) / 2
  }
}
</script>

<style scoped>
.icon {
  height: 5rem;
  display: inline-block;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
  position: relative;
}

.icon-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  font-size: 2.5rem;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  color: white;
  border: 1px solid #aaa;
}

.wordpress {
  right: 60%;
}

.envelope {
  left: 60%;
}

</style>
