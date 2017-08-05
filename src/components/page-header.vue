<template>
  <header class="page__header">
    <div class="stripe" :class="{ slide }"></div>
    <transition name="slide-right">
      <span class="name" v-if="sidebar">Joel Brubaker</span>
    </transition>
    <button class="menu" :class="{ active: sidebar }" type="button" @click="toggle">menu</button>
  </header>
</template>

<script>
import { mapComputed } from '~/utils/vuex'

export default {
  data () {
    return {
      slideHeader: false,
      innerHeight: 0,
      scroll: 0,
      active: false
    }
  },
  components: {

  },
  props: {

  },
  computed: {
    ...mapComputed('navigation', [
      'sidebar'
    ]),
    slide () {
      return this.slideHeader || this.sidebar
    }
  },
  methods: {
    toggle () {
      this.sidebar = !this.sidebar
    }
  },
  watch: {
    scroll () {
      if (this.scroll - this.innerHeight + 60 >= 0) {
        this.slideHeader = true
      } else {
        this.slideHeader = false
      }
    }
  },
  mounted () {
    this.innerHeight = window.innerHeight
    window.addEventListener('scroll', event => {
      this.scroll = window.scrollY
    }, false)
  }
}
</script>

<style lang="scss" scoped>
.page__header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  .stripe {
    height: 55px;
    transform: translateY(-48px);
    transition: 0.2s;
    background: rgba(222, 98, 98, 0.6);
    background: linear-gradient(to right, rgba(255, 184, 140, 0.8), rgba(222, 98, 98, 0.8));
    backdrop-filter: blur(2px);
  }
  .stripe.slide {
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.2);
    transition: 0.2s;
    transform: translateY(0);
  }
  .name {
    position: absolute;
    top: 15px;
    left: 20px;
    color: white;
    font-weight: 800;
    font-size: 20px;
  }
  .menu {
    background-color: transparent;
    position: absolute;
    top: 18px;
    right: 6px;
    border: none;
    color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 5px;
    user-select: none;
    outline: none;
    &::after, &::before {
      content: '';
      background-color: white;
      width: 23px;
      height: 4px;
      display: block;
      border-radius: 2px;
      transform-origin: 82%;
      transition: 0.2s ease-in;
    }
    &.active::before {
      transform: rotate(-45deg);
    }
    &.active::after {
      transform: rotate(45deg);
    }
  }
}
</style>
