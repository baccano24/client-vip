import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    appName:"admin"
}
// const getters={
//     appName:state=>state.appName
// }

export default new Vuex.Store({
    state,
    // getters
})
