<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import Category from '@/components/Category.vue'
import JoinContent from '@/components/JoinContent.vue'
import AllPost from '@/components/AllPost.vue';
</script>

<template>
  <MainLayout>
    <div class="w-full flex flex-col gap-y-8">
      <div class="pr-[736px] bg-x-lavender flex relative justify-center pl-20 flex-col gap-y-4 items-start py-24">
        <img class="w-[515px] absolute right-20 object-center object-cover inset-y-20"
          src="/src/assets/images/misc/blog-header.png" loading="lazy" />
        <div class=" text-x-black font-medium leading-5">
          FEATURED POST
        </div>

        <div class=" text-x-black font-bold text-4xl items-center flex self-stretch">
          Step-by-step guide to choosing great font pairs
        </div>

        <div class="font-medium leading-5 text-sm">
          <span><span class="text-x-darkgrey">By </span>
            <a href="#"><span class="text-yellow-300">John Doe </span></a>
            <span class="text-neutral-600">l May 23, 2022</span></span>
        </div>
        <div class="text-zinc-500 leading-7 items-start flex self-stretch mb-2">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
        </div>
        <a href="post"
          class="bg-x-blue hover:bg-x-yellow  duration-150 ease-in-out text-center text-white leading-6 font-bold text-lg py-4 px-12">
          Read More >
      </a>
      </div>

      
    </div>
    <AllPost />
    <div class="px-16 w-full">
    <Category />
    <JoinContent />
    </div>
  </MainLayout>
</template>
