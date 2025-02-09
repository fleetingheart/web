import { createApp } from 'vue'
import './style.css'
import 'prismjs/themes/prism-solarizedlight.min.css'
import App from './App.vue'
import routes from "./routes.js"
import { createRouter, createWebHistory } from "vue-router"
import articles from './data/articles.js'

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const getArticleTitle = async (file) => {
    return new Promise((resolve, reject) => {
        // Find the corresponding article in the articles array
        const article = articles.find(article => article.file === `${file}.md`);

        if (article) {
            resolve(article.title); // Return the title if found
        } else {
            reject(new Error(`Article with file ${file}.md not found.`)); // Reject if not found
        }
    });

};

router.beforeEach(async (to, from, next) => {
    if (to.path.includes('/articles/')) {
        try {
            const articleFile = to.params.file;
            const articleTitle = await getArticleTitle(articleFile); // Simulate API call
            document.title = `${articleTitle} | FHS`; // Set the document title
            next();
        } catch (error) {
            console.error("Error fetching article title", error);
            document.title = 'Error | FHS'; // Or some error title
            next(); // Proceed even on error
        }
    } else {
        document.title = `${to.meta.title} | FHS` || 'Unknown | FHS';
        next();
    }
});

createApp(App).use(router).mount('#app')
