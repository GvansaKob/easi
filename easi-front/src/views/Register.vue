<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Inscription</h1>

    <form @submit.prevent="handleRegister">
      <input v-model="form.nom" type="text" placeholder="Nom" required class="input"/>
      <input v-model="form.prenom" type="text" placeholder="Prénom" required class="input"/>
      <input v-model="form.email" type="email" placeholder="Email" required class="input"/>
      <input v-model="form.mot_de_passe" type="password" placeholder="Mot de passe" required class="input"/>
      <input v-model="form.date_de_naissance" type="date" required class="input"/>
      <input v-model="form.statut" type="text" placeholder="Statut" required class="input"/>

      <button type="submit" class="btn">S'inscrire</button>
    </form>

    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { authService } from '@/services/authService'

const form = ref({
  nom: '',
  prenom: '',
  email: '',
  mot_de_passe: '',
  date_de_naissance: '',
  statut: ''
})

const error = ref('')

async function handleRegister() {
  try {
    await authService.register(form.value);
    alert("Inscription réussie !");
  } catch (e) {
    error.value = e.message;
  }
}
</script>
