<template>
  <div id="top">
    <h3>今日の天気</h3>
    <div class="weather_top">
      <!-- 天気画像 -->
      <img class="weather_img weather" :src="`http://openweathermap.org/img/wn/`+this.weather.icon+`.png`" alt="">
      <!-- 温度 -->
      <div class="weather">
        <div>{{this.weather.temp}} 度</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
      // 天気情報格納変数
      weather: {
        name : null,
        temp : null,
        weather_main: null,
        icon: null,
      },
      // 大島の地理情報
      location: {
        lat: 38.8580205,
        lon: 141.5845773,
      },
    }

  },
  async created() {
			const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + this.location.lat + "&lon=" + this.location.lon + "&lang=ja&appid=" + process.env.WEATHER_API_KEY;
      try {
        const item = await this.$axios.$get(url);
        // 都市名
        this.weather.name = item.name;
        // K（ケルビン）- 273.15 = °C 少数第一まで求めている
        this.weather.temp =  Math.floor((item.main.temp - 273.15) * 10) / 10;
        // 天気の詳細
        this.weather.weather_main = item.weather[0].description;
        // 天気アイコン番号
        this.weather.icon = item.weather[0].icon;
      } catch (e) {
        // エラー表示
        console.log(e)
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
