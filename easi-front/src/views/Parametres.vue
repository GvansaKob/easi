<template>
  <div class="p-6">
    <h1 class="text-2xl font-titre mb-4">Paramètres</h1>

    <!-- Ici tu pourras plus tard ajouter d'autres options -->
    <div class="mt-8">
      <button @click="logout" class="w-full py-3 bg-red-500 text-white rounded-lg font-bold">
        Se déconnecter
      </button>
    </div>
  </div>
</template>

<script setup>
import { authService } from '@/services/authService'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  authService.logout()
  router.push('/login')
}
</script>
