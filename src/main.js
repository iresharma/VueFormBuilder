import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css';


import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})

import JsonViewer from 'vue-json-viewer'
 
// Import JsonViewer as a Vue.js plugin
Vue.use(JsonViewer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
