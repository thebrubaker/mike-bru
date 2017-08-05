<template>
  <transition name="slide-right">
    <div class="page-sidebar" v-show="sidebar">
      <div class="container">
        <ul class="nav-items">
          <li class="nav-item" v-for="item in items">
            <a target="_blank" :href="item.href" :title="item.title">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <!-- <profile-photo></profile-photo> -->
    </div>
  </transition>
</template>

<script>
import { mapComputed } from '~/utils/vuex'
import ProfilePhoto from '~/components/profile-photo'

export default {
  data () {
    return {
      items: [
        {
          href: 'https://www.twitter.com/joelbrubaker',
          title: 'Twitter',
          text: 'Twitter'
        },
        {
          href: 'https://www.github.com/thebrubaker',
          title: 'GitHub',
          text: 'GitHub'
        },
        {
          href: 'https://www.npmjs.com/~thebrubaker',
          title: 'NPM',
          text: 'NPM'
        },
        {
          href: 'https://www.linkedin.com/in/joelbrubaker',
          title: 'LinkedIn',
          text: 'LinkedIn'
        },
        {
          href: 'https://stackoverflow.com/users/8267203/joel-brubaker',
          title: 'Stack Overflow',
          text: 'Stack Overflow'
        }
      ]
    }
  },
  components: {
    ProfilePhoto
  },
  props: {

  },
  computed: {
    ...mapComputed('navigation', [
      'sidebar'
    ])
  },
  methods: {
    toggle () {
      this.sidebar = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-sidebar {
    z-index: 20;
    width: 80vw;
    max-width: 400px;
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
    bottom: 0;
    padding-top: 50px;
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.2);
    overflow: hidden;
  }
  .container {
    position: fixed;
    top: 55px;
    left: 0;
    width: inherit;
  }
  .nav-items {
    font-size: 1.2em;
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
  }
  .nav-item {
    padding: 15px 20px;
    // border-bottom: 1px solid rgba(0,0,0,0.2);
    a {
      // margin: 15px 20px;
      // border-bottom: none;
      // width: 100%;
      // display: block;
    }
  }
</style>
