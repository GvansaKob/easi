<script setup>
import CarteAide from '@/components/CarteAide.vue'
import { ref, onMounted } from 'vue'
import { API_URL } from '../config'

const aides = ref([])

onMounted(async () => {
  const response = await fetch(`${API_URL}/aides`)
  if (response.ok) {
    aides.value = await response.json()
  }
})
</script>

<template>
  <div class="bg-white min-h-screen flex flex-col">

    <div class="bg-violet text-white text-center py-6">
      <h1 class="text-2xl font-titre font-bold">Les aides "Tout de la vie"</h1>
    </div>

    <div class="px-4 py-2 text-sm text-noir font-textse">
      Aides &gt; <span class="font-bold">Tout de la vie</span>
    </div>

    <div class="px-4 pb-8 grid grid-cols-1 gap-4">
      <CarteAide v-for="aide in aides" :key="aide.id" :aide="aide" />
    </div>
    
  </div>
</template>
