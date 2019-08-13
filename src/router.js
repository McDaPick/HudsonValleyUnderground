import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hello from './views/Hello.vue'
import Bands from './views/Bands.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/bands',
      name: 'bands',
      component: Bands
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
