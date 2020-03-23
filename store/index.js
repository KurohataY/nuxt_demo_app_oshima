// ストレージの設定
export const state = () => ({
    news: null,
    hotels: null,
    news_a: null,
    hotels_a: null,
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
}
