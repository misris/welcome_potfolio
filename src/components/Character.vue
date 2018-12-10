<template>
  <div class="character">
    <div class="character-appearance-wrap">
      <div class="character-appearance" ref="character-appearance">
        <div class="character-welcome">
          welcome!
        </div>
        <img src="@/assets/character.png" v-bind:style="imgStyle">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'character',
  data() {
    return {
      xPos: 0,
      imgStyle: {
        "transform": "scale(1,1)"
      }
    }
  },
  methods: {
    flipRight() {
      this.imgStyle.transform = "scale(-1,1)"
    },
    flipLeft() {
      this.imgStyle.transform = "scale(1,1)"
    }
  },
  mounted() {
    const characterDiv = this.$refs["character-appearance"]
    const characterDivRect = characterDiv.getBoundingClientRect()
    this.xPos = (characterDivRect.left + characterDivRect.right) / 2
    this.$store.commit('setCharacterXPos', this.xPos)
    
    // store has changed in vuex
    this.$store.watch(this.$store.getters.getFlip, flip => {
      if (flip == "right") {
        this.flipRight()
      } else {
        this.flipLeft()
      }
    })
  },
}
</script>

<style>
.character {
  width: 30%;
  height: auto;
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.character-appearance-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.character-appearance {
  width: 150px;
  margin: 0 auto;
  position: relative;
  top: 45%;
  -webkit-transform: translateY(-50%); /* Safari用 */
  transform: translateY(-50%);
}

.character-welcome {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #555;
}

.character img{
  width: 100%;
  transition: transform 0.5s ease;
}

</style>
