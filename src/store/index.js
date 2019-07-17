import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  // 用户登录状态
  SET_AUTHENTICATED: "SET_AUTHENTICATED",
  SET_USER: 'SET_USER',
}

const state = {
  isAutenticated: false,// 用户登录状态
  user: {},
  // tabsView
  openTab: [],//所有打开的路由
  activeIndex: '/home' //激活状态
}

const getters = {
  isAutentivated: state => state.isAutenticated,
  user: state => state.user
}

const mutations = {
  [types.SET_AUTHENTICATED](state, isAutenticated) {
    if (isAutenticated) state.isAutenticated = isAutenticated;
    else state.isAutenticated = false;
  },
  [types.SET_USER](state, user) {
    if (user) state.user = user;
    else state.user = {};
  },
  // 添加tabs
  add_tabs(state, data) {
    this.state.openTab.push(data);
  },
  // 删除tabs
  delete_tabs(state, route) {
    let index = 0;
    for (let option of state.openTab) {
      if (option.route === route) {
        break;
      }
      index++;
    }
    this.state.openTab.splice(index, 1);
  },
  // 设置当前激活的tab
  set_active_index(state, index) {
    this.state.activeIndex = index;
  },

}

const actions = {
  setAutenticated: ({ commit }, isAutenticated) => {
    commit(types.SET_AUTHENTICATED, isAutenticated);
  },
  setUser: ({ commit }, user) => {
    commit(types.SET_USER, user);
  },
  clearCurrentState: ({ commit }) => {
    commit(types.SET_AUTHENTICATED, false);
    commit(types.SET_USER, null);
  }
}
export default new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions,
  getters
})