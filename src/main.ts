import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Crear en lo que se va a basar
const app = createApp(App)

// Va a usar pinia 
app.use(createPinia())
app.use(router)

app.mount('#app')
