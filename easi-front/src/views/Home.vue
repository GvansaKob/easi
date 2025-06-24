<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <div>

    <main class="p-4 flex flex-col items-center gap-4">
      <p class="text-xl font-bold">Bienvenue sur EASI 👋</p>

      <!-- 🚀 Lien temporaire vers une page d’aide -->
      <router-link to="/aides-transport" class="py-3 px-6 bg-violet text-white rounded-lg shadow-md font-semibold">
        Accéder à l’aide Transport
      </router-link>

    </main>

  </div>
</template>
