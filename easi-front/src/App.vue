<template>
  <div class="bg-white min-h-screen flex flex-col pb-14">
    <Header v-if="!hideLayout.includes(route.name)" />

    <main class="flex-grow p-4">
      <router-view />
    </main>

    <div v-if="!hideLayout.includes(route.name)" class="text-center text-xs text-noir/60 mt-4 pb-2">
      <router-link to="/cgu">CGU</router-link> · <router-link to="/mentions-legales">Mentions légales</router-link>
    </div>

    <BottomNav v-if="!hideLayout.includes(route.name)" />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import BottomNav from '@/components/BottomNav.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hideLayout = ['Anim'] // Ne pas afficher Header/Footer sur cette page
</script>
