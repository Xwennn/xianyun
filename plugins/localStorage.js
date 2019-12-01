// 保存用户信息到本地
// 引入插件
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'store' // 读取本地存储的数据到store
    })(store)
  })
}
