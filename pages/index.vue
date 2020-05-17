<template>
  <div id="web" class="clearfix">
    <!-- タイトル画像 -->
    <Title />
    <!-- 説明文 -->
    <Des />
    <!-- メイン -->
    <div id="main" class="web_style">
      <h3>紹介動画</h3>
      <Youtubes />
      <!-- ニュース表示 -->
      <h3>気仙沼のニュース</h3>
      <News :message="this.$store.state.news"/>
      <h3>宿泊施設</h3>
      <Travel :message="this.$store.state.hotels"/>
      <!-- 地図の表示 -->
      <h3>観光マップ</h3>
      <Map />
      <h3>今日の天気</h3>
      <Weather />
      <h3>イベントカレンダー</h3>
      <Calendar />
    </div>
  </div>

</template>

<script>
import Map from '~/components/map.vue'
import Title from '~/components/title.vue'
import Des from '~/components/description.vue'
import Weather from '~/components/weather.vue'
import Youtubes from '~/components/youtube.vue'
import News from '~/components/news.vue'
import Travel from '~/components/travel.vue'
import Calendar from '~/components/calendar.vue'

export default {
  components: {
    Map,
    Title,
    Des,
    Weather,
    Youtubes,
    News,
    Travel,
    Calendar,
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
  h3{
    font-size:25px;
    text-align: center;
    margin:50px 0;
  }
}
.web_style{
  padding: 0 30px;
}
#main{
  background: #ffffff;
  display: inline;
  text-align: center;
}

.twitter-timeline{
  width: 300px;
  height: 300px;
}
.text-center{
  text-align: center;
}
</style>
