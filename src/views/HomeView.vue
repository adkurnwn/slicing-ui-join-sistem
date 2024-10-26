<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import Category from '@/components/Category.vue'
import JoinContent from '@/components/JoinContent.vue'
</script>

<template>
  <MainLayout>
    <!-- Hero Section -->
    <div class="w-full flex flex-col">
      <div
        class="bg-[url('@/assets/images/misc/cover.png')] bg-cover bg-center bg-no-repeat flex flex-grow flex-col max-h-full max-w-full z-0">
        <div
          class="pr-[556px] bg-[radial-gradient(transparent,_#00000099)] text-white flex pt-32 pl-20 pb-48 flex-grow flex-col gap-y-4 items-start">
          <div class="leading-5">
            <span><span>POSTED ON </span>
              <span class="font-black">STARTUP</span></span>
          </div>
          <div class="pt-2 pl-px self-stretch">
            <div class="leading-[64px] text-[56px] font-bold items-center flex">
              <p>Step-by-step guide to choosing great font pairs</p>
            </div>
          </div>
          <div class="pt-2 leading-7">
            <span><span class="text-x-blue"><span class="text-white">By </span>
                <a href="#">James West</a>
              </span>
              <span class="whitespace-pre-wrap">
                May 23, 2022</span></span>
          </div>
          <div class="w-[599px] leading-7 items-start flex">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div class="flex pt-8 items-end">
            <a href="#"
              class="bg-x-blue text-center leading-6 font-bold text-lg py-4 px-12 text-white hover:bg-x-yellow transition duration-150 ease-in-out">
              Read More >
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Section end-->
    <!-- featured Section-->
    <div class="w-full flex flex-col py-24 px-16">
      <div class="min-[1272px]:flex-nowrap flex flex-wrap justify-center flex-grow gap-x-8 gap-y-8">
        <div class="flex flex-col gap-y-8 items-start">
          <div class="tracking-[-2px] leading-[48px] text-slate-800 font-bold text-4xl">
            Featured Post
          </div>
          <div
            class="[max-width:733px] flex relative z-0 justify-center flex-grow self-stretch flex-col gap-y-4 items-start p-8">
            <div
              class="items-start flex absolute z-0 inset-0 border-x-mediumgrey flex-shrink-0 h-full w-full -scale-x-100 border border-opacity-20">
            </div>
            <img class="z-[2] h-[352px] w-[669px] flex-shrink-0 object-center object-cover"
              src="@/assets/images/posts/white-concrete-building-1838640.png" loading="lazy" />
            <div class="z-[3] flex pt-4 items-end">
              <div class="font-inter font-medium leading-5 text-sm">
                <span><span class="text-x-verydarkgrey">By </span>
                  <a href="#"><span class="text-x-yellow">John Doe </span></a>
                  <span class="text-x-verydarkgrey">l May 23, 2022</span></span>
              </div>
            </div>
            <div class=" text-x-verydarkgrey text-[28px] z-[4] font-bold flex self-stretch">
              <a href="#">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </a>
            </div>
            <div class="text-x-darkgrey w-[551px] flex">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div class="z-[6] flex pt-4 items-end">
              <a href="#"
                class="bg-x-blue text-center leading-6 font-bold text-lg py-4 px-12 text-white hover:bg-x-yellow transition duration-150 ease-in-out">
                Read More >
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col ">
          <div class=" gap-y-[15px] flex pr-0.5 items-center mb-7 justify-between">
            <div class="font-bold text-4xl">
              All Posts
            </div>
            <div class="">
              <a href="#" class="font-inter leading-7 text-x-yellow">View All</a>
            </div>

          </div>
          <div
            class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20">
            <div class="text-gray-600 text-xs mb-1">
              <span class="text-x-yellow font-medium">John Doe</span>
              <span> | </span>
              <span>Aug 23, 2021</span>
            </div>
            <div class="text-2xl font-bold text-gray-900">
              8 Figma design systems that you can download for free today.
            </div>
          </div>
          <div
            class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20">
            <div class="text-gray-600 text-xs mb-1">
              <span class="text-x-yellow font-medium">John Doe</span>
              <span> | </span>
              <span>Aug 23, 2021</span>
            </div>
            <div class="text-2xl font-bold text-gray-900">
              8 Figma design systems that you can download for free today.
            </div>
          </div>
          <div
            class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20">
            <div class="text-gray-600 text-xs mb-1">
              <span class="text-x-yellow font-medium">John Doe</span>
              <span> | </span>
              <span>Aug 23, 2021</span>
            </div>
            <div class="text-2xl font-bold text-gray-900">
              8 Figma design systems that you can download for free today.
            </div>
          </div>
          <div
            class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20">
            <div class="text-gray-600 text-xs mb-1">
              <span class="text-x-yellow font-medium">John Doe</span>
              <span> | </span>
              <span>Aug 23, 2021</span>
            </div>
            <div class="text-2xl font-bold text-gray-900">
              8 Figma design systems that you can download for free today.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- featured Section end-->
    <!-- about us Section-->
    <div class="w-full py-24 px-16">
      <div class="h-4 flex">
        <div class="w-1/6 "></div>
        <div class="w-4/6 bg-x-yellow"></div>
        <div class="w-2/6 bg-x-blue"></div>
      </div>
      <div class="bg-x-lavender flex justify-center pr-16 pl-16 flex-col items-start py-24">
        <div
          class="min-[1270px]:flex-nowrap font-inter flex flex-wrap justify-between self-stretch gap-x-16 gap-y-16 items-start">
          <div class="w-1/2 flex-shrink-0 flex flex-col gap-y-4 items-start">
            <div class="tracking-[3px] text-slate-800 uppercase font-semibold leading-5">
              ABOUT US
            </div>
            <div class="[max-width:515px] flex pt-2 pr-5 self-stretch items-end">
              <div
                class="tracking-[-2px] leading-[48px] text-slate-800 font-sen font-bold text-2xl items-end flex flex-grow">
                <p>
                  We are a community of content writers who share their learnings
                </p>
              </div>
            </div>
            <div class="tracking-[0px] text-zinc-500 leading-7 text-sm items-start flex self-stretch">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="w-1/2 flex flex-col items-center">
            <div class="w-[516px] flex flex-col gap-y-4 items-start">
              <div class="text-slate-800 tracking-[3px] uppercase leading-5 font-semibold">
                Our mision
              </div>
              <div class="[max-width:516px] flex pt-2 pr-9 self-stretch items-end">
                <div
                  class="tracking-[-1px] text-slate-800 text-2xl font-sen font-bold leading-10 items-end flex flex-grow">
                  <p>
                    Creating valuable content for creatives all around the world
                  </p>
                </div>
              </div>
              <div class="tracking-[0px] text-zinc-500 text-sm leading-7 items-start flex self-stretch">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="font-bold text-x-yellow hover:text-x-blue transition duration-150 ease-in-out text-lg">
          Read More >
        </a>
      </div>
    </div>
    <!-- about us Section end-->
    <Category />
    <!-- special post Section-->
    <div class="flex mt-20 mb-20 px-16">
      <div
        class="pt-[102px] pl-[488px] w-[804px] bg-[url('@/assets/images/misc/special.png')] flex-shrink-0 flex bg-cover bg-center">
        <div
          class="tracking-[0px] mr-[-278px] flex justify-center flex-grow flex-col gap-y-3 bg-white items-start p-16">
          <div class="tracking-[3px] text-slate-800 font-inter uppercase font-semibold leading-5 text-sm">
            Why we started
          </div>
          <div class="pt-2 self-stretch">
            <div class="tracking-[-2px] leading-[56px] text-slate-800 font-sen font-bold text-4xl items-center flex">
              <p>It started out as a simple idea and evolved into our passion</p>
            </div>
          </div>
          <div class="text-zinc-500 font-inter leading-7 items-start flex self-stretch">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </p>
          </div>
          <div class="flex pt-4 self-stretch items-end">
            <button href="#" class="bg-x-blue hover:bg-x-yellow text-center text-white leading-5 font-bold text-base py-4 px-12 transition duration-150 ease-in-out">
              Discover our story >
            </button>
          </div>
        </div>
      </div>
    </div>

    <JoinContent />

  </MainLayout>
</template>
