<template>
  <header class="flex items-center justify-between p-4 bg-white shadow-md z-50 relative">

    <button v-if="showBackButton" @click="goBack">
      <i class="fas fa-arrow-left text-xl text-violet"></i>
    </button>

    <img :src="logoUrl" alt="Logo EASI" class="h-10 mx-auto" />

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
import { authService } from '@/services/authService'

const logoUrl = new URL('/icons/logo-easi.png', import.meta.url).pathname

const router = useRouter()
const route = useRoute()

const isAuthPage = computed(() => ['/login', '/register'].includes(route.path))
const isProfilePage = computed(() => ['/profil', '/mon-profil'].includes(route.path))
const mainPages = ['/', '/home', '/search', '/favorites']

const showBackButton = computed(() =>
  !mainPages.includes(route.path)
)

function goBack() {
  if (isAuthPage.value) {
    router.push('/profil')
  } else if (route.path === '/profil') {
    router.push('/home') 
  } else {
    router.back()
  }
}

function goSettings() {
  router.push('/parametres')
}

function goToProfile() {
  if (authService.isLoggedIn()) {
    router.push('/mon-profil')
  } else {
    router.push('/profil')
  }
}
</script>
