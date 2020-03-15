<template>
  <div id="web">
    <!-- ヘッダー -->
    <header>
      <!-- ナビバーの表示 -->
      <Nav />
    </header>
    <!-- メイン -->
    <main>
      <!-- タイトル画像 -->
      <Img />
      <!-- 説明文 -->
      <Des />
      <!-- 地図の表示 -->
      <h3>観光マップ</h3>
      <Map />
    </main>
    <!-- フッター -->
    <footer>

    </footer>
  </div>

</template>

<script>
import Nav from '~/components/nav.vue'
import Map from '~/components/map.vue'
import Img from '~/components/image.vue'
import Des from '~/components/description.vue'

export default {
  components: {
    Nav,
    Map,
    Img,
    Des
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap');
#web{

}
body{
  font-family: 'Kosugi Maru', sans-serif;
}
main{
  height:1000px;
  margin-top: 100px;
  background: #ffffff;
}
header{
  height: 100px;
  position: fixed;
  z-index: 1000;
}
h3{
  text-align: center;
  margin:10px 0;
}
</style>
