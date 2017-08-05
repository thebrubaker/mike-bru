<template>
  <transition>
    <div v-if="sidebar" class="page-overlay" @click="toggle"></div>
  </transition>
</template>

<script>
import { mapComputed } from '~/utils/vuex'

export default {
  data () {
    return {

    }
  },
  components: {

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
  .page-overlay {
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255,255,255,0.1);
    // background: linear-gradient(to right, #FFB88C, #DE6262);
    backdrop-filter: blur(4px);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
