<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class=" w-full flex flex-col gap-y-3 items-center px-60 py-24">
      <!-- Header Section -->
      <div class="tracking-[3px] text-x-verydarkgrey uppercase font-black leading-5 text-center">
        Contact us
      </div>
      <div class="flex justify-center pr-px self-stretch items-center">
        <div class=" text-x-verydarkgrey font-bold text-5xl text-center">
          Let’s Start a Conversation
        </div>
      </div>
      <div class="text-x-mediumgrey self-stretch pt-3 items-center justify-center flex text-center leading-7">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
      </div>

      <!-- Working Hours and Contact Info Section -->
      <div class="pt-14 flex justify-end self-stretch flex-col">
        <div class="text-neutral-600  pr-[74px] flex justify-center pl-16 flex-col gap-y-4 bg-yellow-300 py-12">
          <div
            class="gap-y-5 leading-5 text-sm flex flex-wrap justify-center gap-x-11 items-center">
            <div class="gap-y-4 flex-shrink-0 flex w-72 flex-col items-start">
              <div>Working hours</div>
              <Line class="flex-shrink-0 h-px self-stretch" />
            </div>
            <div class="gap-y-4 flex-shrink-0 flex w-72 flex-col items-start">
              <div>Contact Us</div>
              <Line1 class="flex-shrink-0 h-px self-stretch" />
            </div>
          </div>
          <div class="min-[758px]:flex-nowrap gap-x-[71px] gap-y-[30px] flex flex-wrap items-start">
            <div>
              <div class=" font-bold leading-8 text-xl w-56">
                Monday To Friday
              </div>
              <div class=" font-bold leading-8 text-xl w-60">
                9:00 AM to 8:00 PM
              </div>
              <div class="leading-7">Our Support Team is available 24/7</div>
            </div>
            <div class="flex-shrink-0 w-48">
              <div class=" font-bold leading-8 text-xl self-stretch">
                020 7993 2905
              </div>
              <div class="leading-7">hello@finsweet.com</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form class="w-full flex flex-col gap-y-4">
        <!-- Full Name Field -->
        <div class="flex justify-end pt-5 self-stretch flex-col">
          <div class="border-x-mediumgrey flex items-center border border-solid p-6 rounded-sm">
            <input type="text" id="fullName" name="fullName" placeholder="Full Name"
              class="ml-4 flex-grow text-x-verydarkgrey leading-7 bg-transparent outline-none placeholder-slate-800" />
          </div>
        </div>


        <!-- Email Field -->
        <div class="flex justify-end pt-1 self-stretch flex-col">
          <div class="border-x-mediumgrey flex items-center border border-solid p-6 rounded-sm">
            <input type="email" id="email" name="email" placeholder="Your Email"
              class="ml-4 flex-grow text-x-verydarkgrey leading-7 bg-transparent outline-none placeholder-slate-800" />
          </div>
        </div>

        <!-- Province and City Fields -->
        <div class="text-x-verydarkgrey leading-7 flex flex-wrap justify-center pt-0.5 gap-x-4 gap-y-4">
          <!-- Province Field -->
          <div class="border-x-mediumgrey py-[22px] flex items-center border border-solid flex-grow px-6">
            <select id="province" name="province"
              class="text-x-verydarkgrey leading-7 bg-transparent outline-none flex-grow placeholder-slate-800"
              aria-placeholder="Province">
              <option value="" selected>Province</option>
              <option value="Jawa Tengah">Jawa Tengah</option>
            </select>
            <Vector class="h-[6.8px] w-[11px] flex-shrink-0 ml-4" />
          </div>

          <!-- City Field -->
          <div class="border-x-mediumgrey py-[22px] flex items-center border border-solid flex-grow px-6">
            <select id="city" name="city"
              class="text-x-verydarkgrey leading-7 bg-transparent outline-none flex-grow placeholder-slate-800"
              aria-placeholder="City">
              <option value="" selected>City</option>
              <option value="Klaten">Klaten</option>
            </select>
            <Vector class="h-[6.8px] w-[11px] flex-shrink-0 ml-4" />
          </div>
        </div>

        <!-- Message Field -->
        <div class="flex justify-end pt-1.5 self-stretch flex-col">
          <div class="pb-[91px] border-x-mediumgrey flex pt-6 items-start border border-solid px-6 rounded-sm">
            <textarea id="message" name="message" placeholder="Message"
              class="ml-4 flex-grow text-x-verydarkgrey leading-7 bg-transparent outline-none resize-none placeholder-slate-800"></textarea>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end pt-1 self-stretch flex-col">
          <button type="submit"
            class="pr-[17px] flex justify-center pl-4 bg-x-blue hover:bg-x-yellow items-center py-4 ">
            <div class="text-x-verydarkgrey font-bold leading-8 text-2xl text-center">Send Message</div>
          </button>
        </div>

      </form>
    </div>

  </MainLayout>
</template>
