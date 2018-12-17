import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import modal from '../views/modal'
import input from '../views/input'


Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    redirect: '/modal'
  },
  {
    path: '/home',
    name: home,
    component: home
  },
  {
    path: '/modal',
    name: modal,
    component: modal
  }]
})


export default router