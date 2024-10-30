<script setup lang="ts">
import SocialWrapper from './SocialWrapper.vue';


</script>

<template>
    <div class="font-inter w-full flex flex-col gap-y-8">

        <div class="flex pt-8 items-end px-20">
            <div class="tracking-[-2px] leading-[64px] text-slate-800 font-sen font-bold text-3xl">
                All posts
            </div>
        </div>

    </div>

    <main class="mt-16 mx-auto max-w-full w-[1147px] max-md:mt-10">
        <section class="flex flex-col gap-5 max-md:flex-col">
            <div class="flex flex-col w-full max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                    <a href="post" class="flex max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out">
                        <img src="@/assets/images/posts/Post1.png" alt="Design tips article featured image"
                            class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
                        <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2">
                            <span
                                class="self-start uppercase tracking-[3px] text-base font-semibold leading-none text-amber-300">Startup</span>
                            <h2
                                class="mt-5 mr-6 text-3xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                                Design tips for designers that cover everything you need
                            </h2>
                            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </a>
                    <a href="post" class="flex mt-16 max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out">
                        <img src="@/assets/images/posts/Post2.png"
                            alt="Web design clients rapport article featured image"
                            class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
                        <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2">
                            <span
                                class="self-start uppercase tracking-[3px] text-base font-semibold leading-none text-amber-300">BUSINESS</span>
                            <h2
                                class="mt-5 mr-6 text-3xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                                How to build rapport with your web design clients
                            </h2>
                            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </a>
                    <a href="post" class="flex mt-16 max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out">
                        <img src="@/assets/images/posts/Post3.png" alt="Logo design trends article featured image"
                            class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
                        <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2">
                            <span
                                class="self-start uppercase tracking-[3px] text-base font-semibold leading-none text-amber-300">Startup</span>
                            <h2
                                class="mt-5 mr-6 text-3xl font-bold tracking-tighter leading-none text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                                Logo design trends to avoid in 2022
                            </h2>
                            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </a>
                    <a href="post" class="flex mt-16 max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out">
                        <img src="@/assets/images/posts/Post4.png" alt="Figma design systems article featured image"
                            class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
                        <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2">
                            <span
                                class="self-start uppercase tracking-[3px] text-base font-semibold leading-none text-amber-300">TECHNOLOGY</span>
                            <h2
                                class="self-start mt-5 text-3xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                                8 Figma design systems you can download for free today
                            </h2>
                            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </a>
                    <a href="post" class="flex mt-16 max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out">
                        <img src="@/assets/images/posts/Post1.png" alt="Font sizes UI design article featured image"
                            class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
                        <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2">
                            <span
                                class="self-start uppercase tracking-[3px] text-base font-semibold leading-none text-amber-300">ECONOMY</span>
                            <h2
                                class="mt-5 mr-5 text-3xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                                Font sizes in UI design: The complete guide to follow
                            </h2>
                            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </main>

    <!-- tombol -->
    <div class="flex justify-center py-8 pl-7 gap-x-4 font-bold items-center">
        <button href="#" class="text-x-mediumgrey hover:text-x-black text-2xl hover:text-3xl duration-300">
            < Prev </button>
                <div class="h-12"></div>
                <button href="#" class="text-x-mediumgrey hover:text-x-black text-2xl hover:text-3xl duration-300">
                    Next >
                </button>
    </div>
</template>