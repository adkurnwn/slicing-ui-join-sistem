<script setup lang="ts">
import SocialWrapper from '@/components/SocialWrapper.vue';
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="bg-x-lavender flex relative justify-center h-[550px] items-center">
      <div class="h-[294px] text-black w-2/3 flex">
        <div class="">
          <img src="@/assets/images/posts/author.png" alt="Design tips article featured image"
            class="object-contain h-full max-md:max-w-full" />
        </div>
        <div class="flex flex-col justify-between pl-16 py-6 w-[669px]">
          <div class="text-4xl font-bold">
            Hey there, I’m Andrew Jonhson and welcome to my Blog
          </div>
          <div class="text-x-mediumgrey text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
            adipiscing at in tellus.
          </div>
          <div class="flex justify-start">
            <SocialWrapper class="scale-75" />
          </div>

        </div>
      </div>

      <div class="h-[23px] bg-x-yellow w-2/3 absolute bottom-0">
      </div>
    </div>

    <div class="font-inter w-[1147px] flex flex-col gap-y-8 mt-16">

      <div class="flex pt-8 items-end px-16">
        <div class="tracking-[-2px] leading-[64px] text-slate-800 font-sen font-bold text-3xl">
          My posts
        </div>
      </div>

    </div>

    <main class="mt-16 mb-24 mx-auto max-w-full w-[1147px] max-md:mt-10">
      <section class="flex flex-col gap-5 max-md:flex-col">
        <div class="flex flex-col w-full max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <a href="post" class="flex max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out">
              <img src="@/assets/images/posts/building.png" alt="Design tips article featured image"
                class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
              <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2">
                <span
                  class="self-start uppercase tracking-[3px] text-base font-semibold leading-none text-amber-300">BUSINESS</span>
                <h2
                  class="mt-5 mr-6 text-3xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                  Font sizes in UI design: The complete guide to follow
                </h2>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </a>
            <a href="post" class="flex mt-16 max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out">
              <img src="@/assets/images/posts/man-green.png" alt="Web design clients rapport article featured image"
                class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
              <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2">
                <span
                  class="self-start uppercase tracking-[3px] text-base font-semibold leading-none text-amber-300">ECONOMY</span>
                <h2
                  class="mt-5 mr-6 text-3xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                  How to build rapport with your web design clients
                </h2>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>

  </MainLayout>
</template>
