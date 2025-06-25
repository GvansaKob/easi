<script setup>
import CarteAide from '@/components/CarteAide.vue'
import { ref, onMounted } from 'vue'
import { API_URL } from '../config'

const aides = ref([])

onMounted(async () => {
  console.log("API_URL =", API_URL) // 👈 ajoute cette ligne
  const categorie = encodeURIComponent('Financière');
  const response = await fetch(`${API_URL}/aides/categorie/${categorie}`);
  if (response.ok) {
    aides.value = await response.json();
  }
})

</script>

<template>
  <div class="bg-white min-h-screen flex flex-col">

    <!-- Titre catégorie -->
    <div class="bg-violet text-white text-center py-6">
      <h1 class="text-2xl font-titre font-bold">Les aides financières</h1>
    </div>

    <!-- Chemin de navigation -->
    <div class="px-4 pt-3 pb-5 text-sm text-noir font-textse">
      Aides &gt; <span class="font-bold">Aides financière</span>
    </div>

    <!-- Liste des aides -->
    <div class="px-4 pb-8 grid grid-cols-1 gap-6">
      <CarteAide v-for="aide in aides" :key="aide.id" :aide="aide" />
    </div>

  </div>
</template>
