// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // ou './main.css'
import '@fortawesome/fontawesome-free/css/all.css'


const app = createApp(App)

app.use(router)
app.mount('#app')
