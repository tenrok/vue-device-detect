import Vue from 'vue'
import App from './App.vue'

import VueDeviceDetect from '../lib'
Vue.use(VueDeviceDetect)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
