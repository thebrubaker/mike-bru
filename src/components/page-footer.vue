<template>
  <footer class="page__footer">
    <p>© {{ year }} Joel Brubaker</p>
    <p>This website was designed and developed by me, Joel Brubaker. I build applications for the modern web. Feel free to follow me on <a href="http://www.twitter.com/joelbrubaker">Twitter</a>.</p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: (new Date()).getFullYear()
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
  .page {
    &__footer {
      padding: 10px;
      border-top: 1px solid rgba(0,0,0,0.1);
      background-color: white;
      p {
        font-size: 12px;
        text-align: center;
      }
    }
  }
</style>
