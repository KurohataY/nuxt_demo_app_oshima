<template>
  <div id="top">
    <div class="weather_top">
      <!-- 天気画像 -->
      <img class="weather_img weather" :src="this.getImage()" alt="">
      <!-- 温度 -->
      <div class="weather">
        <div>{{$store.state.weather.temp}} 度</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    getImage(){
      if (this.$store.state.weather.icon !== null){
        return `http://openweathermap.org/img/wn/`+this.$store.state.weather.icon+`.png`
      }else{
        return require("@/static/v.png");
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  #top{
    text-align: center;
    h3{
      margin: 10px;
    }
  }
  .weather_top{
    border: solid 3px #000000;
    display: table;
    table-layout: fixed;
    border-radius: 30px;
    margin: 0 auto;
  }
  .weather_img{
    border: solid #000000;
    border-width:0px 1px 0px 0px;
  }
  .weather{
    display: table-cell;
    vertical-align: middle;
    height: 104px;
    width: 100px;
    text-align: center;
    div{
      padding:43px 0;
    }
  }
</style>
