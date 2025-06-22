<template>
  <button
    class="w-80 mx-auto block py-3 px-4 rounded-lg bg-violet text-white font-bold text-center active:bg-vert transition duration-200"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

function onClick(event) {
  emit('click', event)
}
</script>
