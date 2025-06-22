<template>
  <div class="p-6 flex flex-col gap-6">
    <!-- Titre -->
    <h1 class="text-3xl font-bold text-black">Se connecter</h1>

    <!-- Champ e-mail -->
    <input v-model="email" type="email" placeholder="Adresse e-mail"
      class="w-full p-4 border border-gray-300 rounded-lg text-base" />

    <!-- Champ mot de passe avec œil -->
    <div class="relative w-full">
      <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Mot de passe"
        class="w-full p-4 border border-gray-300 rounded-lg text-base" />
      <button type="button" class="absolute right-4 top-4 text-gray-500" @click="togglePassword">
        <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
      </button>
    </div>

    <!-- Bouton -->
    <BaseButton class="mt-2" @click="login">Me connecter</BaseButton>


    <!-- Mention CGU -->
    <p class="text-center text-sm text-black mt-10">
      En créant un compte ou en vous inscrivant, vous acceptez nos
      <span @click="showModal = true" class="underline font-bold cursor-pointer">
        conditions générales
      </span>
    </p>

    <!-- Modale -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-sm w-full shadow">
        <h2 class="text-xl font-semibold mb-4">Conditions générales</h2>
        <p class="text-sm text-gray-700">
          Voici un exemple de texte pour les CGU. Vous pourrez le modifier plus tard avec les vraies conditions.
        </p>
        <div class="text-right mt-4">
          <button @click="showModal = false" class="text-violet-600 font-semibold">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import { authService } from '@/services/authService'
import { useRouter } from 'vue-router'


const email = ref('')
const password = ref('')
const showPassword = ref(false)
const showModal = ref(false)
const router = useRouter()

function togglePassword() {
  showPassword.value = !showPassword.value
}

async function login() {
  if (!email.value || !password.value) {
    alert('Veuillez remplir tous les champs.')
    return
  }

  try {
    await authService.login({
      email: email.value,
      mot_de_passe: password.value
    })


    router.push('/mon-profil')
  } catch (err) {
    alert(err.message || 'Erreur lors de la connexion')
  }
}


</script>
