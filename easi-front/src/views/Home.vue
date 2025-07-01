<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToRegister() {
  router.push('/register')
}

function goToLogin() {
  router.push('/login')
}

const categories = [
  { nom: 'Aide financière', picto: 'picto-carte', route: '/aides-financiere' },
  { nom: 'Aide au transport', picto: 'picto-bus', route: '/aides-transport' },
  { nom: 'Aide alimentaire', picto: 'picto-couvert', route: '/aides-alimentaire' },
  { nom: 'Aide au logement', picto: 'picto-maison', route: '/aides-logement' },
  { nom: 'Aide à la santé', picto: 'picto-coeur', route: '/aides-sante' },
  { nom: 'Tout de la vie', picto: 'picto-vie', route: '/aides-vie' },
]

function goToCategorie(route) {
  router.push(route)
}
</script>

<template>
  <main class="p-0 m-0 w-full">
    <div class="w-full">
      <!-- Section principale avec image + filtre violet -->
      <section class="relative w-full overflow-hidden">
        <!-- Image de fond -->
        <img src="/images/accueil-1.png" alt="Accueil" class="absolute inset-0 w-full h-full object-cover z-0" />
        <!-- Voile violet léger -->
        <div class="absolute inset-0 bg-violet opacity-20 z-0"></div>

        <!-- Contenu texte et boutons -->
        <div class="relative z-10 flex flex-col items-center text-center px-6 py-12 gap-4 text-white">
          <h1 class="text-2xl font-bold font-titre">Des aides encore plus facile que dans vos souvenirs !</h1>

          <!-- Boutons verts -->
          <div class="flex flex-col gap-3 mt-4 max-w-xs">
            <button @click="goToRegister" class="bg-vert text-violet font-bold py-2 px-4 rounded-xl">
              Voir nos offres
            </button>
            <button @click="goToLogin" class="bg-vert text-violet font-bold py-2 px-4 rounded-xl">
              Commencer mes démarches
            </button>
          </div>
        </div>
      </section>

      <!-- Section chiffres clés -->
      <section class="bg-violet p-5 text-white">
        <div class="max-w-5xl mx-auto flex justify-center items-center text-center font-textse gap-x-12">
          <div class="flex flex-col items-center">
            <p class="text-2xl font-bold leading-none">+ 1000</p>
            <p class="text-sm">Aides disponibles</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="text-2xl font-bold leading-none">+ 30 M</p>
            <p class="text-sm">Personnes éligibles</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="text-2xl font-bold leading-none">+ 500</p>
            <p class="text-sm">Jeunes inscrits</p>
          </div>
        </div>
      </section>

      <section class="bg-white py-10 px-4">
        <div class="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">

          <!-- Carte 1 -->
          <div class="bg-gray-100 rounded-2xl p-6 shadow-md text-center">
            <h3 class="text-violet text-lg font-bold font-titre mb-2">Accessibilité et simplicité</h3>
            <p class="text-black/80 text-sm font-textse leading-snug">
              Un langage clair et adapté aux jeunes<br />
              (fini le jargon administratif) !
            </p>
          </div>

          <!-- Carte 2 -->
          <div class="bg-gray-100 rounded-2xl p-6 shadow-md text-center">
            <h3 class="text-violet text-lg font-bold font-titre mb-2">Accompagnement pas à pas</h3>
            <p class="text-black/80 text-sm font-textse leading-snug">
              Tutoriels (texte et vidéos) guidés pour chaque démarche
            </p>
          </div>

          <!-- Carte 3 -->
          <div class="bg-gray-100 rounded-2xl p-6 shadow-md text-center">
            <h3 class="text-violet text-lg font-bold font-titre mb-2">Fiabilité et mise à jour</h3>
            <p class="text-black/80 text-sm font-textse leading-snug">
              Informations mises à jour régulièrement<br />
              et notifications en cas de changement<br />
              avec l'abonnement premium
            </p>
          </div>

          <!-- Carte 4 -->
          <div class="bg-gray-100 rounded-2xl p-6 shadow-md text-center">
            <h3 class="text-violet text-lg font-bold font-titre mb-2">Sécurité des données</h3>
            <p class="text-black/80 text-sm font-textse leading-snug">
              Tes infos personnelles sont protégées<br />
              et accessibles uniquement depuis ton compte Easy (RGPD friendly)
            </p>
          </div>

        </div>
      </section>


      <!-- Texte d'intro -->
      <section class="text-center px-6 py-10 font-textse text-noir">
        <p class="text-lg">
          Bienvenue sur EASI, le site qui t’aide à trouver et obtenir les aides financières faites pour toi.
        </p>
        <p class="mt-4 text-base">
          Fini la galère des démarches, on t’explique tout simplement !
        </p>
      </section>

      <!-- Catégories cliquables -->
      <section class="px-6 pb-12">
        <div class="flex flex-col gap-5 mt-8">
          <div v-for="categorie in categories" :key="categorie.nom"
            class="flex items-center gap-8 font-titre bg-violet text-white rounded-xl shadow-md px-4 py-3 cursor-pointer"
            @click="goToCategorie(categorie.route)">
            <img :src="`/icons/${categorie.picto}.png`" alt="" class="w-11 h-11 mr-5" />
            <span class="text-lg font-bold">{{ categorie.nom }}</span>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>
