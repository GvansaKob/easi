<template>
    <div class="p-6 flex flex-col gap-6">
        <!-- Barre de recherche -->
        <input v-model="searchQuery" type="text" placeholder="Recherchez des aides, catégories..."
            class="w-full p-4 border border-gray-300 rounded-lg text-base bg-white" />

        <!-- Résultats d’aide (si recherche) -->
        <div v-if="searchQuery && searchResults.length > 0" class="flex flex-col gap-4 mt-4">
            <h2 class="text-lg font-bold">Résultats pour "{{ searchQuery }}"</h2>
            <CarteAide v-for="aide in searchResults" :key="aide.id" :aide="aide" />

        </div>

        <!-- Message aucun résultat -->
        <div v-else-if="searchQuery && searchResults.length === 0" class="text-gray-500 italic">
            Aucun résultat pour « {{ searchQuery }} »
        </div>

        <!-- Catégories affichées en permanence -->
        <div class="flex flex-col gap-5 mt-8">
            <div v-for="categorie in categories" :key="categorie.nom"
                class="flex items-center gap-8 font-titre bg-violet text-white rounded-xl shadow-md px-4 py-3 cursor-pointer"
                @click="goToCategorie(categorie.route)">
                <img :src="`/icons/${categorie.picto}.png`" alt="" class="w-11 h-11 mr-5" />
                <span class="text-lg font-bold">{{ categorie.nom }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { API_URL } from '@/config'
import CarteAide from '@/components/CarteAide.vue'


const router = useRouter()

const searchQuery = ref('')
const searchResults = ref([])

const categories = [
    { nom: 'Aide financière', picto: 'picto-carte', route: '/aides-financiere' },
    { nom: 'Aide au transport', picto: 'picto-bus', route: '/aides-transport' },
    { nom: 'Aide alimentaire', picto: 'picto-couvert', route: '/aides-alimentaire' },
    { nom: 'Aide au logement', picto: 'picto-maison', route: '/aides-logement' },
    { nom: 'Aide à la santé', picto: 'picto-coeur', route: '/aides-sante' },
    { nom: 'Tout de la vie', picto: 'picto-vie', route: '/aides-vie' }
]

// Navigation vers la page de catégorie
function goToCategorie(route) {
    router.push(route)
}

// Lancer la recherche à chaque changement du champ
watch(searchQuery, async (query) => {
    if (!query.trim()) {
        searchResults.value = []
        return
    }

    try {
        const res = await fetch(`${API_URL}/aides/recherche/${encodeURIComponent(query)}`)
        if (res.ok) {
            searchResults.value = await res.json()
        } else {
            searchResults.value = []
        }
    } catch (err) {
        console.error('Erreur de recherche :', err)
        searchResults.value = []
    }
})
</script>
