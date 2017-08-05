<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Application'
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsl(0, 10%, 25%);
    padding: 0;
  }
  a {
    color: #2c3e50;
    border-bottom: 1px solid #FFB88C;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  .highlight {
    color: rgba(0,135,255,1);
  }
  /* Rules for sizing the icon. */
  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }

  /* Rules for using icons as black on a light background. */
  .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
  .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

  /* Rules for using icons as white on a dark background. */
  .material-icons.md-light { color: rgba(255, 255, 255, 1); }
  .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

  .slide-right-enter-active, .slide-right-leave-active {
    transition: all 0.2s;
    transform: translateX(0);
  }
  .slide-right-enter, .slide-right-leave-to /* .slide-right-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateX(-100%);
  }

  .drop-down-enter-active, .drop-down-leave-active {
    transition: all 2s;
    transform: translateY(0);
  }
  .drop-down-enter, .drop-down-leave-to /* .drop-down-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(-100%);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
</style>
