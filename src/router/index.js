import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },{
    path:'/qualification',
    name:'Qualification',
    component:() =>import('../views/Qualification.vue')
  },{
    path:'/contact',
    name:'ContactUs',
    component:() =>import('../views/ContactsUs.vue')
  },
  {
    path:'/certification',
    name:'Certification',
    component:() => import('../views/Certification.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
