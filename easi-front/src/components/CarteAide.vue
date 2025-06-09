<template>
  <div
    class="bg-gray-100 rounded-2xl p-4 h-[160px] shadow-md overflow-hidden"
  >
    <h3 class="text-violet font-titre font-bold text-lg mb-2">
      {{ aide.titre }}
    </h3>
    <p class="text-violet/80 text-sm font-textse leading-snug line-clamp-3">
      {{ aide.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  aide: {
    type: Object,
    required: true
  }
})
</script>
