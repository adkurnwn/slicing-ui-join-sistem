<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="tracking-[0px] font-inter w-full flex flex-col gap-y-3 items-center px-60 py-24" >
    <div class="tracking-[3px] text-slate-800 uppercase font-black leading-5 text-center" >
      Contact us
    </div>
    <div class="flex justify-center pr-px self-stretch items-center">
      <div class="tracking-[-2px] leading-[64px] text-slate-800 font-sen font-bold text-5xl text-center" >
        Let’s Start a Conversation
      </div>
    </div>
    <div class="text-zinc-500 self-stretch pt-3 items-center justify-center flex text-center leading-7" >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
    </div>
    <div class="pt-[52px] flex justify-end self-stretch flex-col">
      <div class="text-neutral-600 pr-[74px] flex justify-center pl-16 flex-col gap-y-4 bg-yellow-300 py-12" >
        <div class="min-[758px]:flex-nowrap gap-y-[18px] leading-5 text-sm flex flex-wrap justify-center gap-x-11 items-center" >
          <div class="gap-y-[15px] flex-shrink-0 flex w-72 flex-col items-start" >
            <div>Working hours</div>
            <Line class="flex-shrink-0 h-px self-stretch" />
          </div>
          <div class="gap-y-[15px] flex-shrink-0 flex w-72 flex-col items-start" >
            <div>Contact Us</div>
            <Line1 class="flex-shrink-0 h-px self-stretch" />
          </div>
        </div>
        <div class="min-[758px]:flex-nowrap gap-x-[71px] gap-y-[30px] flex flex-wrap items-start" >
          <div>
            <div class="font-sen font-bold leading-8 text-xl w-56">
              Monday To Friday
            </div>
            <div class="font-sen font-bold leading-8 text-xl w-60">
              9:00 AM to 8:00 PM
            </div>
            <div class="leading-7">Our Support Team is available 24/7</div>
          </div>
          <div class="flex-shrink-0 w-48">
            <div class="font-sen font-bold leading-8 text-xl self-stretch">
              020 7993 2905
            </div>
            <div class="leading-7">hello@finsweet.com</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pt-5 self-stretch flex-col">
      <div class="border-zinc-500/50 flex items-center border border-solid p-6 rounded-sm" >
        <div class="text-slate-800 leading-7">Full Name</div>
      </div>
    </div>
    <div class="flex justify-end pt-1 self-stretch flex-col">
      <div class="border-zinc-500/50 flex items-center border border-solid p-6 rounded-sm" >
        <div class="text-slate-800 leading-7">Your Email</div>
      </div>
    </div>
    <div class="min-[758px]:flex-nowrap text-slate-800 leading-7 flex flex-wrap justify-center pt-0.5 max-h-20 flex-grow self-stretch gap-x-4 gap-y-4" >
      <div class="min-[758px]:flex-nowrap pr-[22px] gap-y-[3.4px] border-zinc-500/50 py-[22px] flex flex-wrap justify-center pl-6 gap-x-64 items-center border border-solid" >
        <div>Province</div>
        <Vector class="h-[6.8px] w-[11px] flex-shrink-0" />
      </div>
      <div class="min-[758px]:flex-nowrap pr-[22px] gap-y-[3.4px] border-zinc-500/50 py-[22px] flex flex-wrap justify-center pl-6 gap-x-72 items-center border border-solid" >
        <div>City</div>
        <Vector class="h-[6.8px] w-[11px] flex-shrink-0" />
      </div>
    </div>
    <div class="flex justify-end pt-1.5 self-stretch flex-col">
      <div class="pb-[91px] border-zinc-500/50 flex pt-6 items-start border border-solid px-6 rounded-sm" >
        <div class="text-slate-800 leading-7">Message</div>
      </div>
    </div>
    <div class="flex justify-end pt-1 self-stretch flex-col">
      <div class="pr-[17px] flex justify-center pl-4 bg-blue-600 items-center py-4" >
        <div class="text-slate-800 font-sen font-bold leading-8 text-2xl text-center" >
          Send Message
        </div>
      </div>
    </div>
  </div>
  </MainLayout>
</template>
