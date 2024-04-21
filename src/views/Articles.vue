<template>
    <div id="articles-view" class="flex flex-col gap-2">
        <router-link
            class="p-2 border-4 rounded-md border-crayon bg-crayon-dark/10 flex flex-row gap-4 items-center cursor-pointer
            hover:bg-crayon-dark/20 transition duration-300 ease-in-out"
            v-for="article, k of articles"
            :key="k"
            :to="`/articles/${article.file.replace('.md', '')}`"
        >
            <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><ellipse cx="29.465" cy="21.416" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" rx="15.89" ry="6.4" transform="rotate(-74.222 29.465 21.417)"/><path fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.786 6.125l-8.642 30.583m-.131-21.349l4.114 7.255m-1.743 6.166l6.766-1.77m1.474-3.878H42.5m-37 0h16.939m7.938 9.372H42.5m-37 0h17.914M5.5 41.875h18.419m-2.981-5.437l2.981 5.437l5.438-2.981"/></svg>
            <div>
                <h1 class="text-2xl font-bold">
                    {{ article.title }}
                </h1>
                <p class="text-xl">
                    {{ article.date }}  •  {{ article.author }}
                </p>
                <div class="flex flex-row gap-2 mt-3">
                    <span
                        class="bg-crayon text-cream-vanilla p-1 rounded-md text-sm"
                        v-for="tag, tagKey of article.tags"
                        :key="tagKey"
                    >
                        {{ tag }}
                    </span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import articles from '../data/articles';
</script>