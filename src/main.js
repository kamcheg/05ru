import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
