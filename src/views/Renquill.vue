<template>
    <div class="my-2 flex flex-col gap-10">
        <div id="ksre">
            <img src="/img/renquillbrown.png" alt="Renquill Logo" class="w-[60%] md:w-[25%]">
            <p class="font-bold text-4xl">Renquill</p>
            <div class="flex flex-col gap-3">
                <i>An app that helps you translate your RenPy visual novels</i>
                <div class="dl-section">
                    <h1 class="dl-section-header">Links</h1>
                    <div class="download flex flex-row flex-wrap gap-4">

                        <div class="download flex flex-row flex-wrap gap-4">
                            <a href="https://renquill.vercel.app/"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="Planet Icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M223.22 115.75A97.08 97.08 0 0 1 224 128a95.93 95.93 0 0 1-154.57 76c25.19-6.16 54.82-18.93 82.44-34.8c29.44-16.91 54.29-35.74 71.35-53.45Zm21.89-55.07c-7.65-13.19-27.84-16.16-58.5-8.66A95.93 95.93 0 0 0 32 128a98 98 0 0 0 .78 12.31C5.09 169 5.49 186 10.9 195.32C16 204.16 26.64 208 40.64 208a124.11 124.11 0 0 0 28.79-4a97.22 97.22 0 0 1-14.16-13.42c-17.29 2.88-28 1-30.53-3.29c-1.46-2.51-.65-7.24 2.22-13a79.42 79.42 0 0 1 10.28-15.05a.29.29 0 0 0 0-.09v.08a96.21 96.21 0 0 0 18 31.32c20.94-3.49 51.49-13.91 88.63-35.25C172 139.19 202 116.67 218.79 96.82a95.69 95.69 0 0 0-18-31.35l-.13-.15c0 .05.09.09.13.15c14.21-2.35 27.37-2.17 30.5 3.24c.92 1.57 1 3.92.15 7c-1.69 6.31-6.19 13.53-12.63 21.13a95.39 95.39 0 0 1 4.43 18.93c12.5-13 20.82-25.35 23.65-35.92c1.94-7.34 1.35-13.78-1.78-19.17Z"/></svg>
                                Website
                            </a>

                            <a href="https://github.com/TibixDev/renquill"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="GitHub Logo" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                                </svg>
                                Source Code
                            </a>
                        </div>
                    </div>
                    <p class="italic text-sm mt-5">
                        <b>Please Note:</b> The project has initially been tested with the visual novel <a href="https://www.fhs.sh/projects/ksre">Katawa Shoujo: Re-Engineered</a>.
                    </p>
                </div>
                <h2>About The Project</h2>
                <p>
                    Renquill is an app that helps you translate your RenPy visual novels. We provide a nice interface
                    for all your translation projects, where you can easily save, export, and track your progress.
                    Renquill supports all visual novels that were made in Ren'Py. It runs on the web so once you have
                    your project imported or a project file, you don't need anything other than a web browser to work
                    on your translations.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    @apply text-3xl font-bold;
}

.dl-section-header {
    @apply text-3xl font-bold w-full border-b-2 border-crayon-dark mb-3;
}
</style>

<script setup>
</script>