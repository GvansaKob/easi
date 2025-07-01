<template>
    <div class="min-h-screen bg-white">

        <!-- Bandeau violet -->
        <section class="bg-violet text-white text-center py-8 px-4">
            <h1 class="text-xl font-bold font-titre mb-4">Un problème dans vos démarches ?</h1>
            <button class="bg-vert text-violet font-semibold px-6 py-2 rounded-xl shadow-md">
                Contactez le service client EASI
            </button>
        </section>

        <!-- Bloc contact -->
        <section class="p-6 flex justify-center">
            <div class="bg-violet text-white rounded-3xl p-6 w-full max-w-md text-center shadow-lg space-y-6">

                <!-- Section mail -->
                <a href="mailto:easi@contact.com" class="block">
                    <div class="flex flex-col items-center space-y-1">
                        <i class="fas fa-envelope text-3xl"></i>
                        <p class="text-vert font-bold text-lg">easi@contact.com</p>
                        <p class="text-white text-sm">Gratuit</p>
                    </div>
                </a>

                <!-- Section téléphone -->
                <a href="tel:+33772829272" class="block">
                    <div class="flex flex-col items-center space-y-1">
                        <i class="fas fa-phone-alt text-3xl"></i>
                        <p class="text-vert font-bold text-lg">+33 7 72 82 92 72</p>
                        <p class="text-white text-sm">prix d'un appel local</p>
                    </div>
                </a>

            </div>

        </section>

    </div>
</template>
