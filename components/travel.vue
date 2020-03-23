<template >
  <div class="">
    <v-container>
      <v-row no-gutter>
        <v-col v-for="hotels of message" cols="12" sm="6">
          <!-- ニュースカード（参考：https://qiita.com/KIYS/items/9805118aa86f35c7a852#%E5%AE%9F%E8%A3%85-6） -->
          <v-card hover outlined>
            <a :href="hotels.hotelImageUrl" target="_blank" rel="noopener">
              <v-hover v-slot:default="{ hover }">
                <v-img :src="hotels.hotelThumbnailUrl" :class="{ 'on-hover': hover }" :aspect-ratio="16 / 9">
                  <v-container fill-height fluid class="pa-0">
                    <v-row class="mt-auto" no-gutters>
                      <v-col cols="12" class="travel-title-section pa-2">
                        <h2 class="white--text" align="left">{{hotels.hotelSpecial}}</h2>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-img>
              </v-hover>
            </a>
            <v-card-text class="caption text-right pt-1 pb-0">
              <p class="mr-2">{{ hotels.hotelName }}</p>
              <p>所在地：{{ hotels.address1 + hotels.address2 }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- クレジット表示 -->
    <!-- Rakuten Web Services Attribution Snippet FROM HERE -->
    <a href="https://webservice.rakuten.co.jp/" target="_blank"><img src="https://webservice.rakuten.co.jp/img/credit/200709/credit_31130.gif" border="0" alt="楽天ウェブサービスセンター" title="楽天ウェブサービスセンター" width="311" height="30"/></a>
    <!-- Rakuten Web Services Attribution Snippet TO HERE -->
  </div>
</template>

<script>
export default {
  props:['message'],
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: white;
}
.travel-title-section {
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
</style>
