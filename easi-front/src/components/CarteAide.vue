<template>
  <div class="relative group">
    <router-link :to="`/aide/${aide.id}`" class="block">
      <div
        class="bg-gray-100 rounded-2xl p-4 h-[145px] shadow-md overflow-hidden transition duration-300 group-hover:bg-violet group-hover:text-white"
      >
        <h3 class="text-violet font-titre font-bold text-lg mb-2 group-hover:text-white">
          {{ aide.titre }}
        </h3>
        <p class="text-black/80 text-sm font-textse leading-snug line-clamp-3 group-hover:text-white">
          {{ aide.description }}
        </p>
      </div>
    </router-link>

    <!-- Bouton cœur -->
    <button
      class="absolute top-2 right-3 z-10"
      @click.stop="handleHeartClick"
    >
      <i
        :class="[
          'fa-heart text-xl transition duration-200',
          isFavori ? 'fas text-red-500' : 'far text-violet'
        ]"
      ></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { API_URL } from '@/config'
import { authService } from '@/services/authService'

const props = defineProps({
  aide: {
    type: Object,
    required: true
  }
})

const isFavori = ref(false)
const userId = authService.getUserId()

onMounted(async () => {
  if (userId) {
    const res = await fetch(`${API_URL}/favoris/check/${userId}/${props.aide.id}`)
    isFavori.value = await res.json()
  }
})

async function handleHeartClick() {
  const userId = authService.getUserId()

  if (!userId) {
    // déclenche la modale de connexion
    window.dispatchEvent(new CustomEvent('show-login-modal'))
    return
  }

  // Ajoute ou retire le favori
  const method = isFavori.value ? 'DELETE' : 'POST'
  const res = await fetch(`${API_URL}/favoris/${userId}/${props.aide.id}`, { method })

  if (res.ok) {
    isFavori.value = !isFavori.value
  }
}
</script>
