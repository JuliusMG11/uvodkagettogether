import Vue from 'vue'
import App from './App.vue'
import router from './router'

// typical import
import gsap from "gsap";

import './scss/_variables.scss'
import './scss/_responsive.scss'
import './scss/_base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  gsap,
  render: (h) => h(App),
}).$mount('#app')
