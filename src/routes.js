import Home from "./views/Home.vue";
import Info from "./views/Info.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Misc from "./views/Misc.vue";
import Articles from "./views/Articles.vue";
import Article from "./views/Article.vue";
import Nowhere from "./views/Nowhere.vue";
import ReEngineered from "./views/KSRE.vue";
import Renquill from "./views/Renquill.vue";


const routes = [
    { path: '/', component: Home, alias: '/home', meta: { title: 'Home' } },
    { path: '/info', component: Info, meta: { title: 'Info' } },
    { path: '/about', component: About, meta: { title: 'About Us' } },
    { path: '/misc', component: Misc, meta: { title: 'Miscellaneous' } },
    { path: '/articles', component: Articles, meta: { title: 'Blog' } },
    { path: '/articles/:file', component: Article, meta: { title: 'Article' } }, // <- Dynamic, title doesn't matter
    { path: '/:pathMatch(.*)*', component: Nowhere, meta: { title: 'Page Not Found' } },
    { path: '/projects', component: Projects, meta: { title: 'Projects' } },
    { path: '/projects/ksre', component: ReEngineered, meta: { title: 'Katawa Shoujo: Re-Engineered Project' } },
    { path: '/projects/renquill', component: Renquill, meta: { title: 'Renquill Project' } },
]

export default routes