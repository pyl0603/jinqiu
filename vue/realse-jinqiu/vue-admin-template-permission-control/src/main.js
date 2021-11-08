import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRecyclerviewNew from 'vue-recyclerview'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import '@/styles/dqx_base.css' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

// import '@/permissionEva' // permission control

/**
 * If you don't want to use mock-server
 * you want to use mockjs for request interception
 * you can execute:
 *
 * import { mockXHR } from '../mock'
 * mockXHR()
 */

// 自定义指令，限制输入框的输入长度以及
Vue.directive('inputRule', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.children[0].maxLength = '50'
    el.children[0].placeholder = '请输入内容'
  }
})

// 自定义指令，现在登录输入框只允许输入数字和限制长度
Vue.directive('inputNumber', {
  // 插入到dom
  inserted: function(el) {
    el.children[0].maxLength = '11'
    el.children[0].placeholder = '请输入数字'
    el.addEventListener('input', () => {
      const e = e || window.event
      e.target.value = e.target.value.replace(/[^\d]/g, '')
    })
  }
})

// 自定义指令，现在不允许输入中文
Vue.directive('inputNotCHS', {
  // 插入到dom
  inserted: function(el) {
    el.addEventListener('input', () => {
      const e = e || window.event
      e.target.value = e.target.value.replace(/\s*/g, '').replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g, '')
    })
  }
})

// 自定义指令，外联限制
Vue.directive('inputUrl', {
  inserted: function(el) {
    // el.children[0].maxLength = '30'
    el.addEventListener('input', () => {
      const e = e || window.event
      e.target.value = e.target.value.replace(/\s*/g, '').replace(/[\u4E00-\u9FA5]/g, '')
    })
  }
})

Vue.use(VueRecyclerviewNew)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
