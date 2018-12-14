import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
const HelloWorld = resolve => {
    require.ensure(['../components/HelloWorld.vue'], () => {
        resolve(require('../components/HelloWorld.vue'))
    })
}
const Home = resolve => {
    require.ensure(['@/components/home'], () => {
        resolve(require('@/components/home'))
    })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/home',
    	name: 'Home',
    	component: Home
    }
  ]
})
