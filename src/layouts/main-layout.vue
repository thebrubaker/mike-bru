<template>
  <div class="layout__container">
    <page-header></page-header>
    <page-sidebar></page-sidebar>
    <page-overlay></page-overlay>
    <main class="layout__content" :class="{ blur: sidebar }">
      <slot></slot>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '~/components/page-header'
  import PageContent from '~/components/page-content'
  import PageFooter from '~/components/page-footer'
  import PageSidebar from '~/components/page-sidebar'
  import PageOverlay from '~/components/page-overlay'
  import { mapComputed } from '~/utils/vuex'

  export default {
    name: 'MainLayout',
    components: {
      PageHeader,
      PageContent,
      PageFooter,
      PageSidebar,
      PageOverlay
    },
    computed: {
      ...mapComputed('navigation', [
        'sidebar'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    &__container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      position: relative;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      &.blur {
        transition: all 0.3s;
        filter: blur(1px);
      }
    }
  }
</style>
