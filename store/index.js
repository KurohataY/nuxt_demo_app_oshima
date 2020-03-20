// ストレージの設定
export const state = () => ({
    news: null
})

// データ保存メソッド
export const mutations = {
    getNews(state, news) {
      // 六つのニュースデータを保存
      state.news = news.slice(0,6)
    },
}
