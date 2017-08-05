<template>
  <div class="introduction">
    <div class="container">
      <h2>Hello, I'm Joel Brubaker.</h2>
      <p>I'm an experienced full stack engineer who loves to build modern web applications. My favorite tools include <a target="_blank" href="https://laravel.com/">Laravel</a>, <a target="_blank" href="https://vuejs.org/">Vue.js</a>, <a target="_blank" href="https://firebase.google.com/">Firebase</a> and <a target="_blank" href="https://cloud.google.com/">Google Cloud Platform</a>.</p>
    </div>
  </div>
</template>

<script>
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

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .introduction {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    height: 80vh;
    max-height: 900px;
    width: 100%;
    background-color: white;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 10px 30px;
    max-width: 700px;
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
</style>
