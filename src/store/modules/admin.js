import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const types = {
    SET_AUTHENTICATED: "SET_AUTHENTICATED",
    SET_USER: 'SET_USER'
}

const state = {
    isAutenticated: false,
    user: {}
}
// const getters={
//     isAutentivated:state=>state.isAutenticated,
//     user:state=>state.user
// }
const mutations = {
    [types.SET_AUTHENTICATED](state, isAutenticated) {
        if (isAutenticated) state.isAutenticated = isAutenticated;
        else state.isAutenticated = false;
    },
    [types.SET_USER](state, user) {
        if (user) state.user = user;
        else state.user = {};
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
    actions
})














