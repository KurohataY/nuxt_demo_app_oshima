<template>
  <div id="web" class="clearfix">
    <!-- タイトル画像 -->
    <Img />
    <!-- 説明文 -->
    <Des />
    <!-- メイン -->
    <div id="main" class="web_style">
      <h3>紹介動画</h3>
      <Youtubes />
      <!-- ニュース表示 -->
      <h3>気仙沼のニュース</h3>
      <News />
      <!-- 地図の表示 -->
      <h3>観光マップ</h3>
      <Map />
      <h3>宿泊施設</h3>
      <Travel :message="this.$store.state.hotels"/>
    </div>
    <!-- サイド -->
    <div id="side" class="web_style">
      <!-- 天気取得（大船渡） -->
      <h3>今日の天気</h3>
      <Weather />
      <Calendar />
      <!-- Twitter -->
      <h3>Twitter</h3>
      <div class="text-center">
        <a class="twitter-timeline" data-lang="ja" data-width="300" data-height="400" data-theme="dark" href="https://twitter.com/COiod3nId8QqtKv?ref_src=twsrc%5Etfw">Tweets by COiod3nId8QqtKv</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  </div>

</template>

<script>
import Map from '~/components/map.vue'
import Img from '~/components/image.vue'
import Des from '~/components/description.vue'
import Weather from '~/components/weather.vue'
import Youtubes from '~/components/youtube.vue'
import News from '~/components/news.vue'
import Travel from '~/components/travel.vue'
import Calendar from '~/components/calendar.vue'

export default {
  components: {
    Map,
    Img,
    Des,
    Weather,
    Youtubes,
    News,
    Travel,
    Calendar
  }
}
</script>

<style lang="scss" scoped>

.clearfix::after {
   content: "";
   display: block;
   clear: both;
}
#web{
  margin-top: 150px;
  font-family: 'Kosugi Maru', sans-serif;
  h3{
    font-size:25px;
    margin-top: 20px;
  }
}
.web_style{
  padding: 0 30px;
}
#main{
  background: #ffffff;
  width: 70%;
  display: inline;
  float: left;
  text-align: center;
}
#side{
  width: 25%;
  display:inline;
  float: right;
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
