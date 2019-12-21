import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './permission'
import axios from './utils/request'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
import component from './components'
Vue.use(component)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
