import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
