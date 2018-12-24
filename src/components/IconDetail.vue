<template>
  <div class="icon-detail" v-bind:class="icon.name" v-if="getPageName()">
    <div class="icon-detail-title">
      <font-awesome-icon :icon="{ prefix: icon.prefix, iconName: icon.name }"/>
      {{ icon.page }}
    </div>
    <div class="icon-detail-content">
      <profile-component v-if="currentPage.profile"/>
      <twitter-component v-if="currentPage.twitter"/>
      <blog-component v-if="currentPage.blog"/>
      <works-component v-if="currentPage.works"/>
      <contact-component v-if="currentPage.contact"/>
      <channel-component v-if="currentPage.channel"/>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import Twitter from '@/components/Twitter'
import Blog from '@/components/Blog'
import Works from '@/components/Works'
import Contact from '@/components/Contact'
import Channel from '@/components/Channel'
export default {
  data() {
    return {
      currentPage: {
        profile: false,
        twitter: false,
        blog: false,
        works: false,
        contact: false,
        channnel: false
      },
      icon: this.$store.state.icons[this.getPageName()]
    }
  },
  methods: {
    getPageName() {
      return this.$route.params.page
    },
    getPageComponent: function() {
      return Profile
    },
    clearCurrentPage() {
      for (let page in this.currentPage) {
        this.currentPage[page] = false
      }
    },
    setCurrentPageComponent() {
      this.currentPage[this.getPageName()] = true
    }
  },
  components: {
    'profile-component': Profile,
    'twitter-component': Twitter,
    'blog-component': Blog,
    'works-component': Works,
    'contact-component': Contact,
    'channel-component': Channel
  },
  mounted() {
    this.clearCurrentPage()
    this.setCurrentPageComponent()
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.icon = this.$store.state.icons[this.getPageName()]
    this.clearCurrentPage()
    this.setCurrentPageComponent()
  }
}
</script>

<style scoped>
.icon {
  width: 5rem;
  vertical-align: middle;
}
.icon-detail {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 10px;
  text-align: left;
  color: white;
}

.icon-detail-title {
  /* border: 1px solid red; */
  margin: 0.5rem auto;
  width: 90%;
  font-size: 1.3rem;
  font-weight: 800;
}

.icon-detail-content {
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 90%;
  background: white;
  border-radius: 10px;
  color: #777;
  padding: 1rem;
  font-size: 1.1rem;
}
</style>
