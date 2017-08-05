<template>
  <transition name="fade">
    <main-layout id="home-page" v-show="ready">
      <hero-section ref="hero" />
      <introduction ref="introduction" />
      <skills ref="skills" />
    </main-layout>
  </transition>
</template>

<script>
  import MainLayout from '~/layouts/main-layout'
  import HeroSection from './hero/section'
  import Introduction from './introduction/index'
  import Skills from './skills'
  import { mapComputed } from '~/utils/vuex'

  export default {
    data () {
      return {
        message: 'Welcome!',
        height: null
      }
    },
    components: {
      MainLayout,
      HeroSection,
      Introduction,
      Skills
    },
    props: {

    },
    computed: {
      ...mapComputed([
        'ready'
      ])
    },
    methods: {

    },
    mounted () {
      this.ready = true
      this.$nextTick(() => {
        this.$refs.hero.height = this.$refs.hero.$el.clientHeight
        this.$refs.skills.offset = this.$refs.skills.$el.offsetTop
      })
    }
  }
</script>

<style lang="scss" scoped>
  #home-page {
    display: flex;
    flex-direction: column;
  }
</style>
