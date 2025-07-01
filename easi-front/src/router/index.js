import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Parametres from '@/views/Parametres.vue'
import Profil from '@/views/Profil.vue'
import Anim from '@/views/Anim.vue'
import ProfilPublic from '@/views/ProfilPublic.vue'
import { authService } from '@/services/authService'
import AidesFinanciere from '@/views/AidesFinanciere.vue'
import AidesTransport from '@/views/AidesTransport.vue'
import AidesAlimentaire from '@/views/AidesAlimentaire.vue'
import AidesLogement from '@/views/AidesLogement.vue'
import AidesSante from '@/views/AidesSante.vue'
import AidesVie from '@/views/AidesToutDeLaVie.vue'
import Search from '@/views/Search.vue'
import Favorites from '@/views/Favorites.vue'
import Contact from '@/views/Contact.vue'
import AideDetail from '@/views/AideDetail.vue'



const routes = [
  { path: '/', name: 'Anim', component: Anim },
  { path: '/home', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profil', name: 'ProfilPublic', component: ProfilPublic },
  { path: '/parametres', name: 'Parametres', component: Parametres, meta: { requiresAuth: true } },
  { path: '/mon-profil', name: 'Profil', component: Profil, meta: { requiresAuth: true } },
  { path: '/aides-financiere', name: 'AidesFinanciere', component: AidesFinanciere },
  { path: '/aides-transport', name: 'AidesTransport', component: AidesTransport },
  { path: '/aides-alimentaire', name: 'AidesAlimentaire', component: AidesAlimentaire },
  { path: '/aides-logement', name: 'AidesLogement', component: AidesLogement },
  { path: '/aides-sante', name: 'AidesSante', component: AidesSante },
  { path: '/aides-vie', name: 'AidesVie', component: AidesVie },
  { path: '/search', name: 'Search', component: Search },
  { path: '/aide/:id', name: 'AideDetail', component: AideDetail },
  { path: '/favorites', name: 'Favorites', component: Favorites, meta: { requiresAuth: true } },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isLoggedIn()

  if (to.path === '/home' && !sessionStorage.getItem('easiSplashPlayed')) {
    return next({ name: 'Anim' })
  }

  if (to.path === '/' && sessionStorage.getItem('easiSplashPlayed')) {
    return next({ name: 'Home' })
  }

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'Login' })
  }

  next()
})


export default router
