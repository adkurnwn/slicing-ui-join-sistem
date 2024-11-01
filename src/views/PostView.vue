<script setup lang="ts">
import JoinContent from '@/components/JoinContent.vue';
import WhatToRead from '@/components/WhatToRead.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <div
            class="tracking-[0px] text-zinc-500 font-inter leading-7 w-full flex flex-col gap-y-4 items-center pt-24">
            <div class="flex self-stretch items-center px-64">
                <div class="flex relative justify-end pl-16 items-center">
                    <div
                        class="top-[calc(50%_+_-24px_+_-3px)] flex-shrink-0 flex absolute left-0 h-12 w-12 flex-col items-center">
                        <img src="@/assets/images/misc/jonathan.png" class="flex-shrink-0 h-12 w-12" />
                    </div>
                    <div>
                        <a href="author" class="tracking-[-1px] text-[28px]  font-bold leading-10 text-yellow-300">
                            Andrew Jonson
                        </a>
                        <div class="flex-shrink-0 flex h-6 flex-col items-center">
                            <div class="-mb-1">Posted on 27th January 2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="text-slate-800 tracking-[-2px] leading-[64px]  self-stretch pt-2 items-end flex font-bold text-[48px] px-64">
                <p>Step-by-step guide to choosing great font pairs</p>
            </div>
            <div class="pt-[18px] flex self-stretch items-end px-64">
                <div class="flex justify-center gap-x-2 items-center">
                    <div class="flex relative z-0 items-center gap-x-4">
                        <div class="absolute left-0 z-0 w-12 inset-y-0 bg-no-repeat bg-center bg-contain"
                            style="background-image: url('/src/assets/images/misc/startup.png');">
                        </div>
                        <Icon class="z-[2] flex-shrink-0 h-12 w-12" />
                        <div class="text-x-verydarkgrey text-[23px] leading-10 font-bold group-hover:text-white">
                            Startup
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end pt-12 self-stretch flex-col items-center px-24">
                <img class="h-[582px] w-[1280px] flex-shrink-0 object-center object-cover"
                    src="@/assets/images/posts/woman-glasses.png" loading="lazy" />
            </div>

            <div class="px-48">
                <div
                    class="text-slate-800 tracking-[-2px] leading-[48px]  self-stretch pt-12 items-end flex font-bold text-4xl ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                </div>
                <div class="w-[843px] items-center flex">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
                        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
                        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
                        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
                        quisque non.
                    </p>
                </div>
                <div
                    class="text-slate-800 tracking-[-2px] leading-[48px]  self-stretch pt-8 items-end flex font-bold text-4xl ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                </div>
                <div class="self-stretch items-center flex ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
                        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
                        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
                        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
                        quisque non.
                    </p>
                </div>
                <div class="self-stretch pt-2 items-end flex ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
                        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
                        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
                        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
                        quisque non.
                    </p>
                </div>
                <div class="flex justify-left self-stretch items-end">
                    <ul class="list-disc list-inside text-x-black font-bold mt-4 space-y-1 text-xl">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Non blandit massa enim nec scelerisque</li>
                        <li>Neque egestas congue quisque egestas</li>
                    </ul>
                </div>
                <div class="self-stretch pt-2 items-end flex ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
                        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
                        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
                        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
                        quisque non.
                    </p>
                </div>
                <div
                    class="text-slate-800 tracking-[-2px] leading-[48px]  self-stretch pt-8 items-end flex font-bold text-4xl ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                </div>
                <div class="self-stretch items-center flex ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
                        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
                        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
                        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
                        quisque non.
                    </p>
                </div>
            </div>
        </div>
        <WhatToRead />

        <JoinContent />
    </MainLayout>
</template>