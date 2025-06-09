<script setup>
import { ref, onMounted } from 'vue';
import { API_URL } from '../config'; 

const aides = ref([]);

const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
const response = await fetch(`${API_URL}/aides`)
    if (!response.ok) throw new Error('Erreur lors de la récupération des aides');
    const data = await response.json();
    aides.value = data; 
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false; 
  }
});
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold text-noir font-titre mb-6">
      Liste des aides disponibles
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="aide in aides"
        :key="aide.id"
        class="bg-gray-100 rounded-2xl p-4 h-[160px] shadow-sm overflow-hidden"
      >
        <!-- Titre violet, police titre -->
        <h3 class="text-violet font-titre font-bold text-base mb-2">
          {{ aide.titre }}
        </h3>

        <!-- Description violet clair, police texte secondaire, coupe à 3 lignes -->
        <p class="text-violet/70 text-sm font-textse leading-snug line-clamp-3">
          {{ aide.description }}
        </p>
      </div>
    </div>
  </div>
</template>
