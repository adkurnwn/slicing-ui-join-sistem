<script setup lang="ts">
import SocialWrapper from './SocialWrapper.vue';


</script>

<template>
 <div class="text-center w-full flex flex-col gap-y-8 mb-8">
    <div class="flex justify-center items-center">
        <a href="author" class="tracking-[-2px] leading-[48px] text-slate-800 font-sen text-center font-bold text-4xl">
            List of Authors
        </a>
    </div>
    <div class="min-[1270px]:flex-nowrap flex flex-wrap justify-between flex-grow gap-x-8 gap-y-8">
        <a class="bg-x-lavender  hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80">
            <img src="@/assets/images/misc/man-in-yellow.png" class="flex-shrink-0 h-32 w-32" />
            <div class="text-slate-800 tracking-[-1px] font-sen text-[20px] pt-5 leading-10 font-bold">
                Floyd Miles
            </div>
            <div class="tracking-[0px] text-zinc-500 font-inter leading-5 text-sm">
                Content Writer @Company
            </div>
            <div class="scale-75">
                <SocialWrapper />
            </div>
        </a>
        <div class="bg-x-lavender  hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80">
            <img src="@/assets/images/misc/woman-in.png" class="flex-shrink-0 h-32 w-32" />
            <div class="text-slate-800 tracking-[-1px] font-sen text-[20px] pt-5 leading-10 font-bold">
                Dianne Russell
            </div>
            <div class="tracking-[0px] text-zinc-500 font-inter leading-5 text-sm">
                Content Writer @Company
            </div>
            <div class="scale-75">
                <SocialWrapper />
            </div>
        </div>
        <div class="bg-x-lavender  hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80">
            <img src="@/assets/images/misc/fashion-woman.png" class="flex-shrink-0 h-32 w-32" />
            <div class="text-slate-800 tracking-[-1px] font-sen text-[20px] pt-5 leading-10 font-bold">
                Jenny Wilson
            </div>
            <div class="tracking-[0px] text-zinc-500 font-inter leading-5 text-sm">
                Content Writer @Company
            </div>
            <div class="scale-75">
                <SocialWrapper />
            </div>
        </div>
        <div class="bg-x-lavender  hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80">
            <img src="@/assets/images/misc/content-baker.png" class="flex-shrink-0 h-32 w-32" />
            <div class="text-slate-800 tracking-[-1px] font-sen text-[20px] pt-5 leading-10 font-bold">
                Leslie Alexander
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

</template>