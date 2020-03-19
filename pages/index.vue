<template>
  <div id="web" class="clearfix">
    <!-- タイトル画像 -->
    <Img />
    <!-- 説明文 -->
    <Des />
    <!-- メイン -->
    <main>
      <Youtubes />
      <!-- 地図の表示 -->
      <h3>観光マップ</h3>
      <Map />
    </main>
    <!-- サイド -->
    <aside>
      <!-- 天気取得（大船渡） -->
      <Weather />
      <!-- Twitter -->
      <h3>Twitter</h3>
      <div class="text-center">
        <a class="twitter-timeline" data-lang="ja" data-width="300" data-height="400" data-theme="dark" href="https://twitter.com/COiod3nId8QqtKv?ref_src=twsrc%5Etfw">Tweets by COiod3nId8QqtKv</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
      <News />
    </aside>
  </div>

</template>

<script>
import Map from '~/components/map.vue'
import Img from '~/components/image.vue'
import Des from '~/components/description.vue'
import Weather from '~/components/weather.vue'
import Youtubes from '~/components/youtube.vue'
import News from '~/components/news.vue'

export default {
  components: {
    Map,
    Img,
    Des,
    Weather,
    Youtubes,
    News
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap');
  .clearfix::after {
     content: "";
     display: block;
     clear: both;
  }

  #web{

  }
  body{
    font-family: 'Kosugi Maru', sans-serif;
  }
  main{
    background: #ffffff;
    width: 70%;
    display: inline;
	  float: left;
    text-align: center;
  }
  aside{
    width: 25%;
    display:inline;
	  float: right;
    margin-right: 70px;
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
