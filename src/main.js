import routes from "./routes.js"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
