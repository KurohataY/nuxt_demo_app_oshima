<template>
  <div id="news">
    <h1>気仙沼のニュース</h1>
    <v-container>
      <v-row no-gutter>
        <v-col v-for="news of $store.state.news_a" cols="12" sm="6">
          <!-- ニュースカード（参考：https://qiita.com/KIYS/items/9805118aa86f35c7a852#%E5%AE%9F%E8%A3%85-6） -->
          <v-card hover outlined>
            <a :href="news.url" target="_blank" rel="noopener">
              <v-hover v-slot:default="{ hover }">
                <v-img :src="getImageUrl(news.urlToImage)" :class="{ 'on-hover': hover }" :aspect-ratio="16 / 9">
                  <v-container fill-height fluid class="pa-0">
                    <v-row class="mt-auto" no-gutters>
                      <v-col cols="12" class="news-title-section pa-2">
                        <h2 class="white--text" align="left">{{ news.title }}</h2>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-img>
              </v-hover>
            </a>
            <v-card-text class="caption text-right pt-1 pb-0">
              <span class="mr-2">{{ news.author }}</span>
              <time>{{ news.publishedAt }}</time>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default{
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
