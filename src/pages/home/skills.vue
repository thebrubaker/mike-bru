<template>
  <div class="skills-section">
    <div class="container">
      <div class="summary">
        <h1>Expertise & Knowledge</h1>
        <p>I build advertisements for both large companies and small passion projects. My approach is always finding a good flow, capturing the strong points of excellent Photoshop design, and turning that into a moving masterpiece. After Effects is my muse. While most daydream at night about the perfect life, I stir in bed dazzled by a designed I haven’t created yet.</p>
      </div>
      <div class="cards">
        <div class="card" v-if="showCards">
          <div class="left">
            <after-effects-icon width="35" height="35" />
          </div>
          <div class="right">
            <h1>After Effects</h1>
            <p>The industry-standard animation and creative compositing app lets you design and deliver professional motion graphics.</p>
          </div>
        </div>
        <div class="card" v-if="showCards">
          <div class="left">
            <premiere-icon width="35" height="35" />
          </div>
          <div class="right">
            <h1>Premiere</h1>
            <p>Industry-leading video editing software, you can edit virtually any type of media in its native format and create professional productions for film, TV and web.</p>
          </div>
        </div>
        <div class="card" v-if="showCards">
          <div class="left">
            <photoshop-icon width="35" height="35" />
          </div>
          <div class="right">
            <h1>Photoshop</h1>
            <p>The world’s best imaging and design app is at the core of almost every creative project. Works across desktop and mobile devices to create and enhance everything.</p>
          </div>
        </div>
        <div class="card" v-if="showCards">
          <div class="left">
            <illustrator-icon width="35" height="35" />
          </div>
          <div class="right">
            <h1>Illustrator</h1>
            <p>Everyone's standard vector graphics app lets you create logos, icons, sketches, typography, and complex illustrations for print, web, interactive, video, and mobile.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoshopIcon from '~/components/icons/photoshop'
import IllustratorIcon from '~/components/icons/illustrator'
import AfterEffectsIcon from '~/components/icons/after-effects'
import PremiereIcon from '~/components/icons/premiere'

export default {
  data () {
    return {
      scroll: 0,
      offset: 0,
      showCards: true
    }
  },
  components: {
    PhotoshopIcon,
    IllustratorIcon,
    AfterEffectsIcon,
    PremiereIcon
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
      border-bottom: 3px solid #74ebd5;
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
