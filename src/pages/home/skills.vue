<template>
  <div class="skills-section">
    <div class="container">
      <div class="summary">
        <h1>Expertise & Knowledge</h1>
        <p>I build applications of all sizes, from rapid single-page prototypes to large-scale backends with RESTful APIs. Knowing the full stack gives me the flexibility to choose the right tool for the job.</p>
      </div>
      <div class="cards">
        <div class="card" v-if="showCards">
          <div class="left">
            <laravel-icon width="35" height="35" />
          </div>
          <div class="right">
            <h1>Laravel</h1>
            <p>A modern toolkit for building high-quality, well-tested backends and RESTful APIs.</p>
          </div>
        </div>
        <div class="card" v-if="showCards">
          <div class="left">
            <vue-icon width="35" height="35" />
          </div>
          <div class="right">
            <h1>Vue.js</h1>
            <p>A javascript framework for rapid interface development and lightning-fast single page apps.</p>
          </div>
        </div>
        <div class="card" v-if="showCards">
          <div class="left">
            <firebase-icon width="35" height="35" />
          </div>
          <div class="right">
            <h1>Firebase</h1>
            <p>Suite of tools for rapidly prototyping mobile applications, without managing infrastructure.</p>
          </div>
        </div>
        <div class="card" v-if="showCards">
          <div class="left">
            <gcs-icon width="35" height="35" />
          </div>
          <div class="right">
            <h1>Google Cloud Platform</h1>
            <p>Secure, global, high-performance, cost-effective infrastructure with the smartest tools available.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LaravelIcon from '~/components/laravel-icon'
import VueIcon from '~/components/vue-icon'
import GcsIcon from '~/components/gcs-icon'
import FirebaseIcon from '~/components/firebase-icon'

export default {
  data () {
    return {
      scroll: 0,
      offset: 0,
      showCards: true
    }
  },
  components: {
    LaravelIcon,
    VueIcon,
    GcsIcon,
    FirebaseIcon
  },
  props: {

  },
  computed: {

  },
  methods: {

  },
  watch: {
    scroll () {
      if (!this.showCards && this.scroll > this.offset + 350) {
        this.showCards = true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.offset = this.$el.offsetTop
      window.addEventListener('scroll', () => {
        this.scroll = window.scrollY
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  $small: 700px;

  .skills-section {
    background-color: #f2f2f2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23acacac' fill-opacity='0.09'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 100%;
    min-height: 100vh;
    padding: 10px;
    display: flex;
    justify-content: center;
    @media (min-width: $small) {
      padding: 30px;
    }
  }
  .container {
    display: flex;
    max-width: 900px;
    align-items: center;
    flex-direction: column;
    @media (min-width: $small) {
      flex-direction: row;
    }
  }
  .summary {
    padding: 20px;
    margin: 50px 0 30px 0;
    @media (min-width: $small) {
      flex: 5;
      margin: 0;
    }
    h1 {
      font-size: 1.5em;
      font-family: 'Montserrat';
      border-bottom: 3px solid #FFB88C;
      display: inline-block;
      @media (min-width: $small) {
        font-size: 24px;
      }
    }
    p {
      font-size: 1.2em;
      line-height: 2em;
      @media (min-width: $small) {
        line-height: 2em;
        font-size: 20px;
      }
    }
  }
  .cards {
    display: flex;
    flex-direction: column;
    @media (min-width: $small) {
      flex: 4;
    }
  }
  .card {
    background-color: white;
    border: 1px solid hsl(0, 5%, 90%);
    border-radius: 3px;
    display: flex;
    padding: 15px;
    margin: 10px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.05);
    h1 {
      font-family: 'Avenir';
      margin: 0 0 5px 0;
      font-size: 20px;
      color: hsl(0, 5%, 40%);
    }
    p {
      font-family: 'Avenir';
      margin: 0;
      font-size: 15px;
      line-height: 1.5em;
    }
    .left, .right {
      padding: 10px;
    }
  }
</style>
