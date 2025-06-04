<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-violet mb-4">Liste des aides disponibles</h2>
    <div class="grid gap-4">
      <div
        v-for="aide in aides"
        :key="aide.id"
        class="bg-blanc shadow-md p-4 rounded-lg border border-violet"
      >
        <h3 class="text-xl font-bold text-noir">{{ aide.nom }}</h3>
        <p class="text-gray-700 mt-2">{{ aide.description }}</p>
        <span class="text-sm text-vert font-medium mt-1 block">{{ aide.categorie }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { aides } from '@/data/aides.js'
</script>
