<template>
  <div class="p-6 flex flex-col gap-6">
    <h1 class="text-3xl font-bold text-black underline-offset-4">Créer mon compte</h1>

    <!-- Champs de formulaire -->
    <input v-model="prenom" type="text" placeholder="Prénom" class="input" />
    <input v-model="nom" type="text" placeholder="Nom" class="input" />

    <!-- Date de naissance -->
    <div class="relative w-full">
      <label v-if="!dateNaissance" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        Date de naissance
      </label>
      <input v-model="dateNaissance" type="date" class="input text-black bg-white"
        :class="{ 'text-gray-400': !dateNaissance }" />
      <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
    </div>

    <input v-model="email" type="email" placeholder="Mail" class="input" />

    <!-- Mot de passe -->
    <div class="relative w-full">
      <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Mot de passe" class="input" />
      <button type="button" class="absolute right-4 top-4 text-gray-500" @click="togglePassword">
        <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
      </button>
    </div>

    <!-- Vérification du mot de passe -->
    <div class="relative w-full">
      <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword"
        placeholder="Répéter le mot de passe" class="input" />
      <button type="button" class="absolute right-4 top-4 text-gray-500" @click="toggleConfirmPassword">
        <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
      </button>
    </div>


    <!-- Conditions générales -->
    <label class="text-sm gap-2">
      <input type="checkbox" v-model="accepted" class="mt-1 accent-violet" />
      J'accepte les <strong class="underline">conditions générales</strong> et la politique de confidentialité EASI.
    </label>

    <BaseButton class="mt-2" @click="register">Valider</BaseButton>

    <!-- Lien vers login -->
    <p class="text-center text-sm mt-6">
      Vous avez déjà un compte ?
      <span @click="router.push('/login')" class="font-bold underline cursor-pointer text-black">Connectez-vous</span>
    </p>

    <!-- Modale de confirmation -->
    <div v-if="inscriptionReussie" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-md text-center space-y-4">
        <h2 class="text-xl font-bold text-violet">Votre compte a bien été créé !</h2>
        <p class="text-vert font-bold">Bienvenue sur EASI, {{ prenomCree }}.</p>
        <p class="text-sm text-black">Veuillez vous connecter pour valider la création de votre compte.</p>
        <BaseButton @click="router.push('/login')">Se connecter</BaseButton>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
import { authService } from '@/services/authService'

const router = useRouter()
const prenom = ref('')
const nom = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const accepted = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const dateNaissance = ref('')
const inscriptionReussie = ref(false)
const prenomCree = ref('')



function togglePassword() {
  showPassword.value = !showPassword.value
}


async function register() {
  if (!prenom.value || !nom.value || !email.value || !password.value || !confirmPassword.value || !dateNaissance.value) {
    alert('Veuillez remplir tous les champs.')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('Les mots de passe ne correspondent pas.')
    return
  }

  if (!accepted.value) {
    alert('Veuillez accepter les conditions générales.')
    return
  }


  const now = new Date()
  const selectedDate = new Date(dateNaissance.value)

  if (selectedDate > now) {
    alert('La date de naissance ne peut pas être dans le futur.')
    return
  }


  try {
    await authService.register({
      prenom: prenom.value,
      nom: nom.value,
      email: email.value,
      mot_de_passe: password.value,
      date_de_naissance: dateNaissance.value
    })

    prenomCree.value = prenom.value
    inscriptionReussie.value = true

  }
  catch (err) {
    alert(err.message || 'Erreur lors de l’inscription')
  }
}

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Watchers automatiques
watch(prenom, (val) => {
  prenom.value = capitalizeWords(val)
})

watch(nom, (val) => {
  nom.value = capitalizeWords(val)
})


function toggleConfirmPassword() {
  showConfirmPassword.value = !showConfirmPassword.value
}

</script>

<style scoped>
.input {
  @apply w-full p-4 border border-gray-300 rounded-lg text-base bg-white focus:outline-none focus:ring-2 focus:ring-purple-500;
}
</style>
