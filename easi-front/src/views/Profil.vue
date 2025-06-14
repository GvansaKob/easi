<template>
  <div class="min-h-screen bg-white flex flex-col items-center pt-6">

    <!-- Image de profil -->
    <div class="relative w-24 h-24 rounded-full border-4 border-violet overflow-hidden flex items-center justify-center">
      <img v-if="user.image" :src="user.image" class="object-cover w-full h-full" />
      <i v-else class="fas fa-user text-5xl text-violet flex items-center justify-center h-full"></i>

      <input type="file" accept="image/*" capture="environment" class="absolute inset-0 opacity-0 cursor-pointer" @change="handleImageUpload">
    </div>

    <!-- Infos utilisateur -->
    <div class="text-center font-textse">
      <p class="text-xl text-black font-titre font-bold mt-3">{{ user.nom }} {{ user.prenom }} </p>
      <p class="text-violet italic">{{ user.statut }}</p>
    </div>

    <!-- Bouton modifier -->
    <button class="mt-3 py-2 px-4 bg-vert text-violet rounded-2xl">
      Modifier mon profil
    </button>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { userService } from '@/services/userService'

const user = ref({
  nom: '',
  prenom: '',
  statut: '',
  image: ''
})

onMounted(async () => {
  try {
    const response = await userService.getProfile()
    user.value = response
  } catch (e) {
    console.error("Erreur lors de la récupération du profil:", e)
  }
})


function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      user.value.image = reader.result
    }
    reader.readAsDataURL(file)
  }
}
</script>
