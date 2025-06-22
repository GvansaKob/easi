import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Parametres from '@/views/Parametres.vue'
import Profil from '@/views/Profil.vue'
import Anim from '@/views/Anim.vue'
import ProfilPublic from '@/views/ProfilPublic.vue'
import { authService } from '@/services/authService'

const routes = [
  { path: '/', name: 'Anim', component: Anim },
  { path: '/home', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profil', name: 'ProfilPublic', component: ProfilPublic },
  { path: '/parametres', name: 'Parametres', component: Parametres, meta: { requiresAuth: true } },
  { path: '/mon-profil', name: 'Profil', component: Profil, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isLoggedIn()

  // Rediriger /home vers / (animation) si pas encore jouée dans la session
  if (to.path === '/home' && !sessionStorage.getItem('easiSplashPlayed')) {
    return next({ name: 'Anim' })
  }

  // Rediriger / vers /home si déjà vu
  if (to.path === '/' && sessionStorage.getItem('easiSplashPlayed')) {
    return next({ name: 'Home' })
  }

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'Login' })
  }

  next()
})


export default router
