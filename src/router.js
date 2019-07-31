import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/login.vue')
    },
    {
      path: '/home',
      name: '/home',
      component: () => import('@/components/home.vue'),
      children: [
        {
          path: 'welcome',
          name: 'welcome',
          component: () => import('@/components/home/welcome.vue')
        },
        {
          path: 'Article',
          name:'Article',
          component: () => import('@/components/home/Article.vue')
        },
        {
          path: 'add',
          name: 'add',
          component: () => import('@/components/home/add.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
