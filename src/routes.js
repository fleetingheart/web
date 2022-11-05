import Home from "./views/Home.vue";
import Info from "./views/Info.vue";
import About from "./views/About.vue";
import Characters from "./views/Characters.vue";
import Projects from "./views/Projects.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/info', component: Info },
    { path: '/about', component: About },
    { path: '/characters', component: Characters },
    { path: '/projects', component: Projects },
    
]

export default routes