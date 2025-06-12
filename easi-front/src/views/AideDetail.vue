<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { API_URL } from '../config'

const route = useRoute()
const aide = ref(null)

onMounted(async () => {
  const response = await fetch(`${API_URL}/aides/${route.params.id}`)
  if (response.ok) {
    aide.value = await response.json()
  }
})
</script>

<template>
  <div v-if="aide" class="bg-white min-h-screen flex flex-col">

    <!-- Titre de l'aide -->
    <div class="bg-violet text-white text-center py-6">
      <h1 class="text-2xl font-titre font-bold">{{ aide.titre }}</h1>
    </div>

    <!-- Description -->
    <div class="p-4 text-violet font-textse text-sm leading-relaxed">
      {{ aide.description }}
    </div>

    <!-- Conditions d'éligibilité -->
    <div class="px-4 py-2">
      <h2 class="font-titre text-violet text-lg mb-2">Conditions pour avoir l’aide :</h2>
      <div class="bg-gray-100 rounded-xl p-3">
        <p class="font-textse text-sm whitespace-pre-line">{{ aide.conditions_eligibilite }}</p>
      </div>
    </div>

    <!-- Documents -->
    <div v-if="aide.documents" class="px-4 py-2">
      <h2 class="font-titre text-violet text-lg mb-2">Documents à fournir :</h2>
      <div class="bg-gray-100 rounded-xl p-3">
        <ul class="list-disc pl-5 font-textse text-sm">
          <li v-for="doc in aide.documents.split(',')" :key="doc">{{ doc.trim() }}</li>
        </ul>
      </div>
    </div>

    <!-- Lien externe -->
    <div class="px-4 py-5">
      <a :href="aide.lien_externe" target="_blank"
        class="block text-center bg-violet text-white font-titre rounded-lg py-3 shadow">
        Faire la démarche
      </a>
    </div>

  </div>
</template>
