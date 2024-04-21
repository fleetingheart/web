import routes from "./routes.js"
import { createRouter, createWebHistory } from "vue-router"
// import { inject } from '@vercel/analytics';

const router = createRouter({
    history: createWebHistory(),
    routes,
})
import { createApp } from 'vue'
import './style.css'
import 'prismjs/themes/prism-solarizedlight.min.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
// inject(); // Vercel Analytics
