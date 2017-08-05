<template>
  <div class="section pattern" :style="height ? style : null">
    <div class="container">
      <div class="hero-image">
        <transition name="slide-down">
          <img v-if="phone" src="./images/layer-phone.svg" alt="Phone Layer" class="layer layer--phone">
        </transition>
        <transition name="slide-down">
          <img v-if="code" src="./images/layer-code.svg" alt="Phone Layer" class="layer layer--code">
        </transition>
        <transition name="slide-down">
          <img v-if="server" src="./images/layer-server.svg" alt="Phone Layer" class="layer layer--server">
        </transition>
      </div>
      <div class="hero-title">
        <h1>Full Stack Developer</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: null,
      phone: false,
      code: false,
      server: false
    }
  },
  components: {

  },
  props: {

  },
  computed: {
    style () {
      return {
        height: this.height + 'px'
      }
    }
  },
  methods: {

  },
  mounted () {
    setTimeout(() => {
      this.server = true
    }, 500)
    setTimeout(() => {
      this.code = true
    }, 2000)
    setTimeout(() => {
      this.phone = true
    }, 3500)
  }
}
</script>

<style lang="scss" scoped>
  .section {
    display: flex;
    flex-direction: row;
    height: 100vh;
    max-height: 800px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: white;
    padding: 0 30px;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero-image {
    position: relative;
    height: 300px;
    width: 368px;
    .layer {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      &--phone {
        top: -60px;
        z-index: 3;
      }
      &--code {
        top: -25px;
        z-index: 2;
      }
      &--server {
        top: 0;
        z-index: 1;
      }
    }
  }
  .hero-title {
    width: 100%;
    text-align: center;
    h1 {
      font-family: 'Fjalla One', sans-serif;
      font-weight: 800;
      font-size: 3.5em;
      margin-top: 0;
    }
  }

  .pattern {
    background-color: #ffb88c;
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23de6262' fill-opacity='0.26'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    60% {
      transform: translatey(-30px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  .slide-down-enter-active, .slide-down-leave-active {
    transition: all 1.5s ease;
    transform: translateY(0);
  }
  .slide-down-enter, .slide-down-leave-to /* .slide-down-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(-10%);
  }
</style>
