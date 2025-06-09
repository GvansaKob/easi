<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold text-violet font-titre mb-6">
      Liste des aides disponibles
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <CarteAide v-for="aide in aides" :key="aide.id" :aide="aide" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { API_URL } from '../config'
import CarteAide from './CarteAide.vue'

const aides = ref([])
const isLoading = ref(true)

onMounted(async () => {
  const response = await fetch(`${API_URL}/aides`)
  if (response.ok) {
    aides.value = await response.json()
  }
  isLoading.value = false
})
</script>
