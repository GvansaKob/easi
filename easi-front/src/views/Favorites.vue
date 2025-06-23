<template>
  <div class="p-6 text-center">
    <h1 class="text-2xl font-bold text-violet font-titre mb-6">Mes Favoris</h1>
    <p>Retrouve toutes les aides que tu as mises en favoris, lance tes démarches sans attendre !
 <br><br></p>

    <div v-if="!isLoggedIn" class="mt-10">
      <p class="text-lg text-black mb-4">Tu n’as pas encore d’aides.</p>
      <p class="text-black mb-6">Connecte toi pour en ajouter !</p>
      <button
        class="bg-violet text-white text-lg font-semibold px-6 py-2 rounded-xl shadow-md"
        @click="router.push('/login')"
      >
        Se connecter
      </button>
    </div>

    <div v-else-if="aides.length === 0" class="text-gray-500 italic mt-10">
      Tu n'as pas encore d'aides en favoris !
    </div>

    <div v-else class="flex flex-col gap-6 mt-6">
      <CarteAide v-for="aide in aides" :key="aide.id" :aide="aide.aide" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CarteAide from '@/components/CarteAide.vue'
import { authService } from '@/services/authService'
import { useRouter } from 'vue-router'
import { API_URL } from '@/config'


const router = useRouter()
const aides = ref([])
const isLoggedIn = authService.isLoggedIn()

onMounted(async () => {
  const userId = authService.getUserId()
  if (!userId) return
  const res = await fetch(`${API_URL}/favoris/${userId}`)
  if (res.ok) {
    aides.value = await res.json()
  }
})
</script>
