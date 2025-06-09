import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageCategorie from '../views/PageCategorie.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/categorie',
    name: 'categorie',
    component: PageCategorie
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
