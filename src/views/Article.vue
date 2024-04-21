<template>
    <div id="article-view">
        <div v-if="isError" class="flex flex-col w-full mt-12 items-center justify-center gap-3">
            <svg class="w-32 h-32" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 1h12.414L21 6.586V11.5h-2V9h-6V3H5v18h9.5v2H3zm12 2.414V7h3.586zM18 15c-.93 0-1.5.656-1.5 1.249v1h-2v-1C14.5 14.358 16.17 13 18 13s3.5 1.358 3.5 3.249a3.13 3.13 0 0 1-1.027 2.3L19 19.939v.683h-2v-1.546l2.112-1.993c.256-.235.388-.53.388-.834c0-.593-.57-1.249-1.5-1.249m-1 6.996h2.003V24h-2.004z"/></svg>
            <h1 class="text-3xl">This article does not exist</h1>
            <router-link class="fhs-button" to="/">Back Home</router-link>
        </div>
        <div v-else>
            <div id="article-content" class="flex flex-col gap-4">

            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { marked } from 'marked';
import Prism from 'prismjs';

const route = useRoute();
if (!route.params.file) {
    console.error("No file provided");
    useRouter().push("/articles");
}
const file = route.params.file + ".md";
console.log("File: ", file);
const isError = ref(false);

onMounted(async () => {
    try {
        const response = await axios.get(`/articles_md/${file}`);
        const respStringIfMissing = "<title>Fleeting Heartbeat Studios</title>";

        // TODO: This is a hacky way to check if the article exists, but it works for now
        if (response.status !== 200 || response.data.includes(respStringIfMissing)) {
            isError.value = true;
            return;
        }

        const article = marked(response.data);
        document.querySelector("#article-content").innerHTML = article;
        Prism.highlightAll();


    } catch (error) {
        console.error("Error fetching article: ", error);
        isError.value = true;
    }
});
</script>

<style>
#article-content h1 {
    @apply text-4xl font-bold text-crayon-dark text-center mb-8 mt-10 border-b-4 border-dashed border-crayon-dark pb-4;
}

#article-content h2 {
    @apply text-3xl font-bold mt-3 underline underline-offset-8 text-crayon-dark;
}

#article-content pre {
    @apply bg-crayon-dark/10 p-4 rounded-lg overflow-x-auto text-lg text-crayon-dark;
}

#article-content code:not(pre > code) {
    @apply bg-crayon-dark/20 p-1 rounded-lg text-lg text-crayon-dark;
}

#article-content a {
    @apply text-crayon-dark underline transition duration-200;
}

#article-content a:hover {
    @apply bg-crayon-dark/20 rounded-md;
}
</style>