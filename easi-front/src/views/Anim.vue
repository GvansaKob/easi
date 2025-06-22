<template>
  <div class="flex items-center justify-center h-screen bg-white">
    <transition name="fade" mode="out-in">
      <img
        :src="currentLogo"
        :key="currentLogo"
        class="w-32 h-32 transition-transform duration-1000 ease-in-out"
        :class="{ 'rotate-360': isRotating }"
        alt="EASI Logo"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentLogo = ref('/icons/logo-easi.png')
const isRotating = ref(false)

onMounted(() => {
  setTimeout(() => {
    isRotating.value = true

    setTimeout(() => {
      currentLogo.value = '/icons/logo-picto.png'

      setTimeout(() => {
        router.push('/home')
      }, 1200)
    }, 800)
  }, 500)
})
</script>

<style scoped>
.rotate-360 {
  transform: rotate(360deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
