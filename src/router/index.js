import Vue from 'vue'
import VueRouter from 'vue-router'
import app1 from "../components/app1";
import app2 from "../components/app2";
import app3 from "../components/app3";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app1',
    component: app1
  },
  {
    path: '/app2',
    name: 'app2',
    component: app2
  },
  {
    path: '/app3',
    name: 'app3',
    component: app3
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
