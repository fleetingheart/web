<template>
    <h1 class="text-center text-5xl mt-6 font-bold">Projects</h1>
    <p class="text-center text-xl font-light mt-4 mb-4">List of our completed projects.</p>
    <nav>
        <div class="w-[100%] flex flex-col md:flex-row items-center justify-center pt-8 pb-5 bg-[#00000017]
        border-crayon border-2 rounded-b-lg rounded-tr-lg rounded-tl-lg md:rounded-tl-lg">
            <RouterLink to="/projects/ksre" class="w-[60%] md:w-[50%] mb-6 md:mb-3 m-auto md:ml-10 lg:ml-4">
                    <img src="/img/ksrev1.png" alt="Katawa Shoujo: Re-Engineered Logo" class="w-full md:w-[400px] mb-3 ml-5 md:ml-6 xl:ml-14 image-size" />
                    <p class="text-center text-xl">A fan-made modernization of the classic visual novel</p>
            </RouterLink>
            <div class="w-[90%] h-[1px] border-b-2 border-dashed border-crayon mb-3 md:hidden"></div>
            <RouterLink to="/projects/renquill" class="w-[60%] md:w-[50%] mt-5 md:mt-2 m-auto">
                    <img src="/img/renquillbrown.png" alt="Renquill Logo" class="w-[170px] md:w-[190px] lg:w-[175px] xl:w-[230px] m-auto mb-3 image-size" />
                    <p class="text-center text-xl">Translation platform for Ren'Py projects</p>
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>
@keyframes imagegrow {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.10);
    }
}

@keyframes imageshrink {
    0% {
        transform: scale(1.10);
    }
    100% {
        transform: scale(1);
    }
}

.image-size {
    animation: imageshrink normal 500ms;
}

.image-size:hover {
    animation: imagegrow normal 500ms;
    transform: scale(1.10);
}
</style>

<script setup>
import { RouterLink } from 'vue-router';

</script>