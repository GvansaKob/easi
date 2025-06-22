<template>
  <router-link :to="`/aide/${aide.id}`" class="block group">
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
</template>

<script setup>
defineProps({
  aide: {
    type: Object,
    required: true
  }
})
</script>
