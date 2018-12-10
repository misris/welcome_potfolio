import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import icons from '@/assets/icons.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // loaded from icons.json
    icons: icons,
    // direction of character
    flip: 'left',
    // character x position
    characterXPos: 0
  },
  getters: {
    flip(state) {
      return state.flip
    },
    characterXPos(state) {
      return state.characterXPos
    },
    getFlip: state => () => state.flip
  },
  mutations: {
    setFlip(state, newFlip) {
      state.flip = newFlip
    },
    setCharacterXPos(state, newXPos) {
      state.characterXPos = newXPos
    }
  }

})
export default store
