<template >
  <div>
    <h3 class="">紹介動画</h3>
    <youtube
      class="youtube_size"
      v-for="id of youtube_id"
      ref="youtube"
      :video-id="id"
      />
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
.youtube_size{
  width: 560px;
  height: 300px;
}
</style>
