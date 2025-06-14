<template>
  <header class="flex items-center justify-between p-4 bg-white shadow-md z-50 relative">
    
    <!-- Flèche retour uniquement sur page profil -->
    <button v-if="isProfilePage" @click="goBack">
      <i class="fas fa-arrow-left text-xl text-noir"></i>
    </button>

    <!-- Logo centré -->
    <img src="/icons/logo-easi.png" alt="Logo EASI" class="h-10 mx-auto" />

    <!-- À droite : soit paramètres soit profil -->
    <button v-if="isProfilePage" @click="goSettings">
      <i class="fas fa-cog text-xl text-violet"></i>
    </button>
    <button v-else @click="goToProfile">
      <i class="fas fa-user text-xl text-violet"></i>
    </button>

  </header>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

// C'est ça qui rend réactif au changement de page
const isProfilePage = computed(() => route.path === '/profil')

function goBack() {
  router.push('/')
}

function goSettings() {
  router.push('/parametres')
}

function goToProfile() {
  router.push('/profil')
}
</script>
