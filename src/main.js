import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import * as echarts from 'echarts'


//将echarts绑定到vue的原型上
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.$echarts=echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
