<template>
  <div>
    <!-- ヘッダー -->
    <header>
      <!-- ナビバーの表示 -->
      <Nav />
    </header>
    <main>
      <nuxt />
    </main>
    <!-- フッター -->
    <footer>
      <Fot />
    </footer>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import Fot from '~/components/footer.vue'
export default {
  components: {
    Nav,
    Fot
  }
}
</script>

<style lang="scss" scoped>
header{
  height: 150px;
  position: fixed;
  z-index: 1000;
}
footer{
  margin:10px 0 0 0;
  height: 100px;
  background-color: #29A2E3;
}
main{
  margin-top: 150px;
}
</style>
