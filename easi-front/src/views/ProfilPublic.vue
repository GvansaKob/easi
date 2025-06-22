<template>
    <div class="p-6 flex flex-col gap-6 items-center">
        <!-- Boutons -->
        <div class="w-full flex flex-col gap-7 mt-6">
            <BaseButton @click="router.push('/register')">S’inscrire</BaseButton>
            <BaseButton @click="router.push('/login')">Se connecter</BaseButton>
        </div>

        <!-- Bloc d'aide -->
        <div class="my-">
            <BlocAide />
        </div>
        <!-- Contacts -->
        <div class="grid grid-cols-2 gap-6 w-full justify-items-center text-center text-sm mt-4">
            <div class="flex flex-col items-center gap-2">
                <i class="text-3xl">📞</i>
                <p class="text-violet font-large">+33 7 72 82 92 72</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <i class="text-3xl">✉️</i>
                <p class="text-violet font-large">easi@contact.com</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { authService } from '@/services/authService'
import BlocAide from '@/components/BlocAide.vue'
import BaseButton from '@/components/BaseButton.vue'


const router = useRouter()

onMounted(() => {
    if (authService.isLoggedIn()) {
        router.push('/mon-profil')
    }
})
</script>
