// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// // import './styles/element-variables.scss'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL
Vue.config.productionTip = false
Vue.use(ElementUI)

window.bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
