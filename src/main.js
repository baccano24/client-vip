import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/font/iconfont.css'
import router from './router';
import axios from './utils/http';
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import Cookies from 'js-cookie'

// 粒子特效
import VueParticles from 'vue-particles'
// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import '../src/assets/style/base.css'
Vue.prototype.$axios = axios
Vue.prototype.Host = '/api'
Vue.use(ElementUI);
Vue.use(VueParticles);
Vue.config.productionTip = false
Vue.use(VueQuillEditor)
Vue.use(VueLazyLoad, {
  error: require('./assets/images/erro.jpg'),
  loading: require('./assets/images/load.gif')
})
// axios默认路径
axios.defaults.baseURL = 'http://localhost:8080/api';
if (window.localStorage.getItem("accessToken")) {
  axios.defaults.headers.common['Access-Token'] = window.localStorage.getItem("accessToken");
} else {

}


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
