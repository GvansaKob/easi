<template>
  <div class="flex flex-col items-center gap-4 bg-green-100 rounded-lg p-4 w-full">
    <div class="flex flex-row gap-4 items-center">
      <img
        :src="blocaide"
        alt="Vincent"
        class="w-50 h-50 object-cover rounded-md shadow"
      />
      <div class="text-sm text-left">
        <h2 class="text-2xl font-titre font-bold text-violet mb-1">Besoin d’aides ?</h2>
        <p>Vincent peut vous guider dans vos démarches !</p>
        <p class="mt-2 text-xs text-black/60">
          L’appel coûte 2 €, peu importe le temps passé, mais le contact par mail reste 100 % gratuit.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import blocaide from '@/assets/images/blocaide.png?url'
</script>
