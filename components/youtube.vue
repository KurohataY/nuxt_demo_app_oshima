<template >
  <div id="youtube_style">
    <youtube
      style="width: 50%;height: 300px;"
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
#youtube_style{
  padding: 0 12px;
}
</style>
