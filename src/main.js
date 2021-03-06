import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
import toast from 'components/common/toast'
import Fastclilck from  "fastclick"
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(toast)
//解决移动端300ms延迟
Fastclilck.attach(document.body)
//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/2048.jpg')
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
