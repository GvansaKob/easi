<template>
    <header class="flex items-center justify-between p-4 bg-white shadow-md z-50 relative">
        <img src="/icons/logo-easi.png" alt="Logo EASI" class="h-12" />

        <button @click="toggleMenu" class="text-3xl font-bold text-black cursor-pointer">
            ☰
        </button>

        <div v-if="isOpen"
            class="absolute top-full right-0 mt-2 mr-4 w-60 bg-white shadow-lg rounded-xl p-4 border border-gray-100">
            <!-- Section Les aides -->
            <div>
                <div @click="toggleAides"
                    class="flex justify-between items-center cursor-pointer font-titre text-lg mb-2">
                    <span>Les aides</span>
                    <span :class="{ 'rotate-180': aidesOpen }">⌄</span>
                </div>
                <ul v-if="aidesOpen" class="ml-2 space-y-1 font-textse text-sm">
                    <li><a href="#" class="text-noir">Financière</a></li>
                    <li><a href="#" class="text-noir">Logement</a></li>
                    <li><a href="#" class="text-noir">Transport</a></li>
                    <li><a href="#" class="text-noir">Santé</a></li>
                    <li><a href="#" class="text-noir">Alimentaire</a></li>
                    <li><a href="#" class="text-noir">“Tout de la vie”</a></li>

                </ul>
            </div>

            <!-- Section Contact -->
            <div class="mt-2">
                <a href="#" class="font-titre text-lg text-noir">Contact</a>
            </div>

            <!-- Section Mon compte -->
            <div class="mt-2">
                <a href="#" class="font-titre text-lg text-noir">Mon compte</a>
            </div>

        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const aidesOpen = ref(false)

function toggleMenu() {
    isOpen.value = !isOpen.value
    if (!isOpen.value) {
        aidesOpen.value = false
    }
}

function toggleAides() {
    aidesOpen.value = !aidesOpen.value
}
</script>
