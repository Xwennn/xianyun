// 用户管理
export const state = () => ({
  userInfo: {
    token: '',
    user: {}
  }
})

export const mutations = {
  // 保存用户信息到state
  setUserInfo (state, data) {
    state.userInfo = data
  }
}

export const actions = {
  login ({ commit }, data) {
    return this.$axios({
      url: '/accounts/login',
      method: 'POST',
      data
    }).then((res) => {
      const data = res.data
      commit('setUserInfo', data)
      return data
    })
  }
}
