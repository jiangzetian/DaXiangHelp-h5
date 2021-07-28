import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from 'vue-wechat-title'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import uploader from 'vue-simple-uploader'
import VueTouch from 'vue-touch'


Vue.use(uploader)
Vue.use(Vuetify)
Vue.use(VueWechatTitle)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
