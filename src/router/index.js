import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Registro from '@/views/Registro.vue'

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

  ]
})

export default router
