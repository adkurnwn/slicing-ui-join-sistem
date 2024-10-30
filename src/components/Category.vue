<script setup lang="ts">
</script>

<template>
  <div class="w-full flex flex-col gap-y-12 items-center mb-24">
    <a href="Category" class="tracking-[-2px] leading-[48px] text-slate-800 font-sen font-bold text-4xl text-center">
      Choose A Catagory
    </a>
    <div
      class="min-[1270px]:flex-nowrap tracking-[0px] font-inter leading-7 flex flex-wrap justify-center flex-grow self-stretch gap-x-8 gap-y-8">
      <a href="Category"
        class="[max-width:296px]  border-x-mediumgrey hover:bg-x-blue flex justify-center flex-grow flex-col gap-y-1 items-start border border-opacity-40 p-8 group transition duration-150 ease-in-out">
        <div class="flex relative z-0 items-center">
          <div class="absolute left-0 z-0 w-12 inset-y-0 bg-no-repeat bg-center bg-contain"
            style="background-image: url('/src/assets/images/misc/business.png');">
          </div>
          <Icon class="z-[2] flex-shrink-0 h-12 w-12" />
        </div>
        <div
          class="text-x-verydarkgrey tracking-[-1px] font-sen text-[28px] pt-3 leading-10 font-bold group-hover:text-white">
          Business
        </div>
        <div class="text-x-mediumgrey text-left group-hover:text-white">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
      </a>


      <a href="Category"
        class="[max-width:296px]  border-x-mediumgrey hover:bg-x-blue flex justify-center flex-grow flex-col gap-y-1 items-start border border-opacity-40 p-8 group transition duration-150 ease-in-out">
        <div class="flex relative z-0 items-center">
          <div class="absolute left-0 z-0 w-12 inset-y-0 bg-no-repeat bg-center bg-contain"
            style="background-image: url('/src/assets/images/misc/startup.png');">
          </div>
          <Icon class="z-[2] flex-shrink-0 h-12 w-12" />
        </div>
        <div
          class="text-x-verydarkgrey tracking-[-1px] font-sen text-[28px] pt-3 leading-10 font-bold group-hover:text-white">
          Startup
        </div>
        <div class="text-x-mediumgrey text-left group-hover:text-white">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
      </a>

      <a href="Category"
        class="[max-width:296px]  border-x-mediumgrey hover:bg-x-blue flex justify-center flex-grow flex-col gap-y-1 items-start border border-opacity-40 p-8 group transition duration-150 ease-in-out">
        <div class="flex relative z-0 items-center">
          <div class="absolute left-0 z-0 w-12 inset-y-0 bg-no-repeat bg-center bg-contain"
            style="background-image: url('/src/assets/images/misc/economy.png');">
          </div>
          <Icon class="z-[2] flex-shrink-0 h-12 w-12" />
        </div>
        <div
          class="text-x-verydarkgrey tracking-[-1px] font-sen text-[28px] pt-3 leading-10 font-bold group-hover:text-white">
          Economy
        </div>
        <div class="text-x-mediumgrey text-left group-hover:text-white">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
      </a>

      <a href="Category"
        class="[max-width:296px]  border-x-mediumgrey hover:bg-x-blue flex justify-center flex-grow flex-col gap-y-1 items-start border border-opacity-40 p-8 group transition duration-150 ease-in-out">
        <div class="flex relative z-0 items-center">
          <div class="absolute left-0 z-0 w-12 inset-y-0 bg-no-repeat bg-center bg-contain"
            style="background-image: url('/src/assets/images/misc/technology.png');">
          </div>
          <Icon class="z-[2] flex-shrink-0 h-12 w-12" />
        </div>
        <div
          class="text-x-verydarkgrey tracking-[-1px] font-sen text-[28px] pt-3 leading-10 font-bold group-hover:text-white">
          Technology
        </div>
        <div class="text-x-mediumgrey text-left group-hover:text-white">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
      </a>
    </div>
  </div>
</template>