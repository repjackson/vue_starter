import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import colors from 'vuetify/es5/util/colors'
import { createProvider } from './vue-apollo'


Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')


Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.blue.darken3,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})
