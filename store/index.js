// ストレージの設定
export const state = () => ({
    news: null,
    hotels: null,
    news_a: null,
    hotels_a: null,
    weather: {
      name: null,
      temp: null,
      weather_main: null,
      icon: null,
    },
})

// データ保存メソッド
export const mutations = {
    getNews(state, news) {
      // ニュースデータを保存
      state.news = news.slice(0,2);
      state.news_a = news;
    },
    getHotel(state, hotels) {
      state.hotels = hotels.slice(0,2);
      state.hotels_a = hotels;
    },
    getWeather(state, weather){
      state.weather.name = weather.name;
      // K（ケルビン）- 273.15 = °C 少数第一まで求めている
      state.weather.temp = Math.floor((weather.main.temp - 273.15) * 10) / 10;
      // 天気の詳細
      state.weather.weather_main = weather.weather[0].description;
      // 天気アイコン番号
      state.weather.icon = weather.weather[0].icon;
    },
}
