<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// on importe aussi la future carte
import CartesAides from '@/components/CartesAides.vue'

// Simuler les données pour l'instant :
const aides = [
  { id: 1, nom: "Bourse sur critères sociaux (BCS)", description: "La BCS est une aide financière donnée aux étudiants selon les revenus de leurs parents." },
  { id: 2, nom: "Aide spécifique annuelle (ASAA)", description: "L'ASAA est une aide pour les étudiants en difficulté qui ne peuvent pas avoir la bourse classique." },
  { id: 3, nom: "Prime d'équipement", description: "Pour les étudiants qui doivent déménager pour poursuivre leurs études." },
  // etc.
]
</script>

<template>
  <div class="bg-blanc min-h-screen flex flex-col">
    <Header />
    
    <main class="flex-grow p-4">
      <div class="bg-violet text-white py-4 text-center font-titre text-xl">
        Les aides financières
      </div>

      <div class="p-4">
        <div class="flex flex-col gap-4">
          <CartesAides v-for="aide in aides" :key="aide.id" :aide="aide" />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
