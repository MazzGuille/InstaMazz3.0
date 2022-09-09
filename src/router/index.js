import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Registro from '@/views/Registro.vue'
import Feed from '@/views/Feed.vue'
import Profile from '@/views/Profile.vue'
import Search from '@/views/Search.vue'
import Chatt from '@/views/Chatt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/Login",
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/Feed',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Chatt',
      name: 'Chatt',
      component: Chatt
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    

  ]
})

export default router
