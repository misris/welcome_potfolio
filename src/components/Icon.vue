<template>
  <div class="icon">
    <div class="icon-content" ref="icon-content" v-bind:class="icon.name" v-on:mouseover="mouseover">
      <font-awesome-icon :icon="{ prefix: icon.prefix, iconName: icon.name }"/>
    </div>
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
  margin-bottom: 3rem;
  width: 50%;
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
  border: 1px solid black;
}

.user {
  background: #B3E2B4;
}

.twitter {
  background: #ABE7FF;
}

.wordpress {
  right: 60%;
  background: #DBDBDB;
}

.folder-open {
  background: #FFD580;
}

.envelope {
  left: 60%;
  background: #B8B2EA;
}


.youtube {
  background: #FF7D7D;
}

</style>
