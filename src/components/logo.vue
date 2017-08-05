<template>
<div class="logo">
  <div class="initial">J</div>
  <div class="initial">B</div>
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
  .logo {
    display: flex;
    justify-content: center;
    width: 70px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 24px;
    position: relative;
    text-align: center;
    border-top: 2px solid rgba(255,255,255,1);
    opacity: 0.85;

    & .initial {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    & .initial:first-of-type {
      border-right: 0.5px solid rgba(255,255,255,1);
      padding-right: 10px;
    }
    & .initial:last-of-type {
      border-left: 0.5px solid rgba(255,255,255,1);
      padding-left: 10px;
    }
  }
</style>
