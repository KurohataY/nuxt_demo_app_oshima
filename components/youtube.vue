<template >
  <v-container>
    <v-row no-gutter>
      <v-col v-for="id of youtube_id" cols="12" sm="6">
        <youtube
          style="width: 100%;height: 300px;"
          ref="youtube"
          :video-id="id"
          />
      </v-col>
    </v-row>
  </v-container>

  </div>

</template>
<script>
import Vue from 'vue'
// vue-youtube設定
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default{
  data() {
    return{
      youtube_id: {
        n1: "vHrBqSU-DCY",
        n2: "KxSMMg0GmUo",
        n3: "Mxz9q5Hh43E",
        n4: "wGegL_wWJM0"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#youtube_style{
  padding: 0 12px;
}
</style>
