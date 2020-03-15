<template>
  <div id="web">
    <!-- メイン -->
    <main>
      <!-- タイトル画像 -->
      <Img />
      <!-- 説明文 -->
      <Des />
      <!-- Twitter -->
      <h3>Twitter</h3>
      <div class="text-center">
        <a class="twitter-timeline" data-lang="ja" data-width="300" data-height="400" data-theme="dark" href="https://twitter.com/COiod3nId8QqtKv?ref_src=twsrc%5Etfw">Tweets by COiod3nId8QqtKv</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
      <!-- 地図の表示 -->
      <h3>観光マップ</h3>
      <Map />
    </main>
  </div>

</template>

<script>
import Map from '~/components/map.vue'
import Img from '~/components/image.vue'
import Des from '~/components/description.vue'

export default {
  components: {
    Map,
    Img,
    Des
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
  margin-top: 100px;
  background: #ffffff;
}
.twitter-timeline{
  width: 300px;
  height: 300px;
}
h3{
  text-align: center;
  margin:10px 0;
}
.text-center{
  text-align: center;
}
</style>
