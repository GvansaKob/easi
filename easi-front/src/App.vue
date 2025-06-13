<template>
  <div class="bg-white min-h-screen flex flex-col pb-14"> <!-- on déplace le padding ici -->
    <Header />

    <main class="flex-grow p-4">
      <router-view />
    </main>
    <div class="text-center text-xs text-noir/60 mt-4 pb-2">
      <router-link to="/cgu">CGU</router-link> · <router-link to="/mentions-legales">Mentions légales</router-link>
    </div>
    <BottomNav />
  </div>


</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BottomNav from '@/components/BottomNav.vue'
</script>
