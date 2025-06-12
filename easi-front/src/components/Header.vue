<template>
  <header class="flex items-center justify-between p-4 bg-white shadow-md z-50 relative">
      
    <!-- Bloc gauche vide pour équilibrer -->
    <div class="w-12"></div>

    <!-- Logo centré (inchangé en taille) -->
    <img src="/icons/logo-easi.png" alt="Logo EASI" class="h-12 mx-auto" />

    <!-- Nouveau bouton profil à droite -->
    <router-link to="/mon-compte" class="w-12 h-12 rounded-full border border-violet flex items-center justify-center">
      <i class="fas fa-user text-violet text-2xl"></i>
    </router-link>

  </header>
</template>

<script setup>
</script>
