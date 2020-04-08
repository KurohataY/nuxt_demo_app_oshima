<template>
  <div id="news">
    <h1>気仙沼のニュース</h1>
    <News :message="this.$store.state.news_a" />
  </div>
</template>

<script>
import News from '~/components/news.vue'
export default{
  components: {
    News
  },
  methods: {
    // 画像URL先の有無処理
    getImageUrl(imageUrl) {
      if (imageUrl !== null && imageUrl.match(/^https?:\/\//)) {
        return imageUrl;
      } else {
        return require("@/assets/img/no-image.png");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#news{
  text-align: center;
  h1{
    font-size: 50px;
    color: #ACB6E5;//非対応のブラウザでの文字色を設定
    background: -webkit-linear-gradient(0deg, #ACB6E5, #86FDE8);//背景色にグラデーションを指定
    -webkit-background-clip: text;//テキストでくり抜く
    -webkit-text-fill-color: transparent;//くり抜いた部分は背景を表示
  }
  a {
    text-decoration: none;
    color: white;
  }
  .news-title-section {
    background-color: rgba(20, 20, 20, 0.65);
    h2 {
      font-size: 18px;
    }
  }
  .on-hover {
    transition: 0.3s;
    opacity: 0.7;
  }
  .v-responsive{
    display: block;
  }
}
</style>
