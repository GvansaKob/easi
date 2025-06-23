<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
      <p class="text-lg text-gray-700 mb-6">
        Pour accéder à vos favoris, veuillez vous connecter à votre compte.
      </p>

      <!-- Bouton violet personnalisé -->
      <BaseButton @click="goToLogin">Se connecter</BaseButton>

      <!-- Bouton Fermer en dessous -->
      <button @click="closeModal" class="mt-6 font-bold text-black-500 hover:text-black-700">
        Fermer
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'

const visible = ref(false)
const router = useRouter()

// Écouteur de l'événement CustomEvent
onMounted(() => {
  window.addEventListener('show-login-modal', () => {
    visible.value = true
  })
})

// Ferme la modale sans redirection
function closeModal() {
  visible.value = false
}

// Redirection vers login
function goToLogin() {
  visible.value = false
  router.push('/login')
}
</script>
