<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinContent from '@/components/JoinContent.vue'
import AuthorContent from '@/components/AuthorContent.vue';
import SocialWrapper from '@/components/SocialWrapper.vue';
</script>

<template>
  <MainLayout>

    <div class="mt-8 px-16 pt-64">
      <div class="relative">
        <div class="flex w-[1000px] justify-between items-center h-[350px] absolute bottom-[319px] left-[7%]">
          <div class="flex flex-col w-[624px] bg-white mx-12 px-12 py-12">
            <div class="tracking-[6px] text-sm">
              ABOUT US
            </div>
            <div class="text-4xl font-bold">
              We are a team of content writers who share their learnings
            </div>
          </div>
          <div class="w-[477px] text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>
        </div>
        <img src="@/assets/images/misc/Overview.png" />
        <div class="absolute bottom-0 left-[7%]">
          <div class="h-[120px] w-[570px] bg-x-blue flex justify-between px-12 items-center">
            <div>
              <div class="text-white text-5xl font-bold">
                12+
              </div>
              <div class="text-white text-sm font-light">
                Blog Published
              </div>
            </div>
            <div>
              <div class="text-white text-5xl font-bold">
                18K+
              </div>
              <div class="text-white text-sm font-light">
                Views on Finsweet
              </div>
            </div>
            <div>
              <div class="text-white text-5xl font-bold">
                30K+
              </div>
              <div class="text-white text-sm font-light">
                Total active Users
              </div>
            </div>

          </div>
          <div class="w-[831px] h-[19px] bg-x-yellow">

          </div>
        </div>

      </div>
      <div class="h-[404px] bg-x-lavender flex justify-between items-center px-20 gap-x-12">
        <div class="flex flex-col gap-5">
          <div class="tracking-[2px] font-medium">
            OUR MISION
          </div>
          <div class="text-2xl font-bold">
            Creating valuable content for creatives all around the world
          </div>
          <div class="text-x-mediumgrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
            adipiscing at in tellus.
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <div class="tracking-[2px] font-medium">
            OUR VISION
          </div>
          <div class="text-2xl font-bold">
            A platform that empowers individuals to improve
          </div>
          <div class="text-x-mediumgrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
            adipiscing at in tellus.
          </div>
        </div>
      </div>
    </div>

    <div class="px-16  py-16 flex justify-evenly gap-x-8">
      <div class="flex flex-col gap-5 w-[519px] justify-center">
        <div class="text-4xl font-bold">
          Our team of creatives
        </div>
        <div class="text-2xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
        <div class="text-x-mediumgrey text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </div>
      </div>
      <div class="w-[624px] relative">
        <img src="@/assets/images/posts/hands.png" alt="Design tips article featured image"
          class="object-contain  max-md:max-w-full" />
        <div class="absolute bottom-[240px] left-[-7%] w-24 h-24 bg-x-blue rounded-tl-3xl">

        </div>
      </div>
    </div>

    <div class="px-16  py-16 flex justify-evenly gap-x-8">
      <div class="w-[624px] relative">
        <img src="@/assets/images/posts/sitting.png" alt="Design tips article featured image"
          class="object-contain  max-md:max-w-full" />
        <div class="absolute bottom-[-27px] left-[13%] w-16 h-16 bg-x-yellow rounded-full">

        </div>
      </div>
      <div class="flex flex-col gap-5 w-[519px] justify-center">
        <div class="text-4xl font-bold">
          Why we started this Blog
        </div>
        <div class="text-2xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
        <div class="text-x-mediumgrey text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </div>
      </div>
    </div>

    <div class="px-16 py-16">
      <AuthorContent />
      <div class="min-[1270px]:flex-nowrap flex flex-wrap justify-between flex-grow gap-x-8 gap-y-8">
        <button
          class="bg-x-lavender  hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80">
          <img src="@/assets/images/misc/guy.png" class="flex-shrink-0 h-32 w-32" />
          <div class="text-slate-800 tracking-[-1px] font-sen text-[20px] pt-5 leading-10 font-bold">
            Guy Hawkins
          </div>
          <div class="tracking-[0px] text-zinc-500 font-inter leading-5 text-sm">
            Content Writer @Company
          </div>
          <div class="scale-75">
            <SocialWrapper />
          </div>
        </button>
        <div
          class="bg-x-lavender  hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80">
          <img src="@/assets/images/misc/eleanor.png" class="flex-shrink-0 h-32 w-32" />
          <div class="text-slate-800 tracking-[-1px] font-sen text-[20px] pt-5 leading-10 font-bold">
            Eleanor Pena
          </div>
          <div class="tracking-[0px] text-zinc-500 font-inter leading-5 text-sm">
            Content Writer @Company
          </div>
          <div class="scale-75">
            <SocialWrapper />
          </div>
        </div>
        <div
          class="bg-x-lavender  hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80">
          <img src="@/assets/images/misc/robert.png" class="flex-shrink-0 h-32 w-32" />
          <div class="text-slate-800 tracking-[-1px] font-sen text-[20px] pt-5 leading-10 font-bold">
            Robert Fox
          </div>
          <div class="tracking-[0px] text-zinc-500 font-inter leading-5 text-sm">
            Content Writer @Company
          </div>
          <div class="scale-75">
            <SocialWrapper />
          </div>
        </div>
        <div
          class="bg-x-lavender  hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80">
          <img src="@/assets/images/misc/jacob.png" class="flex-shrink-0 h-32 w-32" />
          <div class="text-slate-800 tracking-[-1px] font-sen text-[20px] pt-5 leading-10 font-bold">
            Jacob Jones
          </div>
          <div class="tracking-[0px] text-zinc-500 font-inter leading-5 text-sm">
            Content Writer @Company
          </div>
          <div class="scale-75">
            <SocialWrapper />
          </div>
        </div>
      </div>
    </div>
    <JoinContent />
  </MainLayout>
</template>
