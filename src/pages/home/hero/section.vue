<template>
  <div class="section__hero pattern" :style="height ? style : null">
    <i class="material-icons md-48 computer">computer</i>
    <small class="name">Joel Brubaker</small>
    <h1>Full Stack Developer</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: null
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

  }
}
</script>

<style lang="scss" scoped>
  .name {
    font-family: 'Montserrat', sans-serif;
  }
  @keyframes blinker { to { opacity: 0; } }
  .computer {
    position: relative;
    &::after {
      animation: blinker .3s cubic-bezier(.5, 0, 1, 1) infinite alternate; 
      position: absolute;
      top: 15px;
      left: 10px;
      content: '';
      width: 4px;
      height: 1px;
      background-color: white;
    }
  }
  .section {
    &__hero {
      display: flex;
      height: 90vh;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      color: white;
      padding: 0 30px;
      text-align: center;

      h1 {
        font-family: 'Fjalla One', sans-serif;
        font-weight: 800;
        font-size: 2.2em;
        @media (min-width: 800px) {
          margin-bottom: 0px;
        }
      }
      p {
        font-family: 'Helvetica', sans-serif;
        font-size: 1.2em;
        text-align: center;
        line-height: 1.4em;
        margin-top: 20px;
        max-width: 540px;
        @media (min-width: 600px) {
          font-size: 1.5em;
        }
      }
      .solid-line-break {
        width: 80px;
        height: 3px;
        background-color: #DE6262;
        border-radius: 2px;
      }
      a[role=button] {
        width: 100%;
        max-width: 320px;
        padding: 13px;
        font-size: 16px;
        background-color: white;
        color: rgba(0,0,0,0.75);
        border-radius: 6px;
        border: none;
        &:hover {
          box-shadow:0px 0px 0px 1px rgba(0,0,0,0.8) inset;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
  }
  .pattern {
    background-color: #ffb88c;
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23de6262' fill-opacity='0.26'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
