<template>
    <div class="my-2 flex flex-col gap-10">
        <div id="ksre">
            <img src="/img/ksrev1.png" alt="Katawa Shoujo: Re-Engineered Logo" class="w-full md:w-[45%]">
            <h1 class="font-bold text-4xl">Katawa Shoujo: Re-Engineered</h1>
            <div class="flex flex-col gap-3">
                <i>A fan-made modernization of the classic visual novel</i>
                <p class="font-mono font-bold text-lg">Current Version: {{ KSRE.version }}</p>
                <div id="downloads" class="flex flex-col gap-5">
                    <div class="dl-section">
                        <h1 class="dl-section-header">Universal</h1>

                        <div class="download flex flex-row flex-wrap gap-4">
                            <a :href="KSRE.platform.web" target="_blank"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="Planet Icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M223.22 115.75A97.08 97.08 0 0 1 224 128a95.93 95.93 0 0 1-154.57 76c25.19-6.16 54.82-18.93 82.44-34.8c29.44-16.91 54.29-35.74 71.35-53.45Zm21.89-55.07c-7.65-13.19-27.84-16.16-58.5-8.66A95.93 95.93 0 0 0 32 128a98 98 0 0 0 .78 12.31C5.09 169 5.49 186 10.9 195.32C16 204.16 26.64 208 40.64 208a124.11 124.11 0 0 0 28.79-4a97.22 97.22 0 0 1-14.16-13.42c-17.29 2.88-28 1-30.53-3.29c-1.46-2.51-.65-7.24 2.22-13a79.42 79.42 0 0 1 10.28-15.05a.29.29 0 0 0 0-.09v.08a96.21 96.21 0 0 0 18 31.32c20.94-3.49 51.49-13.91 88.63-35.25C172 139.19 202 116.67 218.79 96.82a95.69 95.69 0 0 0-18-31.35l-.13-.15c0 .05.09.09.13.15c14.21-2.35 27.37-2.17 30.5 3.24c.92 1.57 1 3.92.15 7c-1.69 6.31-6.19 13.53-12.63 21.13a95.39 95.39 0 0 1 4.43 18.93c12.5-13 20.82-25.35 23.65-35.92c1.94-7.34 1.35-13.78-1.78-19.17Z"/></svg>
                                Web (Beta)
                            </a>
                        </div>
                    </div>
                    <div class="dl-section">
                        <h1 class="dl-section-header">Desktop</h1>

                        <div class="download flex flex-row flex-wrap gap-4">
                            <a :href="KSRE.platform.windows"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="Windows Logo" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="m3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z" />
                                </svg>
                                Windows
                            </a>
                            <a :href="KSRE.platform.linux"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="Linux Logo" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19c-.39.31-.75.29-1.14-.01c-.2-.16-1.53-.92-1.95-1.19c-.48-.31-.45-.7.08-.92c1.64-.69 3.28-.64 4.91.03c.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01c-.2-.88-.29-1.78-.7-2.61c-.73-1.58-2-2.4-3.84-2.47c-1.81.05-3.16.81-3.95 2.4c-.21.43-.36.88-.46 1.34c-.17.76-.32 1.55-.5 2.32c-.15.65-.45 1.21-.96 1.71c-1.61 1.57-2.9 3.37-3.88 5.35c-.14.29-.28.58-.37.88c-.19.66.29 1.12.99.96c.44-.09.88-.18 1.3-.31c.41-.15.57-.05.67.35c.65 2.15 2.07 3.66 4.24 4.5c4.12 1.56 8.93-.66 9.97-4.58c.07-.27.17-.37.47-.27c.46.14.93.24 1.4.35c.49.09.85-.16.92-.64c.03-.26-.06-.49-.16-.73" />
                                </svg>
                                Linux
                            </a>
                            <a :href="KSRE.platform.flathub" class="fhs-button flex flex-row items-center gap-1">
                                <img src="/img/flatpak.svg" alt="Flathub Logo" class="w-6 h-6 pr-1">
                                Flathub (Linux)
                            </a>
                            <a :href="KSRE.platform.mac"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="Desktop Logo" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="M8 21v-1l2-2H4q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18h-6l2 2v1Zm-4-8h16V5H4Zm0 0V5v8Z" />
                                </svg>
                                Mac
                            </a>
                        </div>
                    </div>
                    <div class="dl-section">
                        <h1 class="dl-section-header">Mobile / Portable</h1>

                        <div class="download flex flex-row flex-wrap gap-4">
                            <a :href="KSRE.platform.android"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="Android Logo" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="M1 18q.225-2.675 1.638-4.925Q4.05 10.825 6.4 9.5L4.55 6.3q-.15-.225-.075-.475q.075-.25.325-.375q.2-.125.45-.05t.4.3L7.5 8.9Q9.65 8 12 8t4.5.9l1.85-3.2q.15-.225.4-.3q.25-.075.45.05q.25.125.325.375q.075.25-.075.475L17.6 9.5q2.35 1.325 3.763 3.575Q22.775 15.325 23 18Zm6-2.75q.525 0 .888-.363q.362-.362.362-.887t-.362-.887Q7.525 12.75 7 12.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm10 0q.525 0 .888-.363q.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Z" />
                                </svg>
                                Android
                            </a>
                            <a :href="KSRE.platform.ios_testflight"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="App Store Logo" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M8.823 15.343q-.591-.716-1.479-.509l-.15.041l-.59 1.016a.823.823 0 0 0 1.366.916l.062-.093zM13.21 8.66c-.488.404-.98 1.597-.29 2.787l3.04 5.266a.824.824 0 0 0 1.476-.722l-.049-.1l-.802-1.392h1.19a.82.82 0 0 0 .822-.823a.82.82 0 0 0-.72-.816l-.103-.006h-2.14L13.44 9.057zm.278-3.044a.825.825 0 0 0-1.063.21l-.062.092l-.367.633l-.359-.633a.824.824 0 0 0-1.476.722l.049.1l.838 1.457l-2.685 4.653H6.266a.82.82 0 0 0-.822.822c0 .421.312.766.719.817l.103.006h7.48c.34-.64-.06-1.549-.81-1.638l-.121-.007h-2.553l3.528-6.11a.823.823 0 0 0-.302-1.124"/>
                                </svg>
                                iOS (Testflight)
                            </a>
                            <a :href="KSRE.platform.ios"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="iOS Logo" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                iOS (IPA Sideload)
                            </a>
                            <button
                                @click="saveAs('/steamdeck/Install KSRE.desktop', 'Install KSRE.desktop')"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg class="h-7 w-7" alt="Steam Deck Logo" viewBox="0 0 600.75 799.79" xmlns="http://www.w3.org/2000/svg" width="1878" height="2500"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-154.087" x2="316.283" y1="274.041" y2="501.116"><stop offset=".107" stop-color="#c9b483"/><stop offset="1" stop-color="#ffebbe"/></linearGradient><path d="M200.25 600.27C89.51 600.27 0 510.89 0 400.32s89.51-199.95 200.25-199.95 200.26 89.38 200.26 199.95-89.52 199.95-200.26 199.95z" fill="url(#a)"/><path d="M456.98 399.89c0-141.57-114.95-256.34-256.74-256.34V0c221.2 0 400.51 179.04 400.51 399.89 0 220.86-179.31 399.9-400.51 399.9V656.24c141.79 0 256.74-114.77 256.74-256.35z" fill="#ffebbe"/></svg>
                                Steam Deck
                            </button>
                        </div>
                    </div>
                    <div class="dl-section">
                        <h1 class="dl-section-header">Source Code</h1>

                        <div class="download flex flex-row flex-wrap gap-4">
                            <a href="https://codeberg.org/fhs" class="fhs-button flex flex-row items-center gap-1">
                                <img src="/img/codeberg.png" alt="Codeberg Logo" class="w-7 h-7">
                                Codeberg
                            </a>
                            <a href="https://github.com/fleetingheart" class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="GitHub Logo" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                                </svg>
                                GitHub (Mirror)
                            </a>
                        </div>
                    </div>
                    <div class="dl-section">
                        <h1 class="dl-section-header">Unofficial releases</h1>

                        <p class="text-sm mb-1">These releases are maintained outside of FHS and might not be up-to-date.</p>
                        <div class="download flex flex-row flex-wrap gap-4">
                            <a :href="KSRE.platform.aur" class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="Arch Logo" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                    d="M14.3,19.414c0.216-0.569,0.342-1.218,0.342-1.913c0-2.129-1.139-3.86-2.539-3.86c-1.412,0-2.55,1.731-2.55,3.86	c0,0.683,0.114,1.332,0.33,1.89c-4.657,0.49-7.936,2.437-9.268,3.313c2.243-3.234,4.589-7.025,6.831-11.386	c0.558-1.082,1.082-2.152,1.571-3.199C9.21,8.244,9.404,8.381,9.62,8.518c1.002,0.626,1.936,0.968,2.619,1.15	c-0.501-0.376-1.047-0.831-1.605-1.389c-0.421-0.421-0.797-0.843-1.116-1.253C10.463,4.954,11.283,2.961,12,1.071	c1.195,3.165,2.687,6.615,4.554,10.247c1.207,2.334,2.437,4.509,3.666,6.513c-0.353-0.193-0.74-0.376-1.15-0.535	c-0.706-0.273-1.366-0.444-1.936-0.546c0.774,0.387,1.674,0.9,2.619,1.583c0.615,0.456,1.161,0.911,1.628,1.355	c0.011,0.011,0.011,0.011,0.023,0.023c0.649,1.059,1.321,2.038,1.981,2.994C22.076,21.839,18.854,19.926,14.3,19.414z" />
                                </svg>
                                AUR
                            </a>
                            <a :href="KSRE.platform.nix_os" class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="NixOS Logo" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                    <path fill="#ffebbe" d="M50.732 43.771L20.525 96.428l-7.052-12.033 8.14-14.103-16.167-.042L2 64.237l3.519-6.15 23.013.073 8.27-14.352 13.93-.037zm2.318 42.094l60.409.003-6.827 12.164-16.205-.045 8.047 14.115-3.45 6.01-7.05.008-11.445-20.097-16.483-.034-6.996-12.124zm35.16-23.074l-30.202-52.66L71.888 10l8.063 14.148 8.12-14.072 6.897.002 3.532 6.143-11.57 20.024 8.213 14.386-6.933 12.16z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="#ffebbe" d="M39.831 65.463l30.202 52.66-13.88.131-8.063-14.148-8.12 14.072-6.897-.002-3.532-6.143 11.57-20.024-8.213-14.386 6.933-12.16zm35.08-23.207l-60.409-.003L21.33 30.09l16.204.045-8.047-14.115 3.45-6.01 7.051-.01 11.444 20.097 16.484.034 6.996 12.124zm2.357 42.216l30.207-52.658 7.052 12.034-8.141 14.102 16.168.043L126 64.006l-3.519 6.15-23.013-.073-8.27 14.352-13.93.037z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                                NixOS
                            </a>
                            <a :href="KSRE.platform.fdroid"
                                class="fhs-button flex flex-row items-center gap-1">
                                <svg alt="F-Droid Logo" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="#ffebbe"
                                        d="M20.472 10.081H3.528a1.59 1.59 0 0 0-1.589 1.589v10.59a1.59 1.59 0 0 0 1.589 1.589h16.944a1.59 1.59 0 0 0 1.589-1.589V11.67a1.59 1.59 0 0 0-1.589-1.589M12 22.525c-3.066 0-5.56-2.494-5.56-5.56s2.494-5.56 5.56-5.56c3.066 0 5.56 2.494 5.56 5.56s-2.494 5.56-5.56 5.56m0-10.114c-2.511 0-4.554 2.043-4.554 4.554S9.489 21.519 12 21.519s4.554-2.043 4.554-4.554s-2.043-4.554-4.554-4.554m0 7.863a3.322 3.322 0 0 1-3.221-2.568h1.67c.275.581.859.979 1.551.979c.96 0 1.721-.761 1.721-1.721c0-.96-.761-1.721-1.721-1.721a1.7 1.7 0 0 0-1.493.874H8.805A3.322 3.322 0 0 1 12 13.655a3.321 3.321 0 0 1 3.309 3.309A3.321 3.321 0 0 1 12 20.274M23.849.396l-.002.003l-.006-.005l.004-.004a.668.668 0 0 0-.519-.238a.654.654 0 0 0-.512.259l-1.818 2.353a1.564 1.564 0 0 0-.523-.095H3.528c-.184 0-.358.038-.523.095L1.187.41A.657.657 0 0 0 .156.389L.16.393L.153.399L.151.396a.662.662 0 0 0-.012.824l1.909 2.471a1.587 1.587 0 0 0-.108.566v3.707a1.59 1.59 0 0 0 1.589 1.589h16.944a1.59 1.59 0 0 0 1.589-1.589V4.257c0-.2-.041-.39-.109-.566l1.909-2.471a.663.663 0 0 0-.013-.824M6.904 8.228a1.787 1.787 0 1 1 0-3.574a1.787 1.787 0 0 1 0 3.574m10.325 0a1.787 1.787 0 1 1 0-3.574a1.787 1.787 0 0 1 0 3.574"/>
                                </svg>
                                F-Droid (Android - No NSFW)
                            </a>
                        </div>
                    </div>
                </div>
                <p class="italic text-sm mt-5">
                    <b>PLEASE NOTE:</b> Fleeting Heartbeat Studios and its members are not affiliated with Four Leaf
                    Studios in
                    <b>ANY</b> way.
                </p>
                <h2>Accessible to All</h2>
                <p>
                    KS:RE offers a battery of accessibility features to accommodate players with disabilities. Using the
                    tools available in modern Ren’Py, we’ve added quick access to self-voicing, two dyslexic typefaces,
                    a special high contrast text box, and various optimizations to improve functionality with common
                    screenreaders- and that’s just the beginning. We’re already looking into other ways to make KS:RE
                    even more accessible.
                </p>
                <h2>
                    Fully Transparent
                </h2>
                <p>
                    Open source. No archives. No obfuscation. KS:RE doesn’t try to hide how it works. Anyone is welcome
                    to peek under the hood and experiment, free of interference. The vastly simplified codebase of KS:RE
                    allows developers of all skill levels to read, learn, and alter to their heart’s content. If you
                    have an idea- a new accessibility feature, an improvement to a menu, a further simplification of the
                    code- you have everything you need to make it happen. KS:RE is a community project first and
                    foremost. If you can make the game better, our door is always open.
                </p>
                <h2>
                    Bells and Whistles
                </h2>
                <p>
                    KS:RE, under its default settings, plays exactly as you remember it. However, you have a few new
                    options at your fingertips to tailor your experience to your liking. For a touch of visual flair,
                    you can enable Parallax viewing, breathing a little extra life into your favorite characters.
                    Sharing your experience has never been simpler- KS:RE seamlessly integrates with Discord’s activity
                    bar, letting your friends see your excellent taste in visual novels. All of these features are
                    completely optional, and can be toggled with a single click. </p>
                <h2>
                    The Complete Package
                </h2>
                <p>
                    KS:RE comes preloaded with Russian, French, Spanish, Deutsch translations, ready to use with no extra effort on the
                    player’s end. Every other official translation won’t be far behind. The simplified codebase of KS:RE
                    makes creating new translations easier than ever, requiring virtually zero programming knowledge.
                    We’re more than willing to port over any finished translation you create and add it to KS:RE-
                    credited to you, of course.
                </p>
                <h2>
                    Mod to your heart’s content
                </h2>
                <p>
                    We've been hard at work on designing a simple a modding API for KS:RE, allowing you to create your own
                    mods for the game. Folks are already working on mods for KS:RE, and we can't wait to see what
                    you come up with!
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { saveAs } from 'file-saver';
import KSRE from '../data/KSRE';
</script>

<style scoped>
h2 {
    @apply text-3xl font-bold;
}

.dl-section-header {
    @apply text-3xl font-bold w-full border-b-2 border-crayon-dark mb-3;
}

</style>
