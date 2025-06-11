<template>
  <div class="bg-white min-h-screen flex flex-col pb-14"> <!-- on déplace le padding ici -->
    <Header />

    <main class="flex-grow p-4">
      <router-view />
    </main>

    <Footer />
    <BottomNav />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BottomNav from '@/components/BottomNav.vue'
</script>
