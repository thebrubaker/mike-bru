<template>
  <footer class="page__footer">
    <p>© {{ year }} Michael Brubaker</p>
    <p>This website was designed and developed by my brother, <a href="https://www.joelbrubaker.com">Joel Brubaker</a>.</p>
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
