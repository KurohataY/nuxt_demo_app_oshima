// ローカルストレージ の設定
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    window.onNuxtReady(() => {
        createPersistedState({})(store)
    })
}
