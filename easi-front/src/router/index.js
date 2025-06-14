import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AidesFinanciere from '@/views/AidesFinanciere.vue'
import AidesLogement from '@/views/AidesLogement.vue'
import AidesTransport from '@/views/AidesTransport.vue'
import AidesSante from '@/views/AidesSante.vue'
import AidesAlimentaire from '@/views/AidesAlimentaire.vue'
import AidesToutDeLaVie from '@/views/AidesToutDeLaVie.vue'
import AideDetail from '@/views/AideDetail.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

// On import le service d'authentification
import { authService } from '@/services/authService'

// Ici tu pourras bientôt importer tes autres pages
// import Profil from '@/views/Profil.vue'
// import Favorites from '@/views/Favorites.vue'
// import Search from '@/views/Search.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/aides/financiere', component: AidesFinanciere },
  { path: '/aides/logement', component: AidesLogement },
  { path: '/aides/transport', component: AidesTransport },
  { path: '/aides/sante', component: AidesSante },
  { path: '/aides/alimentaire', component: AidesAlimentaire },
  { path: '/aides/toutdelavie', component: AidesToutDeLaVie },
  { path: '/aide/:id', name: 'AideDetail', component: AideDetail },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// nav guard ajouter ici 
router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isLoggedIn()

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' }) // si user pas connecté redirige
  } else {
    next()
  }
})

export default router
