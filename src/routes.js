import Home from "./views/Home.vue";
import Info from "./views/Info.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Misc from "./views/Misc.vue";
import Articles from "./views/Articles.vue";
import Article from "./views/Article.vue";


const routes = [
    { path: '/', component: Home },
    { path: '/info', component: Info },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/misc', component: Misc },
    { path: '/articles', component: Articles },
    { path: '/articles/:file', component: Article },
]

export default routes