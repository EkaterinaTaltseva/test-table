import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Table from '@/views/Table'

Vue.use(VueRouter)

const routes = [
  { path: '/',
    component: Login,
    name: 'login',
    meta: { requiresAuth: false }
  },
  {
    path: '*',
    redirect: '/' },
  {
    path: '/table',
    component: Table,
    name: 'table',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach ((to, from, next) => {
    if (to.name !== 'login' && from.meta.requiresAuth !== true) next( {name: 'login'})
    else next()
})


export default router
