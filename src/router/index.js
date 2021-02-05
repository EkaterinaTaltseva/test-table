import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Table from '@/views/Table'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '*', redirect: '/' },
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

export default router
