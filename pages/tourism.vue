<template>
  <div id="tourism_style">
    <h1>宿泊先一覧</h1>
    <Travel :message="this.$store.state.hotels_a"/>
  </div>
</template>

<script>
import Travel from '~/components/travel.vue'
export default {
  components:{
    Travel
  }
}
</script>

<style lang="scss" scoped>
#tourism_style{
  text-align: center;
  h1{
    font-size: 50px;
    color: #ACB6E5;//非対応のブラウザでの文字色を設定
    background: -webkit-linear-gradient(0deg, #ACB6E5, #86FDE8);//背景色にグラデーションを指定
    -webkit-background-clip: text;//テキストでくり抜く
    -webkit-text-fill-color: transparent;//くり抜いた部分は背景を表示
  }
}
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
