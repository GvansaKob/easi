<template>
    <footer class="bg-violet text-white px-6 py-8 font-textse">
        <div class="flex flex-row gap-12">
            <!-- Section Aides -->
            <div>
                <h3 class="font-titre text-lg mb-2">Les aides</h3>
                <ul class="space-y-1 text-base">
                    <li><a href="#">Financière</a></li>
                    <li><a href="#">Logement</a></li>
                    <li><a href="#">Transport</a></li>
                    <li><a href="#">Santé</a></li>
                    <li><a href="#">Alimentaire</a></li>
                    <li><a href="#">“Tout de la vie”</a></li>
                </ul>
            </div>

            <!-- Section Contact -->
            <div>
                <h3 class="font-titre text-lg mb-2">Contact</h3>
                <ul class="space-y-1 text-base">
                    <li><a href="#">Mail</a></li>
                    <li><a href="#">Téléphone</a></li>
                </ul>
            </div>

            <!-- Section Mon compte -->
            <div>
                <h3 class="font-titre text-lg mb-2">Mon compte</h3>
                <ul class="space-y-1 text-base">
                    <li><a href="#">Mes informations</a></li>
                    <li><a href="#">Mes démarches</a></li>
                </ul>
            </div>
        </div>

        <div class="mt-8 flex flex-row justify-between items-center flex-wrap">
            <!-- CGU et Mentions légales-->
            <div class="space-y-1 text-sm">
                <a href="#" class="block">CGU</a>
                <a href="#" class="block">Mentions légales</a>
            </div>

            <!-- Logo et Réseaux -->
            <div class="mt-4 md:mt-0 flex flex-col items-center ml-auto">
                <img src="/icons/logo-blanc.png" alt="Logo EASI" class="h-12 mb-2" />
                <div class="flex space-x-3">
                    <img src="/icons/ig.svg" alt="Instagram" class="h-7" />
                    <img src="/icons/fb.svg" alt="Facebook" class="h-7" />
                </div>
            </div>

        </div>
    </footer>
</template>