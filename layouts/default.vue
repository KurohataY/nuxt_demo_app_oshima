<template>
  <div>
    <!-- ヘッダー -->
    <header>
      <!-- ナビバーの表示 -->
      <Nav />
    </header>
    <nuxt />
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="css" scoped>
header{
  height: 100px;
  position: fixed;
  z-index: 1000;
}
</style>
