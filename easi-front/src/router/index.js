import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AidesFinanciere from '@/views/AidesFinanciere.vue'
import AidesLogement from '@/views/AidesLogement.vue'
import AidesTransport from '@/views/AidesTransport.vue'
import AidesSante from '@/views/AidesSante.vue'
import AidesAlimentaire from '@/views/AidesAlimentaire.vue'
import AidesToutDeLaVie from '@/views/AidesToutDeLaVie.vue'
import AideDetail from '@/views/AideDetail.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/aides/financiere', component: AidesFinanciere },
  { path: '/aides/logement', component: AidesLogement },
  { path: '/aides/transport', component: AidesTransport },
  { path: '/aides/sante', component: AidesSante },
  { path: '/aides/alimentaire', component: AidesAlimentaire },
  { path: '/aides/toutdelavie', component: AidesToutDeLaVie },
  { path: '/aide/:id',name: 'AideDetail', component: AideDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
