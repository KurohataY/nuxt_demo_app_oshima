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
  },
  async fetch(){
    this.getNews();
    this.getWeather();
    this.getTravel();
  },
  methods: {
    // ニュース取得メソッド
    async getNews(){
      // NewsAPI
      const NewsAPI = require('newsapi');
      const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
      newsapi.v2.everything({
        // キーワード「気仙沼」検索
        q: '気仙沼',
        // 新しい順（記事）
        sortBy: 'publishedAt' ,
        // 一定の検索結果を削除（ドメイン）
        excludeDomains: 'shinobi.jp',
      }).then(response => {
        var news = response.articles;
        // ローカルストレージに保存
        this.$store.commit("getNews", news);
      });
    },
    // 天気取得メソッド
   async getWeather(){
      const url = "https://api.openweathermap.org/data/2.5/weather?lat=38.8580205&lon=141.5845773&lang=ja&appid=" + process.env.WEATHER_API_KEY;
      try {
        const weather = await this.$axios.$get(url);
        this.$store.commit("getWeather", weather);
      } catch (e) {
        // エラー表示
        console.log(e)
      }
    },
    // 宿泊施設取得メソッド
    async getTravel(){
      const url = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=%E6%B0%97%E4%BB%99%E6%B2%BC&applicationId=" + process.env.TRAVEL_API_KEY;
      try {
        const item = await this.$axios.$get(url);
        var b = []
        item.hotels.forEach(element =>{
          const a = element.hotel[0].hotelBasicInfo.telephoneNo;
          if (a.indexOf( "0226-28" ) !== -1){
            (b).push(element.hotel[0].hotelBasicInfo);
          }
        });
        this.$store.commit("getHotel", b);
      } catch (e) {
        // エラー表示
        console.log(e);
      }
    }
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
