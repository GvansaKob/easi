<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Connexion</h1>

    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required class="input"/>
      <input v-model="mot_de_passe" type="password" placeholder="Mot de passe" required class="input"/>

      <button type="submit" class="btn">Se connecter</button>
    </form>

    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { authService } from '@/services/authService'

const email = ref('')
const mot_de_passe = ref('')
const error = ref('')

async function handleLogin() {
  try {
    await authService.login({ email: email.value, mot_de_passe: mot_de_passe.value });
    alert("Connexion réussie !");
  } catch (e) {
    error.value = e.message;
  }
}
</script>
