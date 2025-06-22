<template>
  <div class="min-h-screen bg-white flex flex-col items-center pt-6">

    <!-- Image de profil -->
    <div class="relative w-24 h-24 rounded-full border-4 border-violet overflow-hidden flex items-center justify-center">
      <img v-if="user.image" :src="getImageUrl(user.image)" class="object-cover w-full h-full" />
      <i v-else class="fas fa-user text-5xl text-violet flex items-center justify-center h-full"></i>
    </div>

    <!-- Infos utilisateur / Formulaire -->
    <div class="text-center font-textse mt-4">
      <template v-if="!isEditing">
        <p class="text-xl font-titre font-bold text-black">{{ user.nom }} {{ user.prenom }}</p>
        <p class="text-violet italic">{{ user.statut }}</p>
      </template>
      <template v-else>
        <input v-model="editableUser.nom" class="border px-2 py-1 mb-1 rounded w-48" placeholder="Nom" />
        <input v-model="editableUser.prenom" class="border px-2 py-1 mb-1 rounded w-48" placeholder="Prénom" />
        <input v-model="editableUser.statut" class="border px-2 py-1 mb-1 rounded w-48" placeholder="Statut" />
      </template>
    </div>

    <!-- Boutons -->
    <div class="mt-4">
      <button
        v-if="!isEditing"
        @click="startEdit"
        class="py-2 px-4 bg-vert text-violet rounded-2xl"
      >
        Modifier mon profil
      </button>
      <div v-else>
        <button @click="saveChanges" class="py-2 px-4 bg-violet text-white rounded-2xl mr-2">Enregistrer</button>
        <button @click="cancelEdit" class="py-2 px-4 bg-gray-300 text-black rounded-2xl">Annuler</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { userService } from '@/services/userService'
import { API_URL } from '@/config'

const user = ref({ nom: '', prenom: '', statut: '', image: '' })
const editableUser = ref({})
const isEditing = ref(false)

onMounted(async () => {
  try {
    const data = await userService.getProfile()
    user.value = data
  } catch (e) {
    console.error("Erreur lors de la récupération du profil :", e)
  }
})

function startEdit() {
  editableUser.value = { ...user.value }
  isEditing.value = true
}

function cancelEdit() {
  isEditing.value = false
}

async function saveChanges() {
  try {
    const updated = await userService.updateProfile(editableUser.value)
    user.value = updated
    isEditing.value = false
  } catch (e) {
    console.error("Erreur lors de la mise à jour :", e)
    alert("Erreur lors de la mise à jour.")
  }
}

function getImageUrl(imagePath) {
  if (!imagePath) return ''
  return imagePath.startsWith('http') ? imagePath : `${API_URL}/uploads/${imagePath}`
}
</script>
