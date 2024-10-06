<template>
    <div class="flex flex-col">
        <p class="text-center text-4xl mb-5">HTTP 404 - Page Not Found</p>
        <img class="m-auto mb-2 h-[290px] w-auto" :src=image />
        <div>
            <p class="text-center">The page you are looking for does not exist on our site.</p>
            <p class="text-center">Please make sure you are trying to use the right URL for your destination. Unless <u>this</u> is your destination. In that case... hi.</p>
        </div>
        <div class="fhs-button w-36 m-auto mt-4">
            <p class="text-center">Home page</p>
        </div>
    </div>
</template>

<style scoped></style>
<script setup>
    // I am planning to make an artwork for this page but for now I'll use this to show one of the girls randomly. -nijo
    const images = [
        "https://codeberg.org/fhs/katawa-shoujo-re-engineered/raw/branch/master/game/sprites/shizu/close/shizu_cross_stunned_close.png",
        "https://codeberg.org/fhs/katawa-shoujo-re-engineered/raw/branch/master/game/sprites/emi/close/emi_basic_hes_close.png",
        "https://codeberg.org/fhs/katawa-shoujo-re-engineered/raw/branch/master/game/sprites/hanako/close/hanako_def_shock_close.png",
        "https://codeberg.org/fhs/katawa-shoujo-re-engineered/raw/branch/master/game/sprites/lilly/close/lilly_basic_oops_close.png",
        "https://codeberg.org/fhs/katawa-shoujo-re-engineered/raw/branch/master/game/sprites/misha/close/misha_perky_confused_close.png",
        "https://codeberg.org/fhs/katawa-shoujo-re-engineered/raw/branch/master/game/sprites/rin/close/rin_relaxed_surprised_close.png",
        "https://i.imgur.com/b1N2FWW.png", // Saki.
    ]
    const rand = Math.floor(Math.random() * images.length);
    const image = images[rand];
</script>