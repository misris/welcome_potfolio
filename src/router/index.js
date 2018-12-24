import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Title from '@/components/Title'
import Content from '@/components/Content'
import Icon from '@/components/Icon'
import Character from '@/components/Character'
import IconDetail from '@/components/iconDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path: '',
          components:{
            title: Title,
            content: Content,
            iconDetail: IconDetail
          },
          children: [
            {
              path: '',
              components:{
                icon: Icon,
                character: Character
              }
            },
            {
              path: ':page',
              components:{
                icon: Icon,
                character: Character
              }
            }
          ]
        }
      ]
    }
  ]
})
