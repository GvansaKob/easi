<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-violet text-white h-16 z-50 border-t border-white">
    <div class="flex justify-around items-center h-full">
      <button @click="goTo('home')" class="nav-item" :class="isActive('home')">
        <i class="fas fa-home icon"></i>
        <span class="label">Accueil</span>
      </button>

      <button @click="goTo('search')" class="nav-item" :class="isActive('search')">
        <i class="fas fa-search icon"></i>
        <span class="label">Recherche</span>
      </button>

      <button @click="goTo('favorites')" class="nav-item" :class="isActive('favorites')">
        <i class="fas fa-heart icon"></i>
        <span class="label">Favoris</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goTo(page) {
  const map = {
    home: '/home',
    search: '/search',
    favorites: '/favorites'
  }
  router.push(map[page])
}

function isActive(page) {
  const map = {
    home: '/home',
    search: '/search',
    favorites: '/favorites'
  }
  return route.path === map[page] ? 'active' : ''
}

</script>

<style scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 85%;
  transition: all 0.3s;
}

.icon {
  font-size: 24px;
}

.label {
  font-size: 10px;
  margin-top: 4px;
}

.active {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 4px;
}
</style>
