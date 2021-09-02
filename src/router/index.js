import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import ourService from '../views/ourService.vue'
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/our-service',
    name: 'Our service',
    component: ourService,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
