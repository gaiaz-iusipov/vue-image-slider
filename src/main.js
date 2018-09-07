import Vue from 'vue'
import App from './examples/App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
