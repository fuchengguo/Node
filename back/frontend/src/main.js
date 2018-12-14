// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import * as uiv from 'uiv'
import locale from 'uiv/src/locale/lang/zh-CN'
Vue.use(uiv,{locale})

Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
	next()
	
})
router.onError(() => {
	console.log(1)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
