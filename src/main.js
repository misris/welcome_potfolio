// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store.js'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faEnvelope, faUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub, faWordpress, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCode, faEnvelope, faFacebook, faTwitter, faGithub, faWordpress, faYoutube, faUser, faFolderOpen)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
