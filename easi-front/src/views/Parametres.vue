<template>
  <div class="p-6 space-y-8">

    <div class="space-y-4">
      <router-link to="/cgu" class="block text-blue-600 underline">Conditions Générales d’Utilisation</router-link>
      <router-link to="/mentions-legales" class="block text-blue-600 underline">Mentions légales</router-link>
    </div>

    <div class="pt-8">
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
