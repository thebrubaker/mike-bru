<template>
  <div class="introduction" :style="height ? style : null">
    <div class="container">
      <div class="main-image">
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/S5frLKghou0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="headline">
      <h2>Hello, I'm Mike.</h2>
      <p>I'm an experienced motion graphics artist who loves making great content. My favorite tools include <a target="_blank" href="https://laravel.com/">Laravel</a>, <a target="_blank" href="https://vuejs.org/">Vue.js</a>, <a target="_blank" href="https://firebase.google.com/">Firebase</a> and <a target="_blank" href="https://cloud.google.com/">Google Cloud Platform</a>.</p>
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
    padding: 20px 40px;
    @media (min-width: 500px) {
      padding: 0;
      margin-right: 20px;
    }
  }
  .main-image {
    position: relative;
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
      width: 500px;
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
      border-bottom: 1px solid #74ebd5;
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
        border-bottom: 1px solid #74ebd5;
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
  .video-container {
      overflow:hidden;
      padding-bottom:56.25%;
      position:relative;
      height:0;
  }
  .video-container iframe{
      left:0;
      top:0;
      height:100%;
      width:100%;
      position:absolute;
  }
</style>
