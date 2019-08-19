// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import {post, fetch, patch, put} from './http/http'
// import Print from 'vue-print-nb'
import htmlToPdf from '@/components/utils/htmlToPdf' // 导出pdf的实现
import store from './store'

Vue.use(ElementUI, {locale})
Vue.use(htmlToPdf)
// Vue.use(Print)
Vue.config.productionTip = false

// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

// 全局信息记录
window.allInfo = {
  stepOne: {},
  stepTwo: {},
  stepThree: {},
  stepFour: {},
  stepFive: {},
  stepSix: {},
  stepSeven: {},
  stepEight: {},
  stepNine: {}
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
