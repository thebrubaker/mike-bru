<template>
  <div class="introduction" :style="height ? style : null">
    <div class="container">
      <div class="main-image">
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
    </div>
    <div class="headline">
      <h2>Hello, I'm Joel Brubaker.</h2>
      <p>I'm an experienced full stack engineer who loves to build modern web applications. My favorite tools include <a target="_blank" href="https://laravel.com/">Laravel</a>, <a target="_blank" href="https://vuejs.org/">Vue.js</a>, <a target="_blank" href="https://firebase.google.com/">Firebase</a> and <a target="_blank" href="https://cloud.google.com/">Google Cloud Platform</a>.</p>
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
  .introduction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 90vh;
    width: 100%;
    background-color: white;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    z-index: 1;
    padding: 150px 0;
    @media (min-width: 500px) {
      flex-direction: row;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    @media (min-width: 500px) {
      height: 100%;
    }
  }
  .main-image {
    position: relative;
    height: 150px;
    width: 100%;
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
    @media (min-width: 500px) {
      height: 500px;
      width: 500px;
      margin-top: 60px;
      margin-right: 30px;
    }
  }
  .headline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 10px 30px 20px;
    max-width: 700px;
    z-index: 2;
    h2 {
      font-size: 1.5em;
    }
    p {
      font-size: 1.2em;
      line-height: 2em;
    }
    a {
      color: #2c3e50;
      border-bottom: 1px solid #FFB88C;
      &:hover {
        text-decoration: none;
      }
    }
    @media (min-width: 500px) {
      h2 {
        font-size: 2em;
      }
      p {
        font-size: 1.4em;
        line-height: 2em;
      }
      a {
        color: #2c3e50;
        border-bottom: 1px solid #FFB88C;
        &:hover {
          text-decoration: none;
        }
      }
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
